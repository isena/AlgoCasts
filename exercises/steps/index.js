// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #2
const steps = (n, row = 0, stair = '') => {
  if (n === row) return

  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }
  return steps(n, row, stair += stair.length <= row ? '#' : ' ')
}

// Solution #1
// const steps = n => {
//   for (let row = 0; row < n; row++) {
//     let output = ''

//     for (let column = 0; column < n; column++) {
//       output += column <= row ? '#' : ' '
//     }

//     console.log(output)
//   }
// }

module.exports = steps;
