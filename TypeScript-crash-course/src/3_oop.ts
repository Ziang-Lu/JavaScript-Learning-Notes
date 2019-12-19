// /**
//  * Shows a Todo object that has the given schema.
//  * @param todo Todo object with the given schema
//  */
// function showTodo(todo: {title: string, text: string}) {
//   console.log(`${todo.title}: ${todo.text}`);
// }

/**
 * Todo interface.
 */
interface Todo {
  title: string;
  text: string;
}

/**
 * Shows the given Todo object.
 * @param todo Todo object
 */
function showTodo(todo: Todo): void {
  console.log(`${todo.title}: ${todo.text}`);
}

const myTodo = {
  title: 'Learn TypeScript',
  text: 'Learn about TypeScript linting and VSCode integration'
};
showTodo(myTodo);

/**
 * Person interface.
 */
interface PersonInterface {
  /**
   * First name of this person.
   */
  firstName: string;
  /**
   * Last name of this person.
   */
  lastName: string;
  /**
   * Date of birth of this person.
   */
  dateOfBirth: Date;

  /**
   * Returns the full name of this person.
   * @returns full name
   */
  getFullName(): string;

  /**
   * Returns the birth year of this person.
   * @returns birth year of this person
   */
  getBirthYear(): number;
}

/**
 * Person class.
 */
class Person implements PersonInterface {
  /**
   * Static method to return the top boy name and girl name.
   * @returns top boy name and girl name as an array
   */
  public static topNames(): [string, string] {
    return ['Mark', 'Lily'];
  }

  public firstName: string;

  public lastName: string;

  public dateOfBirth: Date;

  /**
   * Constructor with parameter.
   * @param firstName first name of the person
   * @param lastName last name of the person
   * @param dateOfBirth date of birth of the person as a string
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

const person1: Person = new Person('Ziang', 'Lu', '1993-10-05');
console.log(person1);
console.log(Person.topNames()); // ['Mark', 'Lily']
console.log(person1.getFullName()); // Ziang Lu
console.log(person1.getBirthYear()); // 1993
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
   * @param firstName first name of this student
   * @param lastName last name of this student
   * @param dateOfBirth date of birth of this student
   * @param studentId student ID of this student
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
}

const student1: Student = new Student('Kevin', 'Lue', '1993-10-05', 12345);
console.log(student1);
console.log(student1.getFullName()); // Kevin Lue
console.log(student1.getBirthYear()); // 1993
