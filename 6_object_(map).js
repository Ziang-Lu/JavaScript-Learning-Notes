/*
IMPORTANT!!!
An object in JavaScript is essentially a MAP, which is just a group of key-value
pairs, where a value can be either a property or a method.
 */
let umbrella = {
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

console.log();

// Dot notation VS Bracket notation

console.log(`Accessing 'color' attribute: ${umbrella.color}`); // pink
// Equivalent to umbrella['color']

console.log('Invoking open() method:');
console.log(umbrella.open()); // Equivalent to umbrella['open']()
// Successfully opened the umbrella!
