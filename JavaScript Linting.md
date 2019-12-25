# JavaScript Linting

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

