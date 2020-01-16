/**
 * Returns a random element from the given array.
 * @param {Array} arr given array
 * @returns {*} randomly returned element
 */
function getRandElem(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

const NAMES = ['Alice', 'Bob', 'Chris', 'David', 'Ella', 'Frank', 'Gary'];

/**
 * Returns a random character from the characters.
 * This function is create from a function self-invocation, to create a closure.
 * Feel free to check out my notes on closure.
 * @returns {string} randomly returned character
 */
const getChar = (() => {
  const NAMES = ['Alice', 'Bob', 'Chris', 'David', 'Ella', 'Frank', 'Gary'];

  return () => {
    return getRandElem(NAMES);
  };
})();

const hero = getChar();
console.log(`Hero: ${hero}`);

/**
 * Returns a foil, who is different from the given story hero.
 * @param {string} hero story hero
 * @returns {string} returned foil
 */
function getFoil(hero) {
  let char = getChar();
  while (char === hero) {
    char = getChar();
  }
  return char;
}

/**
 * Returns a random deed from the deeds.
 * This function is create from a function self-invocation, to create a closure.
 * Feel free to check out my notes on closure.
 * @returns {string} randomly returned character
 */
const getDeed = (() => {
  const DEEDS = ['Eyes', 'Stares', 'Tips', 'Tops'];
  return () => {
    return getRandElem(DEEDS);
  };
})();

const sagas = [];

function newSaga() {
  const foil = getChar();
  console.log(`Foil: ${foil}`);

  sagas.push(() => {
    console.log('===== SAGA function =====');
    const deed = getDeed();
    console.log(`Generated deed: ${deed}`);
    console.log(`${hero} ${deed} ${foil}`);
    console.log('===== End =====');
  });
}

newSaga();
sagas[0]();
console.log();
sagas[0]();
console.log();

// newSaga();

// This will work.
// And note the output, we see that sagas[0] function REMEMBERS that "foil"
// variable, which is in the context which the sagas[0] function is defined in.

// sagas[0]();
// console.log();
// sagas[1]();
// console.log();
// sagas[0]();
// console.log();
