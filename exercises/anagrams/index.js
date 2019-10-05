// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// /[^\w]/ regex replaces any non (^) alphanumeric char (\w)
// word.replace(/[^\w]/g, '').toLowerCase();

// This solutions uses 3 iterations
function anagrams(stringA, stringB) {
  const charMapA = mapString(stringA);
  const charMapB = mapString(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

function mapString(string) {
  const charMap = {};
  string.replace(/[^\w]/g, "").toLowerCase();

  for (let char of string) {
    charMap[char] = charMap[char]++ || 1;
  }
  return charMap;
}

module.exports = anagrams;

function anagrams223(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
