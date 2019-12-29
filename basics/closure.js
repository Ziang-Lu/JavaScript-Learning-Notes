/**
 * 在JavaScript中, 所有函数都能访问它们上一级的作用域
 * -> JavaScript支持嵌套函数. 嵌套函数可以访问上一层的函数比那里变量
 * => 闭包是一种保护私有变量的机制, 在函数执行时形成私有的作用域, 保护里面的私有变量
 */

const add = (() => {
  let counter = 0;

  function add() {
    return ++counter;
  }

  return add;
})(); // 函数的自我调用, 确保该匿名函数只执行一次, 返回一个add函数 => 确保只有一个counter
// counter受这个匿名函数的作用域保护, 只能通过add()函数修改

add();
add();
console.log(add()); // 3
