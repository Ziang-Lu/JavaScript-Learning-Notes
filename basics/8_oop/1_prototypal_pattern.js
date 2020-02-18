/**
 * Old-fashioned Way 1: Prototypal Pattern
 * This is very similar to a factory pattern.
 */

/**
 * Functional class for "Person".
 * @param {string} firstName first name of the person
 * @param {string} lastName last name of the person
 * @param {string} dateOfBirth date of birth of the person
 * @returns {object} newly create object
 */
function Person(firstName, lastName, dateOfBirth) {
  let person = Object.create(Person.prototype);
  // In this case, field lookups on a new instance will be delegated to
  // Person.prototype object, which should contain all of the methods of this
  // "functional class".
  // Also, note that Person.prototype.constructor refers back to Person

  person.firstName = firstName;
  person.lastName = lastName;
  person.dateOfBirth = new Date(dateOfBirth);

  return person;
}

// Define methods onto [FunctionalClass].prototype object
// => So that field lookups on a new instance will be delegated to this
//    [FunctionalClass].prototype
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getBirthYear = function() {
  return this.dateOfBirth.getFullYear();
};

// Define class static methods
Person.topNames = () => {
  return ['Mark', 'Lily'];
};

// Demo
const person1 = Person('Ziang', 'Lu', '1993-10-05');
console.log(person1);
console.log(person1.getFullName()); // Ziang Lu
console.log(person1.getBirthYear()); // 1993
console.log(Person.topNames()); // ['Mark', 'Lily']

console.log(Object.getPrototypeOf(person1) === Person.prototype); // true

console.log(person1 instanceof Person); // true
// "instanceof" operator本质上是object做property lookup时, 是否会找Class.prototype
// => In this case, "person1" refers to "person" object in "Person()" function,
//    which delegates to Person.prototype, so the above returns true.
