// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    // this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // return this.getAt(this.size() - 1);
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while(node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    // this implementation returns the node that was removed
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return this.head;
    }

    let previous = this.head;
    let node = this.head.next;
    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
    return node;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
       // There are existing nodes in our linked list
      last.next = new Node(data);
    } else {
      // The linked list is empty!
      this.head = new Node(data);
    }
  }

  getAt(index) {
    // linked lists are zero indexed
    let counter = 0;
    let node = this.head;

    while (node && counter !== index) {
      counter++;
      node = node.next;
    }
    return node;
  }

  // getAt(index) {
  //   // linked lists are zero indexed
  //   let counter = 0;
  //   let node = this.head;
  //
  //   while (node) {
  //     if (counter === index) {
  //       return node;
  //     }
  //     counter++;
  //     node = node.next;
  //   }
  //   return null;
  // }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }

  // forEach(fn) {
  //   if (!this.head) {
  //     return;
  //   }
  //   let node = this.head;
  //   while (node) {
  //     fn(node)
  //     node = node.next;
  //   }
  // }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter)
      node = node.next;
      counter++;
    }
  }
// defined generator function with key Symbol.iterator
  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
