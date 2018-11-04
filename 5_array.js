// "array" is just a special type of "object".
let mixedData = [1, true, 'abcd', 'all the strings', null, undefined];
console.log(typeof mixedData); // object


// *** Array.prototype.length Property ***

console.log(mixedData.length); // 6

// Set the length of an array to be:
// > current length: Fill the new positions with "undefined"
// < current length: Truncate the array
mixedData.length += 1;
console.log(mixedData); // [1, true, 'abcd', 'all the strings', null, undefined, undefined]
mixedData.length -= 3;
console.log(mixedData); // [1, true, 'abcd', 'all the strings']
// => Array.length does not necessarily indicate the number of defined values in the array

// Note:
// If you try to access an index in an array that doesn't exist, it will
// automatically return "undefined".
console.log(mixedData[mixedData.length]); // undefined


// *** Array.prototype.push() Method ***
let newLength = mixedData.push('basketball', 'soccer');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball', 'soccer']
console.log(newLength); // 6


// *** Array.prototype.pop() Method ***
let lastElem = mixedData.pop();
console.log(lastElem); // soccer
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball']


// *** Array.prototype.unshift() Method ***
newLength = mixedData.unshift('new first element');
console.log(mixedData); // ['new first element', 1, true, 'abcd', 'all the strings', 'basketball', 'soccer']
console.log(newLength); // 6


// *** Array.prototype.shift() Method ***
let firstElem = mixedData.shift();
console.log(firstElem); // new first element
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball']


// *** Array.prototype.splice() Method ***

// To simply add new elements, specify deleteCount as 0:
let removed = mixedData.splice(4, 0, 42);
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 42, 'basketball']
console.log(removed); // []

// To simply remove existing elements, do not provide new items:
removed = mixedData.splice(4, 1);
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball']
console.log(removed); // [42]

// To add new elements as well as remove existing elements, simply combine the
// above two usages.


// *** Array.prototype.reverse() Method ***
let reversedRef = mixedData.reverse();
console.log(reversedRef); // [basketball', 'all the strings', 'abcd', true, 1]
console.log(mixedData); // [basketball', 'all the strings', 'abcd', true, 1]
// The returned "reversedRef" is a new reference to the original array, i.e., it
// shadows "mixedData".
console.log(Object.is(mixedData, reversedRef)); // true


// *** Array.prototype.forEach() Method ***
mixedData.forEach(function(val, idx) {
  console.log(`Logged: [${idx}] ${val}`);
});
/**
 * Logged: [0] basketball
 * Logged: [1] all the strings
 * Logged: [2] abcd
 * Logged: [3] true
 * Logged: [4] 1
 */


// *** Array.prototype.map() Method ***
let myArray = [1, 2, 3, 4, 5];
let newArray = myArray.map(function(num) {
  return num + 100;
});
console.log(myArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [101, 102, 103, 104, 105]
