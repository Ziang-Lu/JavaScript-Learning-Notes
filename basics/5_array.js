/**
 * "Array" is just a special type of "Object", with the numerial indices as the
 * keys.
 */

let mixedData = [1, true, 'abcd', 'all the strings', null, undefined];
console.log(mixedData);
console.log(Array.isArray(mixedData)); // true
console.log(`Type: ${typeof mixedData}`); // object
console.log();

// *** Array.prototype.length Property ***

console.log(`Length: ${mixedData.length}`); // 6

// Set the length of an array to be:
// > current length: Fill the new positions with "undefined"
mixedData.length += 1;
console.log(`Extended length: ${mixedData.length}`); // 7
console.log(mixedData); // [1, true, 'abcd', 'all the strings', null, undefined, <1 empty item>]
// < current length: Truncate the array
mixedData.length -= 3;
console.log(`Cut length: ${mixedData.length}`); // 4
console.log(mixedData); // [1, true, 'abcd', 'all the strings']
// Thus, Array.length does not necessarily indicate the number of defined values
// in the array.

// Note:
// If you try to access an index in an array that doesn't exist, it will
// automatically return "undefined".
console.log(
  "Accessing an index in an array that doesn't exist: " +
    `${mixedData[mixedData.length]}`
); // undefined

console.log();

// *** Array.prototype.slice() Method ***
console.log('Original:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings']
// Slice the array from index 1 (inclusive) to index 3 (exclusive)
const sliced = mixedData.slice(1, 3);
console.log('Sliced from index 1 (inclusive) to index 3 (exclusive):');
console.log(sliced); // [true, 'abcd']
// The returned "sliced" is a shallow copy of the original array, and the
// original array is not modified.
console.log(
  'Whether the sliced copy is a shallow copy of the original array: ' +
    `${Object.is(sliced, mixedData)}`
); // false
console.log();

// *** Array.prototype.indexOf() Method ***
console.log('Original:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings']
// Find the index of the first occurrence of 'abcd' starting from index 1
// (forwards)
console.log(
  "Index of the first occurrence of 'abcd' starting from index 1: " +
    `${mixedData.indexOf('abcd', 1)}`
); // 2
console.log();

// *** Array.prototype.lastIndexOf() Method ***
console.log('Original:');
console.log(mixedData); // [1, true, 'abc', 'all the strings']
// Find the index of the last occurrence of 1 starting from index 2
// (backwards)
console.log(
  'Index of the last occurrence of 1 starting from index 2: ' +
    `${mixedData.lastIndexOf(1, 2)}`
); // 0
console.log();

// *** Array.prototype.push() Method ***
console.log('Original:');
console.log(mixedData); // [1, true, 'abc', 'all the strings']
let newLength = mixedData.push('basketball', 'soccer');
console.log('After pushing:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball', 'soccer']
console.log(`New length: ${mixedData.length}`); // 6
console.log();

// *** Array.prototype.pop() Method ***
console.log('Original:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball', 'soccer']
const lastElem = mixedData.pop();
console.log('After popping:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball']
console.log(`Popped last element: ${lastElem}`); // soccer
console.log();

// *** Array.prototype.unshift() Method ***
console.log('Original:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball', 'soccer']
newLength = mixedData.unshift('new first element');
console.log('After appending on the left by unshift() method:');
console.log(mixedData); // ['new first element', 1, true, 'abcd', 'all the strings', 'basketball']
console.log(`New length: ${newLength}`); // 6
console.log();

// *** Array.prototype.shift() Method ***
console.log('Original:');
console.log(mixedData); // ['new first element', 1, true, 'abcd', 'all the strings', 'basketball']
const firstElem = mixedData.shift();
console.log('After popping from the left by shift() method:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball']
console.log(`Popped first element: ${firstElem}`); // new first element
console.log();

// *** Array.prototype.splice() Method ***

console.log('Original:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball']

// To simply add new elements, specify deleteCount as 0:
let removed = mixedData.splice(4, 0, 42);
console.log('After adding 42 to index 4:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 42, 'basketball']
console.log('Removed elements:');
console.log(removed); // []

// To simply remove existing elements, do not provide new any items:
removed = mixedData.splice(4, 1);
console.log('After removing one element at index 4:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball']
console.log('Removed elements:');
console.log(removed); // [42]

console.log();

// *** Array.prototype.concat() Method ***
console.log('Original:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball']
console.log(mixedData.contat(['first']));
console.log('After concatenation:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball', 'first']
mixedData.pop();
console.log();

// *** Array.prototype.reverse() Method ***
console.log('Original:');
console.log(mixedData); // [1, true, 'abcd', 'all the strings', 'basketball']
const reversedRef = mixedData.reverse();
console.log('After reversing:');
console.log(reversedRef); // [basketball', 'all the strings', 'abcd', true, 1]
// The returned "reversedRef" is a new reference to the original array, i.e., it
// shadows "mixedData".
console.log(
  'Whether the returned reference is a new reference to the original array: ' +
    `${Object.is(reversedRef, mixedData)}`
); // true
console.log();

// *** Array.prototype.sort() Method ****

const unsorted = [undefined, 1, 4, 2, 8, 5, 7, 10];

console.log('Unsorted:');
console.log(unsorted);

let sortedCopy = unsorted.sort();
/*
Default compare function: Ascending order in string Unicode code points
(First convert the values to strings, and then do the comparison)
 */
console.log('After sorting:');
console.log(sortedCopy); // [1, 10, 2, 4, 5, 7, 8, undefined] (Note that all the "undefined" elements are sorted to the end of the array)
console.log(
  'Whether the returned reference is a new reference to the original array: ' +
    `${Object.is(sortedCopy, mixedData)}`
); // true

// To sort the number array in ascending order, we need to pass in our own
// compare function:
sortedCopy = unsorted.sort((a, b) => a - b);
console.log('After sorting using compare function:');
console.log(sortedCopy); // [1, 2, 4, 5, 7, 8, 10, undefined]

console.log();

// *** Array.prototype.some() Method ***
let myArray = [1, 2, 3, 4, 5];
console.log('The array:');
console.log(myArray); // [1, 2, 3, 4, 5]
console.log(myArray.some(val => val === 3)); // true
console.log();

// *** Array.prototype.every() Method ***
console.log('The array:');
console.log(myArray);
console.log(arr.every(val => val > 0)); // true
console.log();

// *** Array.prototype.find() Method ***
console.log('The array:');
console.log(myArray);
console.log(myArray.find(val % 2 === 0)); // 2
console.log();

// *** Array.prototype.findIndex() Method ***
console.log('The array:');
console.log(myArray);
console.log(myArray.findIndex(val % 2 === 0)); // 1
console.log();

// *** Array.prototype.forEach() Method ***
console.log('The array:');
console.log(mixedData); // ['basketball', 'all the strings', 'abcd', true, 1]
mixedData.forEach((val, idx) => console.log(`Logged: [${idx}] ${val}`));
/**
 * Logged: [0] basketball
 * Logged: [1] all the strings
 * Logged: [2] abcd
 * Logged: [3] true
 * Logged: [4] 1
 */

console.log();

// *** Array.prototype.map() Method ***
console.log('Original array:');
console.log(myArray); // [1, 2, 3, 4, 5]
const newArray = myArray.map(num => num + 100);
console.log('New array:');
console.log(newArray); // [101, 102, 103, 104, 105]
console.log();

// *** Array.prototype.filter() Method ***
myArray = [1, 2, 3, 4, 5];
console.log('Original array:');
console.log(myArray);
const filtered = myArray.filter(num => num > 3);
console.log('New array:');
console.log(filtered); // [4, 5]
