# JavaScript Learning Notes

These repo contains course notes in the following courses

* Intro to JavaScript on *Udacity*
* Node.js crash course on YouTube https://www.youtube.com/watch?v=fBNz5xF-Kx4
* TypeScript crash course on YouTube https://www.youtube.com/watch?v=rAy_3SIqT-E

<br>

## JavaScript Basics

1. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/1_primitive_data_types.js">Primitive Data Types</a>
2. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/2_conditional.js">Conditional</a>
3. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/3_loop.js">Loop</a>
4. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/4_function.js">Function</a>
5. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/5_array.js">Array</a>
6. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/6_object_(map).js">Object (Map)</a>
7. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/7_oop.js">OOP</a>

<br>

## Node.js Runtime

### Basics

**Single-threaded + Event-driven model (including an event loop) => Natively non-blocking I/O model**

**-> 只执行I/O请求, 而不等待I/O结果 => 大部分功能靠callback function实现**

<img src="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/node-crash-course/Node.js%20Event%20Loop.png?raw=true" width="400px">

* <u>由于是asynchronous I/O model, 可以支持tens of thousands concurrent connections.</u>
* Optimizes throughput & scalability for I/O-bound applications

<br>

### Non-blocking I/O Model & Asynchronous I/O in `Node.js`

* **Callback function (native)**

  Common built-in functions that are asynchronous and accept callback functions:

  * `setTimeout(function, delay)` / `setInterval(function, delay)`

    ```javascript
    function getAsyncMessage(cb) {
      setTimeout(() => cb('Hello, world!'), 1000);
      // setTimeout() is asynchronous, meaning that when waiting 1 second, the process continues the execution; thus, "After getAsyncMessage() call" is printed first.
    }
    
    console.log('Before getAsyncMessage() call');
    getAsyncMessage((msg) => console.log(msg));
    console.log('After getAsyncMessage() call');
    
    // Output:
    // Before getAsyncMessage() call
    // After getAsyncMessage() call
    // (Paused for around 1 second)
    // Hello, world!
    ```

  * `Event` mechanism

    Check out `async/1-callback/mylogger.js`

  For serveral functions, if we want to <u>ensure the correct execution order</u>, we <u>may need to chain these functions as callbacks</u>.

  => <u>Chaining a lot of callback functions => "Callback hell (回调地狱)"</u>

  Check out `async/1-callback/fs_demo.js` as follows:

  ```javascript
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
  ```

* **`Promise` (since ES6 / ES2015)**

  * For usage, check out `async/2-promise/fetch_promise.js`, which contains the following code snippet:

    ```javascript
    const fetch = require('node-fetch');
    
    // fetch()-API returns a Promise
    
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
      })
      .catch(err => console.log(err));
    // Any error that happens along the chain, the execution flow goes to the
    // "catch()" function.
    ```

  * From <u>"callback hell"</u> to <u>Promise</u>, check out `src/async/2-promise/promise_basics.js` as follows:

    ```javascript
    const fs = require('fs');
    
    const somePath = 'test.txt';
    
    function myExistHandler() {
      console.log('File exists');
    }
    
    function myNotExistHandler(err) {
      console.error(err);
    }
    
    // Originally, with callback functions, we would use "fs.exists()" like this:
    
    function checkExistWithCallback(path, existHandler, notExistHandler) {
      fs.exists(path, exists => {
        if (exists) {
          existHandler();
        } else {
          notExistHandler(new Error('Path does not exist'));
        }
      });
    }
    
    checkExistWithCallback(somePath, myExistHandler, myNotExistHandler);
    
    // In order to avoid "callback hell", we want to do the same thing with Promise
    // like this.
    
    // checkExistsWithPromise(somePath)
    //   .then(myExistHandler)
    //   .catch(myNotExistHandler);
    
    // If we want to the above, we must let "checkExistsWithPromise()" return a
    // Promise (in which we do the necessary work).
    
    function checkExistsWithPromise(path) {
      return new Promise((resolve, reject) => {
        fs.exists(path, exists => {
          if (exists) {
            resolve();
          } else {
            reject(new Error('Path does not exist'));
          }
        });
      });
    }
    
    checkExistsWithPromise(somePath)
      .then(myExistHandler)
      .catch(myNotExistHandler);
    ```
    
  * For advantage usage of Promises, including <u>sequential execution (chaining) of multiple Promises</u>, or <u>parallel execution</u>, check out `async/2-promise/promise_advanced.js` as follows:

    ```javascript
    const { cleanRoom, removeGarbage, winIceCream } = require('../common');
    
    console.log('With asynchronous programming, this line is printed first.');
    
    // Sequential execution (chaining)
    cleanRoom()
      .then(msg => {
        console.log(msg);
        return removeGarbage();
      })
      .then(msg => {
        console.log(msg);
        return winIceCream();
      })
      .then(msg => {
        console.log(msg);
        console.log('All finished');
      });
    
    // Parallel execution
    Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(values => {
      console.log(values);
      console.log('All finished');
      console.log();
    });
    
    Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(value => {
      console.log(value);
      console.log('One finished');
    });
    ```

