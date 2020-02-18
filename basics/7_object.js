/**
 * An object in JavaScript is essentially a group of key-value pairs, where a
 * value can be either a property or a method.
 */

const umbrella = {
  color: 'pink',
  isOpen: false,

  open: function() {
    if (this.isOpen) {
      return 'This umbrella is already open.';
    } else {
      this.isOpen = true;
      return 'Successfully opened the umbrella!';
    }
  },

  // If we do the following:
  // open: () => {
  //   if (this.isOpen) { // "this" binds to the outer context, which is the global object in this case, so "this.isOpen" is undefined.
  //     return '...';
  //   } else {
  //     this.isOpen = true;
  //     return '...';
  //   }
  // },

  close: function() {
    if (this.isOpen) {
      this.isOpen = false;
      return 'Successfully closed the umbrella!';
    } else {
      return 'This umbrella is already closed!';
    }
  },

  // Define getter method
  get matchColors() {
    return ['blue', 'purple', 'yellow'];
  }
};

console.log(umbrella);
console.log(`Type of umbrella: ${typeof umbrella}`); // object
// Check for property
console.log(umbrella.hasOwnProperty('open')); // true
console.log();

console.log(umbrella.open());
console.log(umbrella.close());
console.log();
console.log(`Matching colors: ${umbrella.matchColors}`); // Since matchColor() is defined as a getter method, access it like accessing a property
console.log();

// *** Keys & Values ***
console.log(Object.keys(umbrella)); // ['color', 'isOpen', 'open', 'close']
console.log(Object.values(umbrella)); // ['pink', true, [Function: open], [Function: close]]
console.log();

// *** Freezing ***
// Normally, an object declared with "const" can be freely add, update, or
// remove attributes, as long as that object still points to the same object.
// If we really want a frozen object that disallow modifications:
const obj = Object.freeze({ a: 1 });
// In order to totally freeze an object, use the following function:
const freeze = obj => {
  Object.freeze(obj);
  Object.entries(obj).forEach((key, val) => {
    if (typeof key === 'object') {
      // Recursively call freeze()
      freeze(val);
    }
  });
};

// *** JSON Convertion ***
const converted = JSON.stringify(umbrella);
console.log(converted);
console.log(JSON.parse(converted));
console.log();

// *** "Inheritance" / Prototype Chaining ***
// We can define an object to be the "prototype" of another object.
// Essentially, this is like "copyping" or "extending" from the original object.
// e.g., a -> b
//       If a field lookup fails on b, the field lookup is delegated to the
//       upstream along the prototype chain, and the interpreter will look up
//       the field in a.
const umbrellaChild = Object.create(umbrella);
// The field lookup of every JavaScript object, EVENTUALLY, delegates to
// "Object.prototype".

// Check for property along the prototype chain
console.log('open' in umbrellaChild); // true
