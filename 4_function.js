// Calculate the average of two numbers

let a = 5, b = 7;

function add(x, y) {
  return x + y;
}

function divideByTwo(num) {
  return num / 2;
}

console.log(
  'The average of ' + a + ' and ' + b + ' is ' + divideByTwo(add(a, b) + '.')
);


// Note that in a function, if we don't explicit return a value, the default
// return value is 'undefined'
function func() {
  console.log('here');
}
console.log(func()); // undefined
