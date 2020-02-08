const path = require('path');

// Full path
console.log(__filename);

// Base filename
console.log(path.basename(__filename)); // path_demo.js

// Extension name
console.log(path.extname(__filename)); // .js

// Directory name
// console.log(__dirname);
// Equivalent:
console.log(path.dirname(__filename));

// Path joining
console.log(path.join(__dirname, 'test', 'main.html'));

// Parsing to path object
const pathObj = path.parse(__filename);
console.log(pathObj);
