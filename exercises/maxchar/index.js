// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution also used to solve:
// > What is the most common character in a string?
// > Does string A have the same characters as string B (is it an anagram?)
// > Does the given string have any repeated characters in it?

function maxChar(str) {
  let chars = {};
  for (let i = 0; i < str.length; i++) {
    currentChar = str[i];
    chars[currentChar] = (chars[currentChar] || 0) + 1
  }
  const max = Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b)

  return max;
}

module.exports = maxChar;

function maxChar2(str) {
  let max = 0;
  let maxChar = '';
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] ++ || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
