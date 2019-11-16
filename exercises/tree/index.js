// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    // filter returns new array - does not modify original arr
    this.children = this.children.filter(el => {
      return el.data !== data;
    })
  }
  // remove(node) {
  //   let nodeIndex = this.children.indexOf(node);
  //   this.children.splice(nodeIndex, 1);
  // }
}

// Unlike a linked list, which manages it's nodes' states within the ll class,
// In a tree, we associate manipulating the tree with an actual node
class Tree {
  constructor() {
    this.root = null;
  }
  // breadth first traversal:
  // ex: given a tree of positions, print a list of positions by heirarchy
  // (i.e. org chart, military heirarchy)
  traverseBF(fn) {
    // start with root node and add to empty arr
    // while there are elements in the arr:
    // take first el of arr, add it's children to END of arr
    // run interator function on that el and throw it away
    if (!this.root) {
      return;
    }
    const arr = [this.root];
    while(arr.length) {
      const currentNode = arr.shift();

      for(let child of currentNode.children) {
        arr.push(child);
      }
      // ^ can also use spread operator:
      // arr.push(...node.children);
      fn(currentNode);
    }
  }
  // depth first traversal:
  traverseDF(fn) {
    // start with root node and add to empty arr
    // while there are elements in the arr:
    // take first el of arr, add it's children to the START of arr
    // run interator function on that el and throw it away
    if (!this.root) {
      return;
    }
    const arr = [this.root];
    while (arr.length) {
      const currentNode = arr.shift();

     arr.unshift(...currentNode.children);

      // children  arr needs to be unshifted starting at LAST/ RIGHT-MOST element
      // (aka order should be preserved) - spread operator does this
      // is using for loop, it needs to be DECREMENTED:

      // for (let i = currentNode.children.length - 1; i >= 0; i--) {
      //   arr.unshift(currentNode.children[i]);
      // }
      fn(currentNode);
    }
  }

}

// const node = new Node(1);
// const tree = new Tree(1);
// tree.root = node;

module.exports = { Tree, Node };
