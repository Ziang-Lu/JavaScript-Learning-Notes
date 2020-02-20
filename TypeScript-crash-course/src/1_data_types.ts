// ***** Built-in Data Types *****

// number
let myNum: number;
myNum = 3.14;

// string
let myStr: string;
myStr = 'Hello, world!';

// boolean
let myBool: boolean;
myBool = true;

// array
let strArr: string[];
strArr = ['Hello', 'World'];

// null
let myNull: null;
myNull = null;

// undefined
let myUndefined: undefined;
myUndefined = undefined;

// Data type combination
let age: number | string;
age = 26;
age = '26'; // Also works

// any
let myAny: any;
myAny = 42;
myAny = 'Some string'; // Also works

// unknown
// Similar to "any", but do the checking when accessing properties and methods
const myUnknown: unknown = 'Some string';
console.log(myUnknown.toString()); // Throws an error
console.log((myUnknown as string).toUpperCase()); // Need to use "type assertion" (similar to "type casting")

// ***** Define Our Own Data Type *****

// tuple
type fixedTuple = [number, string];
const numStrTuple: fixedTuple = [42, 'Some string'];

// Essentially, this is like an "enum"
type Style = 23 | 'bold' | 'italic';
const myFont: Style = 'italic';

// The real "enum"
enum Color {
  Red,
  Green,
  Blue
} // "enum" values starts with 0, and so on...
const myColor: Color = Color.Green;
console.log(myColor); // 1
