// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';
  for (let i = str.length - 1; i > -1; i--) {
    reversed += str[i];
  }
  return reversed;
}


module.exports = reverse;

function reverse2(str) {
  return str.split('').reverse().join('');
}

function reverse3(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverse4(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}
