'use strict';

// *** Old-fashioned Way ***

// function Person(firstName, lastName, dateOfBirth) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dateOfBirth = new Date(dateOfBirth);
// }

// Define methods
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }
// Person.prototype.getBirthYear = function() {
//   return this.dateOfBirth.getFullYear();
// }

// Inheritance
// Let "Student" inherit from "Peron"
// function Student(firstName, lastName, dateOfBirth, studentId) {
//   Person.call(this, firstName, lastName, dateOfBirth);
//   this.studentId = studentId;
// }

// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student

// *** ES6 Way ***

// Essentially, this is just syntax sugar, that under the hood does the same
// thing as above

/**
 * Person class.
 */
class Person {
  /**
   * Returns the top boy name and girl name.
   * @returns {Array} top boy name and girl name as an array
   */
  static topNames() {
    return ['Mark', 'Lily'];
  }

  /**
   * Constructor with parameter.
   * @param {string} firstName first name of this person
   * @param {string} lastName last name of this person
   * @param {string} dateOfBirth date of birth of this person
   */
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = new Date(dateOfBirth);
  }

  /**
   * Returns the full name of this person.
   * @returns {string} full name
   */
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Returns the birth year of this person.
   * @returns {number} birth year of this person
   */
  getBirthYear() {
    return this.dateOfBirth.getFullYear();
  }
}

const person1 = new Person('Ziang', 'Lu', '1993-10-05');
console.log(person1);
console.log(person1.getFullName()); // Ziang Lu
console.log(person1.getBirthYear()); // 1993
console.log(Person.topNames()); // ['Mark', 'Lily']
console.log();

// Inheritance
/**
 * Student class.
 */
class Student extends Person {
  /**
   * Constructor with parameter.
   * @param {string} firstName first name of this student
   * @param {string} lastName last name of this student
   * @param {string} dateOfBirth date of birth of this student
   * @param {int} studentId student ID
   */
  constructor(firstName, lastName, dateOfBirth, studentId) {
    super(firstName, lastName, dateOfBirth);
    this.studentId = studentId;
  }
}

const student1 = new Student('Kevin', 'Lue', '1993-10-05', 12345);
console.log(student1);
console.log(student1.getFullName()); // Kevin Lue
console.log(student1.getBirthYear()); // 1993
