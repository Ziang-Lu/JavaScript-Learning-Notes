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

  form.addEventListener('submit', e => {
    e.preventDefault();
    searchedForText = searchField.value;

    // fetch()-API returns a Promise

    // Unsplash async request
    fetch(
      `https://api.unsplash.com/search/photos?query=${searchedForText}&page=1`,
      {
        headers: {
          authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
      }
    )
      .then(response => response.json()) // response.json() also returns a Promise
      .then(addImage)
      .catch(errorHandler);
    // Any error that happens along the chain, the execution flow goes to the
    // "catch()" function.

    // NYTimes async request
    fetch(
      `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=${NYTIMES_API_KEY}`
    )
      .then(response => response.json()) // response.json() also returns a Promise
      .then(addArticles)
      .catch(errorHandler);
  });
})();
