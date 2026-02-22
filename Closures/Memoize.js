// This function does some heavy work.
// It loops n times and keeps adding n to sum.
// This is slow if we call it again and again with the same value.
const expensiveFunc = (n) => {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum = sum + n;
  }

  return sum;
};

// This function adds memory (cache) to any function passed to it.
// Once a result is calculated, it is saved.
// Next time the same input comes, we return the saved result.
const memoize = (func) => {

  // cache is an object where
  // key:- input value (n)
  // value:- result of the function
  let cache = {};

  return function (n) {

    // If result already exists in cache
    if (n in cache) {

      // Return saved value, no recalculation
      return cache[n];
    } 
    else {

      // Call the original expensive function
      const result = func(n);

      // Save the result in cache
      cache[n] = result;

      // Return the calculated result
      return result;
    }
  };
};

// Create a memoized version of expensiveFunc
const memoizedAddFunction = memoize(expensiveFunc);

// First time: calculation happens
console.log(memoizedAddFunction(100));

// First time for 1000: calculation happens
console.log(memoizedAddFunction(1000));

// Second time for 100: value comes directly from cache
console.log(memoizedAddFunction(100));
