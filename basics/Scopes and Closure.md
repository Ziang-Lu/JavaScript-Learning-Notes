# Scopes and Closures

## Lexical Scope (词法作用域)

Basically, `JavaScript` scopes works very similar to `Python`

<br>

***

**IMPORTANT!!!!!**

在JS中, `function()`定义会创建function scope, 而其他的`if`/`switch`/`for`/`while`/`try`等block会创建block scope.

=> 在blocks中定义的`var`变量依然会从属于该block所属的function scope:

```javascript
if (true) {
  var x = 5;
  // 尽管var x定义在了if block里边, 其仍然属于if block所属的scope, 即global scope
}

console.log(x); // 5
```

<u>而在ES6引入了`let`/`const`之后, 在blocks中定义的`let`/`const`变量会从属于该block的block scope</u>: **INTUITIVE!!!!!**

```javascript
if (true) {
  const x = 5;
  // const x定义在了if block里边, 其只属于if block所创建的block scope
}

console.log(x); // ReferenceError
```

***

<br>

## In-Memory Scope (内存作用域) / Execution Context (执行上下文)

<u>As the program runs</u>, it'll be building up internal data stores for keeping track of all the variables that are available to different function objects.

<u>-> A new execution context should be created every time you run a function.</u>

* For more details about execution contexts, check out this awesome article: http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/

*=> For each lexical scope, which is the scope of a function, there may be many in-memory scopes (execution contexts).*

Check out `6_scoping_demo.js` for a simple demo

<br>

## Closure (闭包)

**在JavaScript中, 所有函数都能访问它们上级的scopes.**

-> JavaScript支持nested function => **Nested functions可以访问上层的所有函数variables**

=> **闭包是一种保护private variables的机制, 在函数执行时, 形成private scope, 保护里面的private variables**

```javascript
const inc = (() => {
  let counter = 0;
  return () => {
    // 能访问上一层的函数variable (counter)
    return ++counter;
  }
})(); // 函数的自我调用, 确保该匿名函数只执行一次, 返回一个inc函数 => 确保只有一个counter
// 当这个匿名函数返回匿名函数时, 返回的匿名函数被保存在了inc变量里, 相关参数和变量(counter)都保存在这个inc()函数中
// counter受这个匿名函数的作用域保护, 只能通过inc()函数修改

inc();
inc();
console.log(inc()); // 3
```

* For more details about how closures work under the hood, check out this awesome article: http://blog.leapoahead.com/2015/09/15/js-closure/

### Common Use Cases

* <u>Data privacy / Encapsulation</u> (as described above)

  For a more detailed example, check out `6_closure_demo/`

* <u>实现partial functions:</u>

  ```javascript
  const partial = (targetFunc, ...fixedArgs) => {
    return (...remainingArgs) => {
      return targetFunc.apply(this, fixedArgs.concat(remainingArgs));
    };
  }
  
  const add = (a, b) => {
    return a + b;
  }
  
  const add10 = partial(add, 10);
  
  console.log(add10(5)); // 15
  ```

* <u>Callback functions</u>

  *An example of this is when making an AJAX call to the server, using a callback to handle the response, while still maintaining the bindings in which it was created.*

