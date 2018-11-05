// "array" is just a special type of "object".
let mixedData = [1, true, 'abcd', 'all the strings', null, undefined];
console.log(typeof mixedData); // object


// *** Array.prototype.length Property ***
console.log('***** Array.prototype.length Property *****');

console.log(mixedData.length); // 6

// Set the length of an array to be:
// > current length: Fill the new positions with "undefined"
mixedData.length += 1;
console.log(mixedData); // [1, true, 'abcd', 'all the strings', null, undefined, undefined]
// < current length: Truncate the array
mixedData.length -= 3;
console.log(mixedData); // [1, true, 'abcd', 'all the strings']
// => Array.length does not necessarily indicate the number of defined values in the array

// Note:
// If you try to access an index in an array that doesn't exist, it will
// automatically return "undefined".
console.log(mixedData[mixedData.length]); // undefined

console.log();


// *** Array.prototype.slice() Method ***
console.log('***** Array.prototype.slice() Method *****');
// Slice the array from index 1 (inclusive) to index 3 (exclusive)
let slicedCopy = mixedData.slice(1, 3);
console.log(slicedCopy); // [true, 'abcd']
// The returned "slicedCopy" is a new copy to the sliced original array.
console.log(Object.is(slicedCopy, mixedData)); // false
console.log();


// *** Array.prototype.indexOf() Method ***
console.log('***** Array.prototype.indexOf() Method *****');
// Find the first occurrence of 'abcd' starting from index 1 (forwards)
console.log(mixedData.indexOf('abcd', 1)); // 2
console.log();


// *** Array.prototype.lastIndexOf() Method ***
console.log('***** Array.prototype.lastIndexOf() Method *****');
// Find the last occurrence of '1' starting from index 2 (backwards)
console.log(mixedData.lastIndexOf(1, 2)); // 0
console.log();


// *** Array.prototype.push() Method ***
console.log('***** Array.prototype.push() Method *****');
let newLength = mixedData.push('basketball', 'soccer');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball', 'soccer']
console.log(newLength); // 6
console.log();


// *** Array.prototype.pop() Method ***
console.log('***** Array.prototype.pop() Method *****');
let lastElem = mixedData.pop();
console.log(lastElem); // soccer
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball']
console.log();


// *** Array.prototype.unshift() Method ***
console.log('***** Array.prototype.unshift() Method *****');
newLength = mixedData.unshift('new first element');
console.log(mixedData); // ['new first element', 1, true, 'abcd', 'all the strings', 'basketball', 'soccer']
console.log(newLength); // 6
console.log();


// *** Array.prototype.shift() Method ***
console.log('***** Array.prototype.shift() Method *****');
let firstElem = mixedData.shift();
console.log(firstElem); // new first element
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball']
console.log();


// *** Array.prototype.splice() Method ***
console.log('***** Array.prototype.splice() Method *****');

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

console.log();


// *** Array.prototype.reverse() Method ***
console.log('***** Array.prototype.reverse() Method *****');
let reversedRef = mixedData.reverse();
console.log(reversedRef); // [basketball', 'all the strings', 'abcd', true, 1]
console.log(mixedData); // [basketball', 'all the strings', 'abcd', true, 1]
// The returned "reversedRef" is a new reference to the original array, i.e., it
// shadows "mixedData".
console.log(Object.is(mixedData, reversedRef)); // true
console.log();


// *** Array.prototype.sort() Method ****
console.log('***** Array.prototype.sort() Method *****');

let unsorted = [undefined, 1, 2, 3, 5, 10];
let sortedRef = unsorted.sort();
/*
Default compare function: Ascending order in string Unicode code points
(First convert the values to strings, and then do the comparison)
 */
console.log(sortedRef); // [1, 10, 2, 3, 5, undefined] (Note that all the "undefined" elements are sorted to the end of the array)
console.log(unsorted); // [1, 10, 2, 3, 5, undefined]
// The returned "sortedRef" is a new reference to the original array, i.e., it
// shadows "unsorted".
console.log(Object.is(unsorted, sortedRef)); // true

// To sort the number array in ascending order, we need to pass in our own
// compare function:
sortedRef = unsorted.sort(function compareNumbers(a, b) {
  return a - b;
});
console.log(sortedRef); // [1, 2, 3, 5, 10, undefined]
console.log(unsorted); // [1, 2, 3, 5, 10, undefined]

console.log();


// *** Array.prototype.forEach() Method ***
console.log('***** Array.prototype.forEach() Method *****');
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

console.log();


// *** Array.prototype.map() Method ***
console.log('***** Array.prototype.map() Method *****');
let myArray = [1, 2, 3, 4, 5];
let newArray = myArray.map(function(num) {
  return num + 100;
});
console.log(myArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [101, 102, 103, 104, 105]
