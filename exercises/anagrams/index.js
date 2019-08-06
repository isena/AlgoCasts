// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #2
const anagrams = (stringA, stringB) => cleaning(stringA) === cleaning(stringB)

const cleaning = _ => _.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')

// // Solution #1

// const cleaning = _ => _.replace(/[^\w]/g, '').toLowerCase()

// const charsMap = _ => {
//   const charsMap = {}

//   for (char of cleaning(_)) {
//     charsMap[char] = charsMap[char] + 1 || 1
//   }

//   return charsMap
// }

// const keysLength = _ => Object.keys(_).length

// const anagrams = (stringA, stringB) => {
//   const stringAMap = charsMap(stringA)
//   const stringBMap = charsMap(stringB)

//   if (keysLength(stringAMap) !== keysLength(stringBMap)) return false

//   for (let char in stringAMap) {
//     if (stringAMap[char] !== stringBMap[char]) return false
//   }

//   return true
// }

  // My Solution
  // let isAnagram = true

  // Object.entries(stringAMap).every(([key, value]) => {
  //   if (stringBMap[key] !== value) {
  //     isAnagram = false
  //     return
  //   }
  // })

  // return isAnagram
// }

module.exports = anagrams;
