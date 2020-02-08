/*
 fetch()-API is natively supported in browsers, not in Node.js, so we need a
 third-party module.
 */
const fetch = require('node-fetch');

// GET request
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
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
  .then(newPost => console.log(newPost))
  .catch(err => console.err(err));

console.log('Since fetch()-API is asynchronous, this line is printed first.\n');

// Output:
// Since fetch()-API is asynchronous, this line is printed first.

// { id: 1, username: 'Bret', email: 'Sincere@april.biz' }
// { id: 2, username: 'Antonette', email: 'Shanna@melissa.tv' }
// { id: 3, username: 'Samantha', email: 'Nathan@yesenia.net' }
// { id: 4, username: 'Karianne', email: 'Julianne.OConner@kory.org' }
// { id: 5, username: 'Kamren', email: 'Lucio_Hettinger@annie.ca' }
// {
//   id: 6,
//   username: 'Leopoldo_Corkery',
//   email: 'Karley_Dach@jasper.info'
// }
// { id: 7, username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz' }
// { id: 8, username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me' }
// { id: 9, username: 'Delphine', email: 'Chaim_McDermott@dana.io' }
// { id: 10, username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz' }

// { title: 'New Post', content: 'Some content...', id: 101 }
