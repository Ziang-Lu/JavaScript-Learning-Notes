function cleanRoom() {
  return new Promise(resolve => {
    // Simply resolve this Promise
    resolve('Cleaned the room');
  });
}

function removeGarbage() {
  return new Promise(resolve => {
    // Simply resolve this Promise
    resolve('Removed the garbage');
  });
}

function winIceCream() {
  return new Promise(resolve => {
    // Simply resolve this Promise
    resolve('Won an ice cream!');
  });
}

module.exports = { cleanRoom, removeGarbage, winIceCream };
