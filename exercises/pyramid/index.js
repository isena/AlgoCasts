// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(5)
//       '    #    ' 0: 2*0+1 = 1
//       '   ###   ' 1: 2*1+1 = 3
//       '  #####  ' 2: 2*2+1 = 5
//       ' ####### ' 3: 2*3+1 = 7
//       '#########' 3: 2*4+1 = 9
//       '   *#*   ' n: 2*n+1

// My Solution #2

const ranges = (n, row) => {
  const totalLength = oddNumber(n - 1)
  const items = oddNumber(row)
  const startAt = totalLength/2 - items/2
  const stopAt = totalLength/2 + items/2
  return {totalLength, startAt, stopAt}
}

const oddNumber = _ => 2 * _ + 1

const pyramid = (n, row = 0, output = '') => {
    if (row === n) return

    const _ranges = ranges(n, row)

    if (output.length === _ranges.totalLength) {
        console.log(output)
        return pyramid(n, row + 1)
    }

    add = (output.length >= _ranges.startAt && output.length < _ranges.stopAt) ? '#' : ' '

    return pyramid(n, row, output + add)
}

// My solution #1
// const oddNumber = _ => 2 * _ + 1

// const pyramid = (n) => {
//     for (let row = 0; row < n; row++) {
//         let output = ''
//         const number = oddNumber(row)
//         const totalPositions = oddNumber(n - 1)

//         for (let column = 0; column < totalPositions; column++) {
//             const startAt = totalPositions/2 - number/2
//             const stopAt = totalPositions/2 + number/2
//             output += (column >= startAt && column < stopAt) ? '#' : '-' 
//         }

//         console.log(output)
//     }
// }

module.exports = pyramid;
