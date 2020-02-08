(() => {
  function addImage() {
    const data = JSON.parse(this.responseText); // "this" refers to the XMLHttpRequest object
    let htmlContent;
    if (data && data.results && data.results[0]) {
      const firstImg = data.results[0];
      htmlContent = `<figure>
        <img src="${firstImg.urls.regular}" alt="${searchedForText}">
        <figcaption>${searchedForText} by ${firstImg.user.name}</figcaption>
      </figure>`;
    } else {
      htmlContent = '<div class="error-no-image">No images available</div>';
    }
    responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
  }

  function addArticles() {
    const data = JSON.parse(this.responseText); // "this" refers to the XMLHttpRequest object
    let htmlContent;
    if (data && data.response && data.response.docs && data.response.docs[0]) {
      const articles = data.response.docs;
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

    // Unsplash async request
    const unsplashRequest = new XMLHttpRequest();
    unsplashRequest.open(
      'GET',
      `https://api.unsplash.com/search/photos?query=${searchedForText}&page=1`
    );
    unsplashRequest.setRequestHeader(
      'Authorization',
      `Client-ID ${UNSPLASH_ACCESS_KEY}`
    );
    unsplashRequest.onload = addImage;
    unsplashRequest.onerror = errorHandler;
    unsplashRequest.send();

    // NYTimes async request
    const nytimesRequest = new XMLHttpRequest();
    nytimesRequest.open(
      'GET',
      `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=${NYTIMES_API_KEY}`
    );
    nytimesRequest.onload = addArticles;
    nytimesRequest.onerror = errorHandler;
    nytimesRequest.send();
  });
})();
