const fetch = require('node-fetch');

// fetch() API returns a Promise

// GET request
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(userData => {
      const filtered = {
        id: userData.id,
        username: userData.username,
        email: userData.email
      };
      console.log(filtered);
    });
  })
  .catch(err => console.log(err));
// Any error that happens along the chain, the execution flow goes to the
// "catch()" function.

console.log();

// POST request
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    content: 'Some content...'
  })
})
  .then(response => response.json())
  .then(newPost => console.log(newPost));
