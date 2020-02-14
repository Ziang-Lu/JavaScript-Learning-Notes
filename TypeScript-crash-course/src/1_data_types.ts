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

// ***** Define Our Own Data Type *****

// tuple
type fixedTuple = [number?, string?]; // "?" means optional
const numStrTuple: fixedTuple = [];
numStrTuple.push(42);
numStrTuple.push('Some string');

// Actually, this is like an "enum"
type Style = 23 | 'bold' | 'italic';
const myFont: Style = 'italic';
