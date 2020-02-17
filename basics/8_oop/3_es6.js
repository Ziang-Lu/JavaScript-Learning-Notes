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

  /**
   * Accessor of studentId.
   * Note how this is defined as a getter method.
   * @returns {number} studentId
   */
  get studentID() {
    return this.studentId;
  }

  /**
   * Mutator of studentId.
   * Note how this is defined as a setter method.
   * @param studentId student ID to set
   */
  set studentID(studentId) {
    this.studentId = studentId;
  }
}