* **`async / await` keywords (since ES8 / ES2017)**

  本质上是一个syntax sugar, 用`await <Promise>`来**asynchronously**等待一个`Promise`执行完毕, 而在使用了`await`语句的函数中, 函数的定义必须加上`async`, 即`async function ...`, 而这样一来这个函数本身也返回一个`Promise`

  ***

  有点类似于`Python `中的`async def / await`:

  * 使用`await <coroutine>`来**asynchronously**等待一个`coroutine`执行完毕, 而在使用了`await`语句的函数中, 函数的定义必须加上`async`, 即`async def ...`, 而这样一来这个函数本身也返回一个`coroutine`

  ***

  * For usage, check out `src/async/3-async-await/fetch_async_await.js`, which contains the following code snippet:

    ```javascript
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
      })
      .catch(err => console.error(err));
    ```

  * For  <u>sequential execution (chaining) of multiple Promises</u> usage of Promises with `async/await` syntax sugar, check out `async/3-async-await/promise_async_await.js` as follows:

    ```javascript
    const { cleanRoom, removeGarbage, winIceCream } = require('../common');
    
    async function myRoutine() {
      let msg = await cleanRoom();
      console.log(msg);
      msg = await removeGarbage();
      console.log(msg);
      msg = await winIceCream();
      console.log(msg);
      console.log('All finished');
    }
    
    myRoutine();
    
    ```

<br>

### Installation

Node installations and versions are managed by NVM (Node Version Manager).

* Install NVM

  ```bash
  $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
  ```

* Add the following to `.bashrc`/`.zshrc`

  ```bash
  # Setting for NVM (Node Version Manager)
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  ```

* Install Node through NVM

  ```bash
  $ nvm install node  # Install the latest version
  
  # Verify that Node has been installed:
  $ nvm which current
  # /Users/Ziang_Lu/.nvm/versions/node/v13.5.0/bin/node
  $ node --version
  # 13.5.0
  ```

<br>

### Project Environment Setup

```bash
$ cd node-crash-course

$ npm init
# Generates "package.json", which is similar to "Pipfile"

$ npm install uuid
# Generates "package-lock.json" if not exists, which is similar to "Pipfile.lock"

# On a new machine, use "package.json" to reinstall the dependencies
$ npm install  # Similar to "pipenv install"
```

For the ease of development, install `nodemon`

```bash
$ npm install -D nodemon  # Install as development dependency
```

which automatically "automatically restarts the node application when file changes in the directory are detected", and then add the following to `package.json`:

```json
"scripts": {
  "start": "node index",
  "dev": "nodemon index",
  "test": ...
}
```

So when in development, instead of running `node index`,  we can simply do `node run-script dev` or simply `node run dev`, which will in turn calls `nodemon index`.

<br>

## License

This repo is distributed under the <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/LICENSE">MIT license</a>.

