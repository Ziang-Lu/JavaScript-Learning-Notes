/**
 * An object in JavaScript is essentially a group of key-value pairs, where a
 * value can be either a property or a method.
 */

const umbrella = {
  color: 'pink',
  isOpen: false,

  // IMPORTANT NOTE!!!!!
  // For a JavaScript object, we should use the plain-old function() definition
  // rather than arrow functions to define methods, because they behave
  // differently about "this" keyword binding:
  // - Plain-old function() defition binds "this" keyword to the object itself;
  // - Arrow functions CANNOT correctly bind "this" keyword to the corresponding
  //   object.

  open: function() {
    if (this.isOpen) {
      return 'This umbrella is already open.';
    } else {
      this.isOpen = true;
      return 'Successfully opened the umbrella!';
    }
  },

  close: function() {
    if (this.isOpen) {
      this.isOpen = false;
      return 'Successfully closed the umbrella!';
    } else {
      return 'This umbrella is already closed!';
    }
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

// *** Keys & Values ***
console.log(Object.keys(umbrella)); // ['color', 'isOpen', 'open', 'close']
console.log(Object.values(umbrella)); // ['pink', true, [Function: open], [Function: close]]
console.log();

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
