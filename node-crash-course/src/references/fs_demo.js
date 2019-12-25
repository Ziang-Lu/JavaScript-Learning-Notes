const fs = require('fs');
const path = require('path');

const testFolderName = path.join(__dirname, 'test');
const filename = path.join(testFolderName, 'hello.txt');

// In order to enture the correct execution order, we need to chain the
// functions as callbacks, resulting in a long callback chain, which is referred
// to as "callback hell".

// Create folder
fs.mkdir(testFolderName, null, err => {
  if (err) throw err;
  console.log('Folder created.');

  // Create file
  // (Equivalent to writing to file)
  fs.writeFile(filename, 'Hello, world!', err => {
    if (err) throw err;
    console.log('Data written.');

    // Write (Append) to file
    fs.appendFile(filename, ' I love Node.js!', err => {
      if (err) throw err;
      console.log('Date appended.');

      // Read file
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`Read data: ${data}`);

        // Rename file
        fs.rename(
          filename,
          path.join(testFolderName, 'helloworld.txt'),
          err => {
            if (err) throw err;
            console.log('File renamed.');
          }
        );
      });
    });
  });
});
