// TODO: Read docs

const url = require('url');

const myUrl = new url.URL(
  'http://mywebsite.com:8000/index.html?username=kevin&show-posts=active'
);

console.log(myUrl);
// Feel free to check out the URL object
console.log();

// Dynamically add attribute to query parameters
myUrl.searchParams.append('page', 3);
console.log(myUrl.searchParams);
