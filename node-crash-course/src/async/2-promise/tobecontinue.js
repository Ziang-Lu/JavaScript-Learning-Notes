// Convert the given object to a Promise
const promise1 = Promise.resolve('Hello, world!'); // status: "fullfilled"
// Equivalent to
// TODO: Find out more about "resolve"
// Similarly, we have Promise.reject()

// Promise.all()
const promise2 = 10;
const promise3 = new Promise(resolve => {
  setTimeout(resolve, 2000, 'Good bye!');
});
const combinedPromise = Promise.all([promise1, promise2, promise3]);
combinedPromise.then(values => console.log(values));
// Correspondingly, we have Promise.race(), which simply consider the first
// completed Promise.

// Async / Await
// Very similar to Python
async function init() {
  // This returns a Promise.
  // await createPost('A New Post', 'Some new content');

  getPosts();
}

init();

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);
}
