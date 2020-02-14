// /**
//  * Shows a Todo object that has the given schema.
//  * @param todo Todo object with the given schema
//  */
// function showTodo(todo: { title: string; text: string }) {
//   console.log(`${todo.title}: ${todo.text}`);
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
  text: string;
  [key: string]: any; // Allow additional entries
}

/**
 * Shows the given Todo object.
 * @param todo Todo object
 */
function showTodo(todo: Todo): void {
  console.log(`${todo.title}: ${todo.text}`);
  // Show the remaining entries
  Object.keys(todo).forEach((key: string): void => {
    if (key !== 'title' && key !== 'text') {
      console.log(`${key}: ${todo[key]}`);
    }
  });
}

const myTodo: Todo = {
  title: 'Learn TypeScript',
  text: 'Learn about TypeScript linting and VSCode integration'
};
showTodo(myTodo);

const anotherTodo: Todo = {
  title: 'Go to Supermarket',
  text: 'Buy eggs',
  date: new Date()
};
showTodo(anotherTodo);
