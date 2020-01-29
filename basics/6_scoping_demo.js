/**
 * Returns a random element from the given array.
 * @param {Array} arr given array
 * @returns {*} randomly returned element
 */
function getRandElem(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

/**
 * Returns a random character from the characters.
 * This function is created from a function self-invocation, to create a
 * closure.
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
 * This function is created from a function self-invocation, to create a
 * closure.
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

console.log('First invokation...');

newSaga();
sagas[0]();
console.log();
sagas[0]();
console.log();

// Hero: Chris
// First invokation...
// Foil: Alice
// ===== SAGA function =====
// Generated deed: Eyes
// Chris Eyes Alice
// ===== End =====

// ===== SAGA function =====
// Generated deed: Stares
// Chris Stares Alice
// ===== End =====

// The function at sagas[0] REMEMBERS the outer "foil", so these two invokations
// outputs the same foil "Alice".

console.log('Second invocation...');

newSaga();
sagas[0]();
console.log();
sagas[1]();
console.log();
sagas[0]();

// Foil: Frank
// ===== SAGA function =====
// Generated deed: Tops
// Chris Tops Alice
// ===== End =====

// Still, sagas[0] REMEMBERS its same foil "Alice".

// ===== SAGA function =====
// Generated deed: Tips
// Chris Tips Frank
// ===== End =====

// However, for sagas[1], it generates a new "foil" called "Frank", and it
// REMEMBERS that new foil "Frank".

// ===== SAGA function =====
// Generated deed: Eyes
// Chris Eyes Alice
// ===== End =====

// Still, sagas[0] REMEMBERS its same foil "Alice".
