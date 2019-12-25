function cleanRoom() {
  return new Promise((resolve, reject) => {
    // Simply resolve this Promise
    resolve('Cleaned the room');
  });
}

function removeGarbage() {
  return new Promise((resolve, reject) => {
    // Simply resolve this Promise
    resolve('Removed the garbage');
  });
}

function winIceCream() {
  return new Promise((resolve, reject) => {
    // Simply resolve this Promise
    resolve('Won an ice cream!');
  });
}

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
  });

// Parallel execution
// Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(values => {
//   console.log(values);
//   console.log('All finished');
//   console.log();
// });

// Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(value => {
//   console.log(value);
//   console.log('One finished');
// });
