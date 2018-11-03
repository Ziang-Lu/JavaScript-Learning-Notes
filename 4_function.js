// ***** Normal Function Declaration *****

// Calculate the average of two numbers

function add(x, y) {
  return x + y;
}

function divideByTwo(num) {
  return num / 2;
}

console.log(
  'The average of 5 and 7 is ' + divideByTwo(add(5, 7) + '.')
);


// Note that in a function, if we don't explicit return a value, the default
// return value is 'undefined'
function func() {
  console.log("This function doesn't return anything.");
}
console.log(func()); // undefined


// *** Hoisting ***

let avg = calcAvg(5, 9); // Call a function before its declaration (definition)
// Is it possible?

function calcAvg(a, b) {
  return (a + b) / 2;
}

console.log(avg); // 7
// It is possible!

/*
This JavaScript feature is called "hoisting".
In JavaScript, before the codes are executed, all normal function declarations
(definition) are "hoisted" to the top of the current scope, so that it can be
used later in the program.
i.e., In the example above, before the codes are executed, JavaScript will
automatically "hoist" the declaration (definition) of the function "calcAvg()"
to the top of the global scope, and then execute the codes, so that the above
codes are in effect rearranged by JavaScript to:

function calAvg(a, b) {
  return (a + b) / 2;
}

let avg = calcAvg(5, 9);
console.log(avg);
 */

// * "Hoisting" can happen for variables, too. *

function greet() {
  console.log(greeting); // In a function, use a variable before its declaration
  var greeting = 'Hello!';
  // Is it possible?

  // Output: undefined
  // It is possible!
  // But only with "var" declarations but not "let" delcarations
}

greet();

/*
In the above example, before the codes are executed, JavaScript will
automatically "hoist" the declaration of the variable "greeting" to the top of
the function scope, and then execute the codes, so that the above codes are in
effect rearranged by JavaScript to:

function greet() {
  var greeting;
  console.log(greeting);
  greeting = 'Hello!';
}
 */
 // Note that the "hositing" for variables is very similar the C-style coding
 // convention, which means in each function, first declare all the variables,
 // and then start using them


/*
IMPORTANT!!!
Due to "hoisting", we should DECLARE ALL FUNCTIONS AT THE TOP OF THE SCRIPT,
and in each function, since we'll always use "let" declarations, we don't need
to care "hoisting" for variables.
 */


// ***** Function Expression *****
// (When a function is assigned to a variable)

let catSays = function(count) {
  let catWords = '';
  for (let i = 0; i < count; ++i) {
    catWords += 'meow ';
  }
  return catWords.trim();
}

console.log(catSays(3)) // meow meow meow

/*
In the above example, the right side of the "=" is an anonymous function in
JavaScript, and this anonymous function is assigned to a variable "catSays".
 */

// We can also pass a function expression as an argument to another function
// inline, as follows.

function movie(displayFunc, movieName) {
  displayFunc(movieName);
}

movie(function(movieName) {
  console.log('My favorite movie is ' + movieName + '.');
}, 'Finding Nemo')

/*
TRICKY!!!
Function expressions are not "hoisted" since they involve variable assignment,
so JavaScript will not interpret it until it reaches that line.
 */
