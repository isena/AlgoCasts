// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  const charsMap = {}
  let maxChar = ''
  let max = 0

  for (const char of str) {
    charsMap[char] = charsMap[char] + 1 || 1

    if (charsMap[char] > max) {
      maxChar = char
      max = charsMap[char]
    }
  }

  return maxChar
}

module.exports = maxChar;
