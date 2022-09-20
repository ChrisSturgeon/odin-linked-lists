class Node {
  constructor(value, nextNode = null) {
    (this.value = value), (this.nextNode = nextNode);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds node to beginning of list
  append = function (value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let tailNode = this.head;
    while (tailNode.nextNode !== null) {
      tailNode = tailNode.nextNode;
    }
    tailNode.nextNode = newNode;
  };

  // Adds node to end of list
  prepend = function (value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  };

  // Returns total number of nodes in the list
  size = function () {
    if (this.head == null) {
      return 0;
    }

    let count = 1;
    let tailNode = this.head;
    while (tailNode.nextNode !== null) {
      tailNode = tailNode.nextNode;
      count++;
    }
    return count;
  };

  // Returns the first node value in the list
  first = function () {
    return this.head.value;
  };

  // Returns the last node value in the list
  last = function () {
    let tailNode = this.head;
    while (tailNode.nextNode !== null) {
      tailNode = tailNode.nextNode;
    }
    return tailNode.value;
  };

  // Returns the node value for a given index
  atIndex = function (index) {
    try {
      let tempNode = this.head;
      for (let i = 1; i < index; i++) {
        tempNode = tempNode.nextNode;
      }

      return tempNode;
    } catch (error) {
      console.log(
        'Warning: you have selected an index greater than the list length.'
      );
    }
  };

  // Removes the last node from the list
  pop = function () {
    if (!this.head) {
      this.head = null;
    }

    let previousNode = this.head;
    let tailNode = this.head.nextNode;

    while (tailNode.nextNode !== null) {
      previousNode = tailNode;
      tailNode = tailNode.nextNode;
    }

    previousNode.tailNode = null;
  };

  // Returns true if the passed in value is within list.
  find = function (value) {
    let tempNode = this.head;

    while (tempNode.nextNode !== null) {
      if (tempNode.value === value || tempNode.nextNode.value === value) {
        return true;
      } else {
        tempNode = tempNode.nextNode;
      }
    }
    return null;
  };

  // Console logs all node values as strings
  toString = function () {
    if (!this.head) {
      return null;
    }

    let tempNode = this.head;

    while (tempNode.nextNode !== null) {
      console.log(`( ${tempNode.value} ) -> `);
      tempNode = tempNode.nextNode;
      if (tempNode.nextNode === null) {
        console.log(`( ${tempNode.value} ) ->`);
      }
    }
    console.log('null');
  };

  // Inserts a new node with given value at given index
  insertAt = function (value, index) {
    let newNode = new Node(value);
    let indexNode = this.head;

    for (let i = 1; i < index; i++) {
      indexNode = indexNode.nextNode;
    }

    let followingNode = indexNode.nextNode;
    newNode.nextNode = followingNode;
    indexNode.nextNode = newNode;
  };

  // Removes node at given index
  removeAt = function (index) {
    if (index <= this.size()) {
      let indexNode = this.head;
      let previousNode;

      for (let i = 1; i < index; i++) {
        previousNode = indexNode;
        indexNode = indexNode.nextNode;
      }

      if (index > 1) {
        previousNode.nextNode = indexNode.nextNode;
      } else {
        this.head = indexNode.nextNode;
      }
    }
  };
}
