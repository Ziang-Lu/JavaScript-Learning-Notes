// ***** Normal Function Declaration *****

// Calculate the average of two numbers

/**
 * Adds the given two numbers.
 * @param {number} x first addend
 * @param {number} y second addend
 * @returns {number} sum of the given two numbers
 */
function add(x, y) {
  return x + y;
}

/**
 * Divides the given number by 2.
 * @param {number} num given number
 * @returns {number} given number divided by 2
 */
function divideByTwo(num) {
  return num / 2;
}

console.log(`The average of 5 and 7 is ${divideByTwo(add(5, 7))}`);

// Note that in a function, if we don't explicit return a value, the default
// return value is 'undefined'
function func() {
  console.log("This function doesn't return anything.");
}
console.log(func()); // undefined

console.log();

// ***** Function Expression *****
// (When a function is assigned to a variable)

// Define an anonymous function, and assign it to a variable
// Approach 1
// const anonymousAdd = function(x, y) {
//   return x + y;
// }
// Approach 2: "Arrow function"
const anonymousAdd = (x, y) => x + y;
console.log(anonymousAdd(5, 7)); // 12

// We can pass a function expression as an argument to another function inline,
// as follows.

/**
 * Applies the given function on the given movie.
 * @param {*} movieFunc function to be applied on the given movie
 * @param {string} movie given movie
 * @returns {*}
 */
const movieProcessing = (movieFunc, movie = 'Titanic') => movieFunc(movie);

/**
 * Prints the given favorite movie.
 * @param {string} movie given favorite movie
 */
const printFavoriteMovie = movie =>
  console.log(`My favorite movie is ${movie}`);

movieProcessing(printFavoriteMovie, 'Finding Nemo'); // My favorate movie is Finding Nemo.
movieProcessing(printFavoriteMovie); // My favorate movie is Titanic.
