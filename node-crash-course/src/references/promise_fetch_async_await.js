/**
 * Same thing as "fetch_promise.js", but with "async/await" syntax sugar.
 */

const fetch = require('node-fetch');

// fetch()-API returns a Promise

// GET request
async function fetchUsers() {
  // This "async" function returns a Promise
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json(); // response.json() also returns a Promise
    users.forEach(userData => {
      const simplified = {
        id: userData.id,
        username: userData.username,
        email: userData.email
      };
      console.log(simplified);
    });
  } catch (err) {
    console.error(err);
  }
  console.log();
}

fetchUsers();

// Post request
async function createPost() {
  // This "async" function returns a Promise
  try {
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
    console.log(newPost);
  } catch (err) {
    console.error(err);
  }
}

createPost();

console.log('Since fetch()-API is asynchronous, this line is printed first.\n');
