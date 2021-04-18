(() => {
  function addImage(jsonData) {
    let htmlContent;
    if (jsonData && jsonData.results && jsonData.results[0]) {
      const firstImg = jsonData.results[0];
      htmlContent = `<figure>
        <img src="${firstImg.urls.regular}" alt="${searchedForText}">
        <figcaption>${searchedForText} by ${firstImg.user.name}</figcaption>
      </figure>`;
    } else {
      htmlContent = '<div class="error-no-image">No images available</div>';
    }
    responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
  }

  async function fetchImages(keyword) {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${keyword}&page=1`,
        {
          headers: {
            authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
          }
        }
      );
      const jsonData = await response.json();
      addImage(jsonData);
    } catch (err) {
      console.log(err);
    }
  }

  function addArticles(jsonData) {
    let htmlContent;
    if (
      jsonData &&
      jsonData.response &&
      jsonData.response.docs &&
      jsonData.response.docs[0]
    ) {
      const articles = jsonData.response.docs;
      htmlContent = '<ul>';
      htmlContent += articles
        .map(
          article => `<li class="article">
            <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
            <p>${article.snippet}</p>`
        )
        .join('');
      htmlContent += '</ul>';
    } else {
      htmlContent = '<div class="error-no-article">No articles available</div>';
    }
    responseContainer.insertAdjacentHTML('beforeend', htmlContent);
  }

  async function fetchArticles(keyword) {
    try {
      const response = await fetch(
        `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${NYTIMES_API_KEY}`
      );
      const jsonData = await response.json();
      addArticles(jsonData);
    } catch (err) {
      console.log(err);
    }
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    searchedForText = searchField.value;

    // Unsplash async request
    fetchImages(searchedForText);

    // NYTimes async request
    fetchArticles(searchedForText);
  });
})();
