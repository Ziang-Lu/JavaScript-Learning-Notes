# JavaScript Learning Notes

These repo contains course notes in the following courses

* Intro to JavaScript on *Udacity*
* Node.js crash course on YouTube https://www.youtube.com/watch?v=fBNz5xF-Kx4
* TypeScript crash course on YouTube https://www.youtube.com/watch?v=rAy_3SIqT-E

<br>

## JavaScript Basics

1. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/1_primitive_data_types.js">Primitive Data Types</a>

2. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/2_conditional.js">Conditional</a>

3. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/3_loop.js">Loop</a>

4. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/4_function.js">Function</a>

5. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/5_array.js">Array</a>

6. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/6_scoping_demo.js">Scopes and Closures</a>

7. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/7_object.js">Object</a>

8. OOP

   * <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/basics/8_oop/1_prototypal_pattern.js">Prototypal Pattern</a>

     ```javascript
     // Define a "prototypal class", aka "functional class", which is essentially
     // still a function
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
     ```

   * <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/basics/8_oop/2_pseudoclassical_pattern.js">Pseudo-Classical Pattern</a>

     The only difference is the way in which we use the functional class:

     -> This time, we use the "new" keyword, which will handle a lot of work in the previous example for us.

     ```javascript
     // Define a "prototypal class", aka "functional class", which is essentially
     // still a function
     function Person(firstName, lastName, dateOfBirth) {
       // Instead of using the object created manually by us, we use "this" keyword
       this.firstName = firstName;
       this.lastName = lastName;
       this.dateOfBirth = new Date(dateOfBirth);
     }
     
     // Define methods
     ...
     
     // Define class static methods
     ...
     
     // Inheritance
     function Student(firstName, lastName, dateOfBirth, studentId) {
       Person.call(this, firstName, lastName, dateOfBirth);
       this.studentId = studentId;
     }
     
     // Inheritance的本质上是prototype chaining
     Student.prototype = Object.create(Person.prototype); // At this point, Student.prototype simply delegates to Person.prototype.
     Student.prototype.constructor = Student; // However, we must manually add the constructor property; otherwise calling "Student.prototype.constructor" would be delegated to Person.protype, which results in Person.
     ```

   * <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/basics/8_oop/3_es6.js">ES6 Pattern</a>

     Essentially, this is just syntax sugar, that under the hood does the same thing as previous ones.

     ```javascript
     class Person {
       static topNames() {
         return ['Mark', 'Lily'];
       }
     
       constructor(firstName, lastName, dateOfBirth) {
         const dob = new Date(dateOfBirth);
         Object.assign(this, { firstName, lastName, dob });
       }
     
       getFullName() {
         return `${this.firstName} ${this.lastName}`;
       }
     
       getBirthYear() {
         return this.dob.getFullYear();
       }
     }
     
     // Inheritance
     class Student extends Person {
       constructor(firstName, lastName, dateOfBirth, studentId) {
         super(firstName, lastName, dateOfBirth);
         this.studentId = studentId;
       }
     }
     ```

<br>

## Asynchronous Requests (AJAX)

1. Native `XMLHttpRequest` or simply `"XHR"`, through callbacks

   Check out https://github.com/Ziang-Lu/JavaScript-Learning-Notes/tree/master/ajax/1-xhr-callback

2. `jQuery` `.ajax()` method, through callbacks

   Check out https://github.com/Ziang-Lu/JavaScript-Learning-Notes/tree/master/ajax/2-jQuery-ajax-callback

3. `fetch()-API`, through `Promise`

   Check out https://github.com/Ziang-Lu/JavaScript-Learning-Notes/tree/master/ajax/3-fetch-promise

4. `fetch()-API`, through `async/await` syntax

   Check out https://github.com/Ziang-Lu/JavaScript-Learning-Notes/tree/master/ajax/4-fetch-async-await

<br>

## License

This repo is distributed under the <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/LICENSE">MIT license</a>.

