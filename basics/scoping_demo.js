function getRandElem(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

const NAMES = ['Alice', 'Bob', 'Chris', 'David', 'Ella', 'Frank', 'Gary'];

function getChar() {
  return getRandElem(NAMES);
}

const hero = getChar();
console.log(`Hero: ${hero}`);

function getFoil(hero) {
  let char = getChar();
  while (char === hero) {
    char = getChar();
  }
  return char;
}

const DEEDS = ['Eyes', 'Stares', 'Tips', 'Tops'];

function getDeed() {
  return getRandElem(DEEDS);
}

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

newSaga();

// This will work.
// And note the output, we see that sagas[0] function REMEMBERS that "foil"
// variable, which is in the context which the sagas[0] function is defined in.

sagas[0]();
console.log();
sagas[1]();
console.log();
sagas[0]();
console.log();
