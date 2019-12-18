# TypeScript Learning Notes

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

```bash
$ tsc --init
# Generates "tsconfig.json"
```

Change to

```json
"target": "es2015"
```

```bash
$ tsc <filename>
$ tsc -w <filename>  # Watch mode: Every
```

