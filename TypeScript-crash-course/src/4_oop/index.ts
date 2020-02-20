import { Person, Student } from './classes';

const me = new Person('Ziang', 'Lu', '1993-10-05');
console.log(me);
console.log(me.getFullName()); // Ziang Lu
console.log(me.getBirthYear()); // 1993
console.log(me.selfIntro());
console.log(Person.topNames()); // ['Mark', 'Lily']
console.log();

const stu = new Student('Kevin', 'Lue', '1993-10-05', 12345);
console.log(stu);
console.log(stu.getFullName()); // Kevin Lue
console.log(stu.getBirthYear()); // 1993
console.log(stu.studentID); // 12345
console.log(stu.selfIntro());
console.log(Student.topNames()); // ['Mark', 'Lily']
