const fetch = require('node-fetch');

const { cleanRoom, removeGarbage, winIceCream } = require('../common');

console.log('With asynchronous programming, this line is printed first.');

// ===== Sequential execution (chaining) =====
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

// ===== Parallel execution =====

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
//     console.log('First one finished');
//   })
//   .catch(err => console.log(err));

// Example 2: Parallel execution and then sequential execution

/**
 * Fetches the given URL and returns a result JSON.
 * @param {string} url URL to fetch
 * @returns {object} result JSON
 */
const getJSON = url => {
  return fetch(url).then(response => response.json());
};

/**
 * Fetches the given URLs in parallel, and display the results in order.
 * @param {Array} urls list of URLs
 * @returns {undefined}
 */
const fetchingParallelDisplayInOrder = urls => {
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
};
