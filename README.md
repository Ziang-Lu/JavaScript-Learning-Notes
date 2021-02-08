# JavaScript Learning Notes

These repo contains course notes in the following courses

* **Intro to JavaScript** on Udacity
* **Object-Oriented JavaScript from HackReactor** on Udacity
* **Asynchronous JavaScript Requests** on Udacity
* **JavaScript Promises from Google** on Udacity

as well as based off of the following YouTube videos:

* **JavaScript OOP Crash Course** by Traverse Media

* **Node.js crash course** by Traverse Media
* **TypeScript crash course** by Traverse Media
* **Learn TypeScript in 50 Minutes** by Codevolution

<br>

## JavaScript Basics

1. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/basics/1_primitive_data_types.js">Primitive Data Types</a>

2. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/basics/2_conditional.js">Conditional</a>

3. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/basics/3_loop.js">Loop</a>

4. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/basics/4_function.js">Function</a>

5. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/basics/5_array.js">Array</a>

6. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/basics/6_scoping_demo.js">Scopes and Closures</a>

7. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/basics/7_object.js">Object</a>

   ***

   ### `this` Keyword Binding

   Check out this article https://www.jianshu.com/p/c7edec329338 for details

   **Brief Summary:**

   * **Traditional `function()` definitions**

     `this`的binding <u>发生在函数实际调用的时候</u>, *不同的函数实际调用方式, 决定了`this`的binding: 谁调用了这个函数, `this`就绑定至谁.*

     1. 作为function调用

        `this`绑定至global object

     2. 作为object的method调用

        `this`绑定至该object

     3. 作为constructor (function class)调用

        `this`绑定至新创建的instance

     4. 间接调用 (即通过`.call(thisArg, ...)`, `.apply(thisArg, [...])`, `.bind(thisArg, ...)`)

        `this`绑定至`.call()`, `.apply()`, `.bind()`的第一个参数`thisArg`

   * **Arrow functions `=>` definitions**

     `this`的binding <u>发生在函数定义的时候</u>, 其被绑定至arrow function定义时的外层上下文

   ***

   => 因此, 一般在object上定义methods时:

   * 要使用`function()` definition, 这样才能在method实际调用的时候, 将`this`正确绑定至该object
   * 若使用了arrow function, 则`this`被绑定至method定义时的外层上下文 (往往是global object), 是不对的

   e.g.,

   ```javascript
   const umbrella = {
     color: 'pink',
     isOpen: false,

     open: function() {
       if (this.isOpen) {
         return 'This umbrella is already open.';
       } else {
         this.isOpen = true;
         return 'Successfully opened the umbrella!';
       }
     }

     // If we do the following:
     // open: () => {
     //   if (this.isOpen) { // "this" binds to the outer context, which is the global object in this case, so "this.isOpen" is undefined.
     //     return '...';
     //   } else {
     //     this.isOpen = true;
     //     return '...';
     //   }
     // }
   }

   umbrella.open(); // "this" binds to "umbrella" object
   ```

   ***

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
     Student.__proto__ = Person;
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

       get getStudentId() {
         return this.studentId;
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

