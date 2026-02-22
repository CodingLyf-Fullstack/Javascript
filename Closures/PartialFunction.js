function combine(a, b) {
  return a + b;
}

const addFixed = partial(combine, 10);
console.log(addFixed(5)); // Output: 15

function partial(fn, a) {
    return function(b) {
        return fn(a,b)
    }
}