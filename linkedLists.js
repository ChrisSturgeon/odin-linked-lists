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

      for (let i = 0; i < index; i++) {
        tempNode = tempNode.nextNode;
      }

      return tempNode.value;
    } catch (error) {
      console.log(
        'Warning: you have selected an index greater than the list length.'
      );
    }
  };
}

const myList = new LinkedList();
myList.prepend('Brian');
myList.append('Chris');
myList.append('Eric');
myList.append('Gail');

console.log(myList.atIndex(3));
