// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// // solution 3.1
// const reverse = (str) => 
//   str.split('').reduce(
//     (total, currentValue) => currentValue + total, ''
//   )

// solution 3
const reverse = (str) => {
  debugger;
  return str.split('').reduce(function(total, currentValue) {
    // console.log(`${total} + ${currentValue}`)
    total = currentValue + total
    return total
  }, '')
}

reverse('asdf');

// // solution 2
// const reverse = (str) => {
//   let reversed = ''

//   for (character of str) {
//     reversed = character + reversed
//   }

//   return reversed
// }

// // solution 1.1
// const reverse = (_) => _.split('').reverse().join('')

// // solution 1
// function reverse(str) {
//   const arr = str.split('')
//   arr.reverse();
//   return arr.join('')
// }

// my solution
// function reverse(str) {
//   let newString = ''
  
//   for (var i = str.length -1; i >= 0; i--) {
//     newString += str[i];
//   }

//   return newString;
// }

module.exports = reverse;
