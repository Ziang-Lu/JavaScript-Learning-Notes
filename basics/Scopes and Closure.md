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