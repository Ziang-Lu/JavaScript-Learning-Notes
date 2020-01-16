const fetch = require('node-fetch');

const { cleanRoom, removeGarbage, winIceCream } = require('../common');

console.log('With asynchronous programming, this line is printed first.');

// Sequential execution (chaining)
cleanRoom()
  .then(msg => {
    console.log(msg);
    return removeGarbage();
  })
  .then(msg => {
    console.log(msg);
    return winIceCream();
  })
  .then(msg => {
    console.log(msg);
    console.log('All finished');
  })
  .catch(err => console.log(err));

// Parallel execution

// Example 1
Promise.all([cleanRoom(), removeGarbage(), winIceCream()])
  .then(values => {
    console.log(values);
    console.log('All finished');
  })
  .catch(err => console.log(err));

// Promise.race([cleanRoom(), removeGarbage(), winIceCream()])
//   .then(value => {
//     console.log(value);
//     console.log('One finished');
//   })
//   .catch(err => console.log(err));

// Example 2

function getJSON(url) {
  return fetch(url).then(response => response.json());
}

function fetchingParallelDisplayInOrder(urls) {
  // Fetch all the URLs in parallel
  const jsonPromises = urls.map(getJSON);

  // Display the json data in order
  let seq = Promise.resolve();
  jsonPromises.forEach(() => {
    seq = seq.then(urlJsonData => console.log(urlJsonData));
  });
  // In this way, we created a sequence of promises. A "console.log()" will not
  // execute until all the previous promises (groups of "getJSON" + "then")
  // resolve.
}
