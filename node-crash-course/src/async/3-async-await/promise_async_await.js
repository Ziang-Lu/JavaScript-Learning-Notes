const { cleanRoom, removeGarbage, winIceCream } = require('../common');

async function myRoutine() {
  let msg = await cleanRoom();
  console.log(msg);
  msg = await removeGarbage();
  console.log(msg);
  msg = await winIceCream();
  console.log(msg);
  console.log('All finished');
}

myRoutine();
