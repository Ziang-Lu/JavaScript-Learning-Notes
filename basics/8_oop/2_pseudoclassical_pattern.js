/**
 * Old-fashioned Way 2: Pseudo-Classical Pattern
 * The only difference is the way in which we use the functional class:
 * -> This time, we use the "new" keyword, which will handle a lot of work in
 *    the previous example for us.
 */

// Define a "prototypal class", aka "functional class", which is essentially
// still a function
/**
 * Functional class for "Person".
 * @param {string} firstName first name of the person
 * @param {string} lastName last name of the person
 * @param {string} dateOfBirth date of birth of the person
 * @returns {object} newly create object
 */
function Person(firstName, lastName, dateOfBirth) {
  // Instead of using the object created manually by us, we use "this" keyword
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = new Date(dateOfBirth);
}

// Define methods
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
const person1 = new Person('Ziang', 'Lu', '1993-10-05');
console.log(person1);
console.log(person1.getFullName()); // Ziang Lu
console.log(person1.getBirthYear()); // 1993
console.log(Person.topNames()); // ['Mark', 'Lily']
console.log();

// Inheritance

/**
 * Functional class for "Student".
 * @param {string} firstName first name of the student
 * @param {string} lastName last name of the student
 * @param {string} dateOfBirth date of birth of the student
 * @param {number} studentId student ID
 */
function Student(firstName, lastName, dateOfBirth, studentId) {
  Person.call(this, firstName, lastName, dateOfBirth);
  this.studentId = studentId;
}

// Inheritance的本质上是prototype chaining
Student.prototype = Object.create(Person.prototype); // At this point, Student.prototype simply delegates to Person.prototype.
Student.prototype.constructor = Student; // However, we must manually add the constructor property; otherwise calling "Student.prototype.constructor" would be delegated to Person.protype, which results in Person.

const student1 = new Student('Ziang', 'Lu', '1993-10-05', 12345);
console.log(student1);
console.log(student1.getFullName()); // Kevin Lue
console.log(student1.getBirthYear()); // 1993
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person); // true
