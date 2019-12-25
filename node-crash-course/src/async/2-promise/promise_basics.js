const fs = require('fs');

const somePath = 'test.txt';

function myExistHandler() {
  console.log('File exists');
}

function myNotExistHandler(err) {
  console.error(err);
}

// Originally, with callback functions, we would use "fs.exists()" like this:

function checkExistWithCallback(path, existHandler, notExistHandler) {
  fs.exists(path, exists => {
    if (exists) {
      existHandler();
    } else {
      notExistHandler(new Error('Path does not exist'));
    }
  });
}

checkExistWithCallback(somePath, myExistHandler, myNotExistHandler);

// In order to avoid "callback hell", we want to do the same thing with Promise
// like this.

// checkExistsWithPromise(somePath)
//   .then(myExistHandler)
//   .catch(myNotExistHandler);

// If we want to the above, we must let "checkExistsWithPromise()" return a
// Promise (in which we do the necessary work).

function checkExistsWithPromise(path) {
  return new Promise((resolve, reject) => {
    fs.exists(path, exists => {
      if (exists) {
        resolve();
      } else {
        reject(new Error('Path does not exist'));
      }
    });
  });
}

checkExistsWithPromise(somePath)
  .then(myExistHandler)
  .catch(myNotExistHandler);
