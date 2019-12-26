/**
 * Promises to clean the room.
 * @returns {Promise} a Promise to clean the room
 */
function cleanRoom() {
  return new Promise((resolve, reject) => {
    // Simply resolve this Promise
    resolve('Cleaned the room');
  });
}

/**
 * Promises to remove the garbage.
 * @returns {Promise} a Promise to remove the garbage
 */
function removeGarbage() {
  return new Promise((resolve, reject) => {
    // Simply resolve this Promise
    resolve('Removed the garbage');
  });
}

/**
 * Promised to be given an ice cream.
 * @returns {Promise} a Promise to get an ice cream
 */
function winIceCream() {
  return new Promise((resolve, reject) => {
    // Simply resolve this Promise
    resolve('Won an ice cream!');
  });
}

module.exports = { cleanRoom, removeGarbage, winIceCream };
