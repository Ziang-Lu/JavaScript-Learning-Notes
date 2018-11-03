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
  console.log("This function doesn't return anything.");
}
console.log(func()); // undefined


// ********** HOISTING **********

let avg = calcAvg(5, 9); // Call a function before its declaration (definition)
// Is it possible?

function calcAvg(a, b) {
  return (a + b) / 2;
}

console.log(avg); // 7
// It is possible!

/*
This JavaScript feature is called "hoisting".
In JavaScript, before the codes are executed, all function declarations
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

// ***** "Hoisting" happens for variables, too. *****

function greet() {
  console.log(greeting); // In a function, use a variable before its declaration
  var greeting = 'Hello!';
  // Is it possible?

  // Output: undefined
  // It is possible!
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
