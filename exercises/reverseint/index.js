// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversedArr = [];
  const digitsArr = n.toString().split('');
  let isNegative = false;
  if (digitsArr[0] == '-') {
    isNegative = true;
  }
  for (let i = 0; i < digitsArr.length; i++) {
    if (isNegative && i === 0) continue;
    reversedArr.unshift(digitsArr[i]);
  }
  if (isNegative) {
    reversedArr.unshift('-');
  }
  return parseInt(reversedArr.join(''));
}

module.exports = reverseInt;

function reverseInt2(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}
