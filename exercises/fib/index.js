// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {}

// ###################
// # Course Solution #
// ###################
const memoize = fn => {
  const cache = {}

  return function(...args) {
    if (cache[args])
      return cache[args]

    const result = fn.apply(this, args)
    cache[args] = result    

    return result
  }
}

const slowFib = n => {
  if (n < 2)
    return n
  
  return fib(n - 1) + fib(n - 2)
}

const fib = memoize(slowFib)

// // ###############
// // # Memoization #
// // ###############
// const memoization = []

// const fib = n => {
//   if (n < 2)
//     return n
  
//   if (memoization[n])
//     return memoization[n]
  
//   memoization[n] = fib(n - 1) + fib(n - 2)

//   return memoization[n]
// }

// // #############
// // # Recursive #
// // #############
// const fib = n => {
//   if (n < 2)
//     return n

//   return fib(n - 1) + fib(n - 2)
// }

// // #############
// // # Iterative #
// // #############
// const fib = n => {
//   const result = []

//   for (let i = 0; i <= n; i++) {
//     result[i] = i === 0 || i === 1 ? i : result[i - 1] + result[i - 2]
//   }

//   return result[n]
// }

module.exports = fib;
