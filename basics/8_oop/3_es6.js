/**
 * ES6 Way
 * Essentially, this is just syntax sugar, that under the hood does the same
 * thing as previous ones.
 */

/**
 * Person class.
 */
class Person {
  /**
   * Static method to return the top boy name and girl name.
   * @returns {Array} top boy name and girl name as an array
   */
  static topNames() {
    return ['Mark', 'Lily'];
  }

  /**
   * Constructor with parameter.
   * @param {string} firstName first name of the person
   * @param {string} lastName last name of the person
   * @param {string} dateOfBirth date of birth of the person as a string
   */
  constructor(firstName, lastName, dateOfBirth) {
    const dob = new Date(dateOfBirth);
    Object.assign(this, { firstName, lastName, dob });
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
    return this.dob.getFullYear();
  }
}

person1 = new Person('Ziang', 'Lu', '1993-10-05');
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
   * @param {string} firstName first name of the student
   * @param {string} lastName last name of the student
   * @param {string} dateOfBirth date of birth of the student
   * @param {number} studentId student ID
   */
  constructor(firstName, lastName, dateOfBirth, studentId) {
    super(firstName, lastName, dateOfBirth);
    this.studentId = studentId;
  }
}

student1 = new Student('Kevin', 'Lue', '1993-10-05', 12345);
console.log(student1);
console.log(student1.getFullName()); // Kevin Lue
console.log(student1.getBirthYear()); // 1993
