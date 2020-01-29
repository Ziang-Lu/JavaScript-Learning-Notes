const fs = require('fs');

// Originally, with a callback function, we would use "setTimeout()" like this:

setTimeout(
  () => console.log('This is from a normal setTimeout() callback function!'),
  1000
);

// With Promise, we want to do the same thing like this.

// setTimeoutWithPromise()
//   .then(console.log('This is from the "resolve()" callback of a Promise'))
//   .catch(err => console.error(err));

// If we want the above, we must let "setTimeoutWithPromise()" return a Promise
// (in which we simply wrap a setTimeout() call).

/**
 * Promisified version of setTimout().
 * @param {number} timeout delay time in miliseconds
 * @returns {Promise} promise wrapping setTimeout()
 */
function setTimeoutWithPromise(timeout) {
  return new Promise((resolve, reject) => {
    if (typeof timeout !== 'number') {
      reject(Error('timeout should be a valid number'));
    } else {
      setTimeout(resolve, timeout);
    }
  });
}

setTimeoutWithPromise()
  .then(console.log('This is from the "resolve()" callback of a Promise'))
  .catch(err => console.error(err));

// ----------------------------------------------------------------------------

function myExistHandler() {
  console.log('File exists');
}

function myNotExistHandler(err) {
  console.error(err);
}

const somePath = 'fetch_demo.js';

// Originally, with callback functions, we would use "fs.exists()" like this:

function checkExistWithCallback(path, existHandler, notExistHandler) {
  fs.exists(path, exists => {
    if (exists) {
      existHandler();
    } else {
      notExistHandler(Error('Path does not exist'));
    }
  });
}

checkExistWithCallback(somePath, myExistHandler, myNotExistHandler);

// With Promise, we want to do the same thing like this.

// checkExistsWithPromise(somePath)
//   .then(myExistHandler)
//   .catch(myNotExistHandler);

// If we want the above, we must let "checkExistsWithPromise()" return a Promise
// (in which we do the necessary work).

function checkExistsWithPromise(path) {
  return new Promise((resolve, reject) => {
    fs.exists(path, exists => {
      if (exists) {
        resolve();
      } else {
        reject(Error('Path does not exist'));
      }
    });
  });
}

checkExistsWithPromise(somePath)
  .then(myExistHandler)
  .catch(myNotExistHandler);

console.log('With asynchronous programming, this line is printed first.');

// Output:
// With asynchronous programming, this line is printed first.
// File exists
// File exists
