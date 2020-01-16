const fetch = require('node-fetch');
const { cleanRoom, removeGarbage, winIceCream } = require('../common');

// Sequential execution (chaining)
async function myRoutine() {
  // This "async" function returns a Promise

  try {
    let msg = await cleanRoom();
    console.log(msg);
    msg = await removeGarbage();
    console.log(msg);
    msg = await winIceCream();
    console.log(msg);
    console.log('All finished');
  } catch (err) {
    console.error(err);
  }
}

myRoutine();

// 使得程序looks and feels like synchronous, 虽然实际上只是syntax sugar, under the
// hood还是asynchronous

// Parallel execution

// Example 1
async function myRoutineParallel() {
  // This "async" function returns a Promise

  try {
    const messages = await Promise.all([
      cleanRoom(),
      removeGarbage(),
      winIceCream()
    ]);
    console.log(messages);
    console.log('All finished');
  } catch (err) {
    console.error(err);
  }
}

myRoutineParallel();

// Example 2
async function fetchingParallelDisplayInOrder(urls) {
  // Fetch all the URLs in parallel
  const textPromises = urls.map(async url => {
    const response = await fetch(url);
    return response.text();
  });

  // Display the texts in order
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
  // Note that we cannot use ".forEach()" as follows:
  // textPromises.forEach(async textPromise => console.log(await textPromise));
  // since the asynchronous functions that we pass to ".forEach()" will execute
  // in parallel, and thus we have no guarantee on the order of text displaying.
}
