// ***** while Loop *****

// Variant FizzBuzz game
let num = 1;
while (num <= 20) {
  let s = num.toString();
  if (num % 3 === 0 && num % 5 === 0) {
    s += ': JuliaJames';
  } else if (num % 3 === 0) {
    s += ': Julia';
  } else if (num % 5 === 0) {
    s += ': James';
  }
  console.log(s);
  ++num;
}

console.log();

// ***** for Loop *****

// Print movie theater seats
const numOfRows = 15;
const seatsPerRow = 20;
console.log(
  `Number of rows: ${numOfRows}, Number of seats per row: ${seatsPerRow}`
);
for (let row = 0; row < numOfRows; ++row) {
  for (let seat = 0; seat < seatsPerRow; ++seat) {
    console.log(`${row}-${seat}`);
  }
}
