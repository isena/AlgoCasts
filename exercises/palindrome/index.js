// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// My solution 2 with some insights
const palindrome = (str) =>
  str
    .split('')
    .every((char, i) => char === str[str.length - 1 - i])

// My solution 1
// const reverse = _ => _
//   .split('')
//   .reduce((reversed, char) => char + reversed, '')

// const palindrome = (str) => str === reverse(str)

module.exports = palindrome;
