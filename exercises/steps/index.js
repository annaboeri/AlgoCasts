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

//  *** Recursion Tips:
//      always remember:
// 1. base case - identify this first
// 2. change arguments in some way - should eventually get to base case
//  - Figure out the bare minimum pieces of information to represent your problem
//  - Give reasonable defaults to the bare minimum peices of information
//  - Check the base case. Is there any work left to do? if not, return
//  - DO some work. Call your function again, making sure the arguments have changed in some fashion

function stepsRecursive(n, row = 0, stair = '') {
  // base case
  if (n === row) {
    return;
  }
  // end of row
  if (n === stair.length) {
    console.log(stair);
    return stepsRecursive(n, row + 1);
  }
  // create row/ stair string
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  stepsRecursive(n, row, stair);
}

function steps(n) {
  for (let row = 0; row < n; row ++){
    let stair = '';
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

function steps2(n) {
  let line = new Array(n);
  let rows = 0;

  while (rows < n) {
    line[rows] = '#';
    console.log(line.join(' '));
    rows++
  }
}

module.exports = steps;
