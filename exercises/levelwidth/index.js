// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// Whenever you see *width* in a tree questions = BFS

function levelWidth(root) {
  // 's' var could be anything - just an indication that we reached a level
  const counters = [0];
  const arr = [root, 's'];
  // if arr.length = 1, we will hit 's'
  //
  while(arr.length > 1) {
    const current = arr.shift();
    if (current === 's') {
      // if we reached the end of a level, we need to indicate a new level
      // so push that var back into the array
      // and start the new level's counter
      counters.push(0);
      arr.push(current);
    } else {
      // otherwise, push the current node's children into the Array
      // and add to the counter at that level
      arr.push(...current.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

module.exports = levelWidth;
