/*
IMPORTANT!!!
An object in JavaScript is essentially a MAP, which is just a group of key-value
pairs, where a value can be either a property or a method.
 */
const umbrella = {
  color: 'pink',
  isOpen: false,

  open: () => {
    if (this.isOpen) {
      return 'This umbrella is already open.';
    } else {
      this.isOpen = true;
      return 'Successfully opened the umbrella!';
    }
  },

  close: () => {
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
