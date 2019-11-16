// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create and insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // 1. compare data to current node's data
  // 2. if data is less , cherck for current node's left
  // 3. if greater, check for current node's right
  // 4. if left/right child exists, go to step that node and #1
  // 5. else - put the node There
  // done
  insert(data, node = this) {
    if (data < node.data) {
      // base case
      if (!node.left) {
        node.left = new Node(data);
        return;
      } else {
        this.insert(data, node.left);
      }
    }
    if (data > node.data) {
      // base case
      if (!node.right) {
        node.right = new Node(data);
        return;
      } else {
        this.insert(data, node.right)
      }
    }
  }
//stephen's solution:
  // insert(data) {
  //   if (data < this.data && this.left) {
  //     this.left.insert(data);
  //   } else if (data < this.data) {
  //     this.left = new Node(data);
  //   } else if (data > this.data && this.right) {
  //     this.right.insert(data);
  //   } else if (data > this.data) {
  //     this.right = new Node(data);
  //   }
  // }

  contains(data) {
   if (data === this.data) {
      return this;
    }
    if (data < this.data) {
      if (this.left) {
        // must RETURN recursive function!
        return this.left.contains(data);
      }
      else return null;
    }
    if (data > this.data) {
      if (this.right) {
        // must RETURN recursive function!
        return this.right.contains(data);
      }
      else return null;
    }
  }

  //stephen's solution:
  // contains(data) {
  //   if (this.data === data) {
  //     return this;
  //   }
  //   if (this.data < data && this.right) {
  //     return this.right.contains(data);
  //   } else if (this.data > data && this.left) {
  //     return this.left.contains(data);
  //   }
  //   return null;
  // }
}

module.exports = Node;
