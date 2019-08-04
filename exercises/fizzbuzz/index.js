// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const word = _ => (_ % 15 === 0) ? 'fizzbuzz' 
  : (_ % 3 === 0) ? 'fizz' 
  : (_ % 5 === 0) ? 'buzz' 
  : _

const fizzBuzz = _ => {
  for (let i = 1; i <= _; i++) {
    console.log(word(i))
  }
}

module.exports = fizzBuzz;
