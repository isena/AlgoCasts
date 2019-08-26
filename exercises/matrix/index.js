// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// ###################################
// # This Code is not a 'clean code' #
// ###################################

const matrix = n => {
  //   [[00 01 02 03 04 05 06 07 08],
  //    [10 11 12 13 14 15 16 17 18],
  //    [20 21 22 23 24 25 26 27 28],
  //    [30 31 32 33 34 35 36 37 38],
  //    [40 41 42 43 44 45 46 47 48],
  //    [50 51 52 53 54 55 56 57 58],
  //    [60 61 62 63 64 65 66 67 68],
  //    [70 71 72 73 74 75 76 77 78],
  //    [80 81 82 83 84 85 86 87 88]]
  
  // -->  00 01 02 03 04 05 06 07 08  (lr)
  // -->  18 28 38 48 58 68 78 88  (td)
  // -->  87 86 85 84 83 82 81 80  (rl)
  // -->  70 60 50 40 30 20 10  (dt)
  // -->  11 12 13 14 15 16 17  (lr)
  // -->  27 37 47 57 67 77  (td)
  // -->  76 75 74 73 72 71  (rl)
  // -->  61 51 41 31 21  (dt)
  // -->  22 23 24 25 26  (lr)
  // -->  36 46 56 66  (td)
  // -->  65 64 63 62  (rl)
  // -->  52 42 32  (dt)
  // -->  33 34 35  (lr)
  // -->  45 55  (td)
  // -->  54 53  (rl)
  // -->  43  (dt)
  // -->  44  (lr)
  
    let lr = 0
    let td = 0
    let rl = 0
  
    const total = n*n
  
    let row = 0
    let column = 0

    const results = []

    for (let i = 0; i < n; i++) {
        results.push([])
    }
  
    // const nthArray = (_) => Array.from(Array(_), () => Array(_).fill(0))
  
    // const arr = nthArray(n)
  
    console.log(results)
  
    console.log(results[0][1])
  
    let next = 0 // 0 = lr | td = 1 | rl = 2 | dt = 3
    process.stdout.write(`  -->  `)
  
    for (let i = 0; i < total; i++) {
      results[row][column] = i+1
  
      if (next === 0) { // increases the column value until < n
          process.stdout.write(`${row}${column} `)
          if (column < n - 1 - lr) {
              column++
          } else {
              row++
              lr++
              next = 1
              process.stdout.write(` (lr)\n  -->  `)
          }
      } else if (next === 1) { // increases the column value until < n
          process.stdout.write(`${row}${column} `)
          if (row < n - 1 - td) {
              row++
          } else {
              column--
              td++
              next = 2
              process.stdout.write(` (td)\n  -->  `)
          }
      } else if (next === 2) {
          process.stdout.write(`${row}${column} `)
          if (column > rl) {
              column--
          } else {
              row--
              next = 3
              rl++
              process.stdout.write(` (rl)\n  -->  `)
          }
      } else {
          process.stdout.write(`${row}${column} `)
          if (row > lr) {
              row--
          } else {
              column++
              next = 0
              process.stdout.write(` (dt)\n  -->  `)
          }
      }
    }
  
    console.log('results:')
    console.log(results)
  
    return results  
  }
  
  // matrix(9)
  
  module.exports = matrix;
  