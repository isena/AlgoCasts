// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution #2
const capitalize = _ => {
  let result = _[0].toUpperCase()

  for (let i = 1; i < _.length; i++) {
    result += _[i - 1] === ' ' ? _[i].toUpperCase() : _[i]
  }

  return result
}

// // Solution #1
// const capitalize = (str) => str
//   .split(' ')
//   .map(_ => _[0].toUpperCase() + _.slice(1))
//   .join(' ')

module.exports = capitalize
