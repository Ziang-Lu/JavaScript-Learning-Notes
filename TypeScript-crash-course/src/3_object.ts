// /**
//  * Shows a Todo object that has the given schema.
//  * @param {object} todo Todo object with the given schema
//  */
// function showTodo(todo: { title: string; text: string }): void {
//   if (todo.text === undefined) {
//     console.log(todo.title);
//   } else {
//     console.log(`${todo.title}: ${todo.text}`);
//   }
//   // Show the remaining entries
//   Object.keys(todo).forEach((key: string): void => {
//     if (key !== 'title' && key !== 'text') {
//       console.log(`${key}: ${todo[key]}`);
//     }
//   });
// }

/**
 * Todo interface.
 */
interface Todo {
  title: string;
  text?: string; // "?" means optional
  [key: string]: any; // Allow additional entries
}

/**
 * Shows the given Todo object.
 * @param {Todo} todo Todo object to show
 */
function showTodo(todo: Todo): void {
  // Since Todo.text is optional, it might be undefined.
  if (todo.text === undefined) {
    console.log(todo.title);
  } else {
    console.log(`${todo.title}: ${todo.text}`);
  }
  // Show the remaining entries
  Object.keys(todo).forEach((key: string): void => {
    if (key !== 'title' && key !== 'text') {
      console.log(`${key}: ${todo[key]}`);
    }
  });
}

const myTodo: Todo = {
  title: 'Learn TypeScript',
  text: 'Learn about TypeScript linting and VSCode integration',
  date: new Date()
};
showTodo(myTodo);
