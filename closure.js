const characters = ['Andy', 'Bob', 'Charlie', 'Dave', 'Elvin', 'Frank', 'Gary'];

function getCharacter() {
  const randomIdx = Math.floor(Math.random() * characters.length);
  return characters[randomIdx];
}

function getHero() {
  return getCharacter();
}

function getFoil(hero) {
  let foil = getCharacter();
  while (foil === hero) {
    foil = getCharacter();
  }
  return foil;
}

let sagas = [];

let hero = getHero();
console.log(`Selected hero: ${hero}`);

let newSagaStory = function() {
  let foil = getFoil(hero);
  console.log(`Called newSagaStory; Selected foil: ${foil}`);
  sagas.push(function() {
    let deed = 'Eyes';
    console.log(`${hero} ${deed} ${foil}`);
  });
}

newSagaStory();

sagas[0]();
sagas[0]();

newSagaStory();
