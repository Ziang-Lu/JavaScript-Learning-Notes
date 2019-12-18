# JavaScript Learning Notes

These repo contains course notes in the following courses

* Intro to JavaScript on *Udacity*
* Node.js crash course on YouTube https://www.youtube.com/watch?v=fBNz5xF-Kx4

<br>

1. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/1_primitive_data_types.js">Primitive Data Types</a>
2. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/2_conditional.js">Conditional</a>
3. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/3_loop.js">Loop</a>
4. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/4_function.js">Function</a>
5. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/5_array.js">Array</a>
6. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/6_object_(map).js">Object (Map)</a>
7. <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/7_oop.js">OOP</a>

<br>

## Node.js Crash Course

```bash
$ cd node-crash-course

$ npm init
# Generates "package.json", similar to "Pipfile"

$ npm install uuid
$ npm install -D nodemon  # Install as development dependency
# Generates "package-lock.json" if not exists, similar to "Pipfile.lock"

# On a new machine, use "package.json" to reinstall the dependencies
$ npm install  # Similar to "pipenv install"
```

For the ease of development, install `nodemon`

```bash
$ npm install -D nodemon
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

***

### JavaScript Linting

* Install `ESLint` and `Prettier` globally if not already installed

  ```bash
  $ npm install -g eslint prettier
  ```

  `ESLint` is responsible for checking syntax errors and problems, leaving `Prettier` for auto-formatting our JavaScript codes.

* Install some additional dependencies

  ```bash
  $ npm install -g eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
  ```

* In the project directory, generate the configuration file

  ```bash
  $ eslint --init
  # Generates a ".eslintrc.js" file
  ```

  *Note: Do NOT select `Enforce code style` when doing `eslint --init` and generating `.eslintrc.js`, since we'll use `Prettier` to auto-format our JavaScript codes*

* For VSCode integration, install `ESLint` and `Prettier` extensions, and use `shift + option + F` to set `prettier` as the default code formatter.

***

<br>

## License

This repo is distributed under the <a href="https://github.com/Ziang-Lu/JavaScript-Learning-Notes/blob/master/LICENSE">MIT license</a>.

