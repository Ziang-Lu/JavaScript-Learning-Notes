# TypeScript Learning Notes

## TypeScript Basics

* Superset of JavaScript, but additionally offers
  * **Static type checking**
    * <u>Completely optional</u>
    * `number`
    * `boolean`
    * `string`
    * `array`
    * `null`
    * `undefined`
    * `void`  (可以是`null`或者`undefined`)
    * Data type combination
    * `any`
    * `unknown`
    * `tuple`
    * `enum`
  * **Modularity**
* Compatible with ES6 features
    * **`interface` definition, which may not be only used for inheritance, but for static type checking**
    * **Access modifier to class fields (`public`, `protected` `private`)**
* `readonly` access modifier, which is essentialy like `const` in `Java`
  
* Can (and need) be compiled to plain JavaScript

<br>

***

### TypeScript Linting

Following the fules to lint plain JavaScript codes, plus the following:

```bash
$ npm install -g @typescript-eslint/parser @typescript-eslint/eslint-plugin

$ npx install-peerdeps --dev eslint-config-typescript-airbnb-base
```

to add additional dependencies to `package.json`

***

<br>

## Compile to JavaScript

```bash
$ tsc --init
# Generates "tsconfig.json", which defines the rules to compile to JavaScript
```

Check out the `tsconfig.json` for compilation configurations

```bash
$ tsc sample.ts
$ tsc -w sample.ts  # Watch mode: Every time "sample.ts" file is modified, auto-generate the corresponding "sample.js" file
```


