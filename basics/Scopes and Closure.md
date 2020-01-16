# Scopes and Closures

## Lexical Scope (词法作用域)

Basically, `JavaScript` scopes works very similar to `Python`

**Some exceptions:**

* Curly braces in JavaScript doesn't necessarily create a scope.
  * Code blocks created by the <u>curly braces of `if` / `for` / `while`, do NOT create scopes</u>.
  * Only the code blocks created by the <u>curly braces of functions, create scopes</u>.

<br>

## In-Memory Scope (内存作用域) / Execution Context (执行上下文)

<u>As the program runs</u>, it'll be building up internal data stores for keeping track of all the variables that are available to different function objects.

<u>-> A new execution context should be created every time you run a function.</u>

*=> For each lexical scope, which is the scope of a function, there may be many in-memory scopes.*

***

其实本质上, 一个execution context就是一个key-value mapping, 保存着variable names -> variable values

=> 而我们可以在runtime去动态track一个function的execution contexts.

***

Check out `6_scoping_demo.js` for a simple demo.

<br>

## Closure (闭包)

**在JavaScript中, 所有函数都能访问它们上一级的scope.**

-> JavaScript支持nested function => **Nested functions可以访问上一层的函数variables**

=> **闭包是一种保护private variables的机制, 在函数执行时, 行程private scope, 保护里面的private variables**

```javascript
const add = (() => {
  let counter = 0;

  function add() {
    // 能访问上一层的函数variable (counter)
    return ++counter;
  }

  return add;
})(); // 函数的自我调用, 确保该匿名函数只执行一次, 返回一个add函数 => 确保只有一个counter
// 当这个匿名函数返回add()函数时, 相关参数和变量(counter)都保存在返回的add()函数中
// counter受这个匿名函数的作用域保护, 只能通过add()函数修改

add();
add();
console.log(add()); // 3
```

### Common Use Cases

* Data privacy (as described above)

* 实现partial functions:

  ```javascript
  function partial(targetFunc, ...fixedArgs) {
    return (...remainingArgs) => {
      return targetFunc.apply(this, fixedArgs.concat(remainingArgs));
    };
  }
  
  function add(a, b) {
    return a + b;
  }
  
  const add10 = partial(add, 10);
  
  console.log(add10(5)); // 15
  ```

  