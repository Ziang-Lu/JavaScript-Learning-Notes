function f(a, b) {
  console.log(this);
}

const r = {
  method: f
};

new r.method(1, 2); // f {}

// Discussion about JS class patterns?
