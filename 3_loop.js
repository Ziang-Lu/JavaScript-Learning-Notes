// ***** while Loop *****

// Imaginary FizzBuzz game
let num = 1;
while (num <= 20) {
  if ((num % 3 === 0) && (num % 5 === 0)) {
    console.log('JuliaJames');
  } else if (num % 3 === 0) {
    console.log('Julia');
  } else if (num % 5 === 0) {
    console.log('James');
  } else {
    console.log(num);
  }
  ++num;
}

// ***** for Loop *****

// Print theater seats
const numOfRows = 26;
const seatsPerRow = 100;
for (let row = 0; row < numOfRows; ++row) {
  for (let seat = 0; seat < seatsPerRow; ++seat) {
    console.log(`${row}-${seat}`);
  }
}
