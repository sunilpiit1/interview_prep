class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(val) {
    let tempNode = new Node(val);
    if (this.head === null) {
      this.head = tempNode;
      this.tail = tempNode;
    } else {
      this.tail.next = tempNode;
      this.tail = tempNode;
    }
  }

  print() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

/** you can check it here */
// let ll = new LinkedList();
// ll.addNode(2);
// ll.addNode(5);
// ll.addNode(20);
// ll.addNode(19);
// ll.addNode(0);
// ll.addNode(27);
// ll.print();

module.exports = LinkedList;
