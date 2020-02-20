/**
 * Person interface.
 */
interface PersonInterface {
  // Note that we could have defined common variables here in the interface, but
  // that would cause the variables to be "public"

  /**
   * Returns the full name of this person.
   * @returns {string} full name
   */
  getFullName(): string;

  /**
   * Returns the birth year of this person.
   * @returns {number} birth year of this person
   */
  getBirthYear(): number;
}

/**
 * Person class.
 */
class Person implements PersonInterface {
  /**
   * Static method to return the top boy name and girl name.
   * @returns {Array} top boy name and girl name as an array
   */
  public static topNames(): [string, string] {
    return ['Mark', 'Lily'];
  }

  /**
   * First name of this person.
   */
  private firstName: string;

  /**
   * Last name of this person.
   */
  private lastName: string;

  /**
   * Date of birth of this person.
   */
  private dateOfBirth: Date;

  /**
   * Constructor with parameter.
   * @param {string} firstName first name of the person
   * @param {string} lastName last name of the person
   * @param {string} dateOfBirth date of birth of the person as a string
   */
  public constructor(firstName: string, lastName: string, dateOfBirth: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = new Date(dateOfBirth);
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getBirthYear(): number {
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
   * Student ID of this student.
   */
  private studentId: number;

  /**
   * Constructor with parameter.
   * @param {string} firstName first name of this student
   * @param {string} lastName last name of this student
   * @param {string} dateOfBirth date of birth of this student
   * @param {number} studentId student ID of this student
   */
  public constructor(
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    studentId: number
  ) {
    super(firstName, lastName, dateOfBirth);
    this.studentId = studentId;
  }

  /**
   * Accessor of studentId.
   * Note how this is defined as a getter method.
   * @returns {number} studentId
   */
  public get studentID(): number {
    return this.studentId;
  }

  /**
   * Mutator of studentId.
   * Note how this is defined as a setter method.
   * @param {number} studentId student ID to set
   */
  public set studentID(studentId: number) {
    this.studentId = studentId;
  }
}

const stu = new Student('Kevin', 'Lue', '1993-10-05', 12345);
console.log(stu);
console.log(stu.getFullName()); // Kevin Lue
console.log(stu.getBirthYear()); // 1993
console.log(stu.studentID); // 12345
console.log(Student.topNames()); // ['Mark', 'Lily']
