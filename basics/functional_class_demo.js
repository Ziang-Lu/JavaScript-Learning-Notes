function Person(firstName, lastName, dateOfBirth) {
  let person = Object.create(Person.prototype);

  person.firstName = firstName;
  person.lastName = lastName;
  person.dateOfBirth = new Date(dateOfBirth);

  return person;
}

Person.prototype.getFullName = function() {
  console.log(this);
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getBirthYear = function() {
  console.log(this);
  return this.dateOfBirth.getFullYear();
};

// Define methods (on the [FunctionalClass].prototype)
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };
// Person.prototype.getBirthYear = function() {
//   return this.dateOfBirth.getFullYear();
// };

// Inheritance / 本质上是Protytype Chaining
// function Student(firstName, lastName, dateOfBirth, studentId) {
//   Person.call(this, firstName, lastName, dateOfBirth);
//   this.studentId = studentId;
//   return this;
// }

// Student.prototype = Object.create(Person.prototype); // At this point, Student.prototype is exactly the same as Person.prototype.
// Student.prototype.constructor = Student; // However, we must override the constructor property; otherwise it'll still be Person

const p1 = Person('Ziang', 'Lu', '1993-10-05');
console.log(p1);
console.log(p1.getFullName());
