class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

posts = [
  new Post('Post #1', 'Nice day!'),
  new Post('Post #2', 'What to write today?')
];

function getPosts() {
  // To simulate interacting with the server, sleep 3 seconds here
  setTimeout(() => {
    let output = '';
    posts.forEach(value => {
      output += `<li>${value.title}: ${value.content}</li>`;
    });
    document.body.innerHTML = output;
  }, 3000);
}

function createPost(title, content) {
  setTimeout(() => {
    posts.push(new Post(title, content));
  }, 1000);
}

getPosts();
