// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function fib1(n) {
  let sequence = [];
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      sequence[i] = i;
    } else {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
  }
  return sequence[n];
}


function fib2(n) {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }
  return result[n];
}

// Recursive fib:
// this is an exponential runtime! (Not an acceptable runtime)
// is there a way to improve the runtime of this recursive solution?
// YES - Memoization:
// --> We have mutliple function calls wih the same arguments repeated
// --> store the arguments of each functional call along with the result.
// --> If the function is called again with the same arguments,
// --> return the precomputed result, rather than running the function again
// --> aka caching the results that come out of the function
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}
const fib = memoize(slowFib);

module.exports = fib;
