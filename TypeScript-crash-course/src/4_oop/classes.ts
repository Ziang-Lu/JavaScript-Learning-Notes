import { PersonLike } from './interfaces';

/**
 * Person class.
 */
export class Person implements PersonLike {
  /**
   * Static method to return the top boy name and girl name.
   * @returns {Array} top boy name and girl name as an array
   */
  public static topNames(): [string, string] {
    return ['Mark', 'Lily'];
  }

  /**
   * First name of this person.
   * "readonly" is essentially like "const" in Java.
   */
  private readonly firstName: string;

  /**
   * Last name of this person.
   */
  private readonly lastName: string;

  /**
   * Date of birth of this person.
   */
  private readonly dateOfBirth: Date;

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

  public selfIntro(): string {
    return `Hi, my name is ${this.getFullName()}`;
  }
}

// Inheritance
/**
 * Student class.
 */
export class Student extends Person {
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

  public selfIntro(): string {
    return `${super.selfIntro()}, and my student ID is ${this.studentId}`;
  }
}
