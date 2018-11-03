// ***** number *****
console.log('Type of 123: ' + typeof(123)); // Type of 123: number
console.log('2 / 0 = ' + 2 / 0); // 2 / 0 = Infinity
console.log('0 / 0 = ' + 0 / 0); // 0 / 0 = NaN

// ***** boolean *****
console.log('Type of true: ' + typeof(true)); // Type of true: boolean

// ***** string *****
console.log("Type of 'any text': " + typeof('any text')); // Type of 'any text': string

// ***** array *****
console.log('Type of an array: ' + typeof([123, true, 'any text'])); // Type of an array: object

// *** Special Data Values ***
// null: "Value of nothing or totally empty"
let x = null;
console.log(x); // null
// undefined: "Absence of a value, not even a value of null"
let y;
console.log(y); // undefined


// *** Implicit Type Coercion ***
console.log('Hello' + 5 * 10); // Hello50
// Evaluate 5 * 10 to 50, implicitly convert it to a string '50', and
// concatenate it to 'Hello', resuling in 'Hello50'
/*
Note that when performing equality check using == and !=, first implicit type
coercion is done, and then to perform the equality check
This may lead to quirky results,
e.g., '1' ==  true -> true,
so this is considered to be a BAD PRACTICE.
Thus, to perform equality checks, we should use === and !==  for strict
equality check, which checks both the type and the value of the two operands for
equality,
e.g., '1' === true -> false
*/
