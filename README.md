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

**Single-threaded** + **Event-driven model => Non-blocking I/O model**

**-> 只执行I/O请求, 而不等待I/O结果 => 大部分功能靠callback function实现**

<img src="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/node-crash-course/Node.js%20Event%20Loop.png?raw=true" width="200px">

* <u>由于是asynchronous I/O model, 可以支持tens of thousands concurrent connections.</u>
* Optimizes throughput & scalability for I/O-bound applications

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

***

### JavaScript Linting

`ESLint` is responsible for checking syntax errors and problems, while `Prettier` for auto-formatting our JavaScript codes.

**Node Project Settings**

* Install all the necessary packages as in `package.json`

* Generate a `.eslintrc.json` file

  ```bash
  $ eslint --init
  ```

  ```json
  {
    "extends": [
      "airbnb-base",
      "prettier",
      "plugin:prettier/recommended"
    ],
    "plugins": [
      "prettier"
    ],
    "rules": {
      "class-methods-use-this": "off",
      "func-names": "off",
      "no-console": "off",
      "no-unused-vars": "warn",
      "object-shorthand": "off",
      "prettier/prettier": [
        "error",
        {
          "singleQuote": true
        }
      ]
    }
  }
  ```

* For VSCode integration, install `ESLint` and `Prettier` extensions, and use `shift + option + F` to set `prettier` as the default code formatter.

***

<br>

## License

This repo is distributed under the <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/LICENSE">MIT license</a>.

