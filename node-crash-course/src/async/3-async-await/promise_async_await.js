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
