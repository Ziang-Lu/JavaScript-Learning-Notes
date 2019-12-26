// Convert the given object to a Promise
const promise1 = Promise.resolve('Hello, world!'); // status: "fullfilled"
// Similarly, we have Promise.reject()

// Promise.all()
const promise2 = 10;
const promise3 = new Promise(resolve => {
  setTimeout(resolve('Good-bye!'), 2000);
});
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));
// Correspondingly, we have Promise.race(), which simply consider the first
// completed Promise.
