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

// *** Hoisting ***

const avg = calcAvg(5, 9); // Call a function before its declaration (definition)
// Is it possible?

/**
 * Calculates the average between the given two numbers.
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number} average of the given two numbers.
 */
function calcAvg(a, b) {
  return (a + b) / 2;
}

console.log(avg); // 7
// It is possible!

/*
This feature is called "hoisting".
Before the codes are executed, all normal function declarations (definition) are
"hoisted" to the top of the current scope, so that it can be used later in the
program.
i.e., In the example above, before the codes are executed, JavaScript engine
will automatically "hoist" the declaration (definition) of the function
"calcAvg()" to the top of the global scope, and then execute the codes, so that
the above codes are in effect rearranged by JavaScript engine to:

function calAvg(a, b) {
  return (a + b) / 2;
}

let avg = calcAvg(5, 9);
console.log(avg);
 */

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

/*
TRICKY!!!
Function expressions are not "hoisted" since they involve variable assignment,
so JavaScript will not interpret it until it reaches that line.
 */

// ====================
// Variables defined by "var" keyword are also "hoisted".
// e.g.,
// console.log(a);
// var a = 10;
