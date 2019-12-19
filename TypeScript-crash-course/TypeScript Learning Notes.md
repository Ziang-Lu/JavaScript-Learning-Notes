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
    * `tuple`
    * `generics`
    * `enum`
    * `any`
  * **Modularity**
* Compatible with ES6 features
    * **`interface` definition, which may not be used for inheritance, but for static type checking**
    * **Access modifier to class fields (`private`, etc.)**
  
* Can (and need) be compiled to plain JavaScript

<br>

## Compile to JavaScript

```bash
$ tsc --init
# Generates "tsconfig.json"
```

Change to

```json
"target": "es2015"
```

<br>

```bash
$ tsc sample.ts
$ tsc -w sample.ts  # Watch mode: Every time "sample.ts" file is modified, auto-generate the corresponding "sample.js" file
```

