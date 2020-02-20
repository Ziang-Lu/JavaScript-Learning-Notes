/**
 * Old-fashioned Way 2: Pseudo-Classical Pattern
 * This is also knowns as "prototypal inheritance".
 * The only difference is the way in which we use the functional class:
 * -> This time, we use the "new" keyword, which will handle a lot of work in
 *    the previous example for us.
 */

/**
 * Functional class for "Person".
 * @param {string} firstName first name of the person
 * @param {string} lastName last name of the person
 * @param {string} dateOfBirth date of birth of the person
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

Person.prototype.selfIntro = function() {
  return `Hi, my name is ${this.getFullName()}`;
};

// Define class static methods
Person.topNames = () => {
  return ['Mark', 'Lily'];
};

// Demo
const me = new Person('Ziang', 'Lu', '1993-10-05');
console.log(me);
console.log(me.getFullName()); // Ziang Lu
console.log(me.getBirthYear()); // 1993
console.log(me.selfIntro());
console.log(Person.topNames()); // ['Mark', 'Lily']

// Prototype chaining validation
console.log(Object.getPrototypeOf(me) === Person.prototype); // true

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
  Person.call(this, firstName, lastName, dateOfBirth); // 继承properties
  this.studentId = studentId;
}

// Inheritance的本质上是prototype chaining (继承methods)
Student.prototype = Object.create(Person.prototype); // At this point, Student.prototype simply delegates to Person.prototype.
Student.prototype.constructor = Student; // However, we must manually add the constructor property; otherwise calling "Student.prototype.constructor" would be delegated to Person.prototype, which results in Person.

// (继承static methods)
// 由于static methods是直接定义在了Person这个"function class"本身上的, 因此为了继承
// static methods, 还需要定义"function class"本身的prototype chaining关系, 使得
// Student delegates to Person
Object.setPrototypeOf(Student, Person);

Student.prototype.getStudentId = function() {
  return this.studentId;
};

// Method override
Student.prototype.selfIntro = function() {
  const selfIntroFromSuper = Object.getPrototypeOf(
    Student.prototype
  ).selfIntro.call(this);
  return `${selfIntroFromSuper}, and my student ID is ${this.studentId}`;
};

// Demo
const stu = new Student('Ziang', 'Lu', '1993-10-05', 12345);
console.log(stu);
console.log(stu.getFullName()); // Kevin Lue
console.log(stu.getBirthYear()); // 1993
console.log(stu.getStudentId()); // 12345
console.log(stu.selfIntro());
console.log(Student.topNames()); // ['Mark', 'Lily']

// Prototype chaining validation
console.log(Object.getPrototypeOf(stu) === Student.prototype); // true
console.log(Object.getPrototypeOf(stu) === Person.prototype); // false

console.log(stu instanceof Student); // true
console.log(stu instanceof Person); // true
