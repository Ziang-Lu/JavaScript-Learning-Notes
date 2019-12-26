/**
 * Same thing as "fetch_promise.js", but with "async/await" syntax sugar.
 */

const fetch = require('node-fetch');

// fetch()-API returns a Promise

// GET request
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json(); // response.json() also returns a Promise
  return users;
}

fetchUsers()
  .then(users => {
    users.forEach(userData => {
      const simplified = {
        id: userData.id,
        username: userData.username,
        email: userData.email
      };
      console.log(simplified);
    });
    console.log();
  })
  .catch(err => console.error(err));

// Post request
async function createPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'New Post',
      content: 'Some content...'
    })
  });
  const newPost = await response.json(); // response.json() also returns a Promise
  return newPost;
}

createPost()
  .then(newPost => console.log(newPost))
  .catch(err => console.error(err));

console.log('Since fetch()-API is asynchronous, this line is printed first.\n');
