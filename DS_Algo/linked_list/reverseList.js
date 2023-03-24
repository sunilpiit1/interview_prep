const LinkedList = require('./linked_list');
let list = new LinkedList();
list.addNode(0);
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

function reverseList(head) {
  let temp = head;
  head = null;

  while (temp !== null) {
    let anotherTemp = temp.next;
    temp.next = head;
    head = temp;
    temp = anotherTemp;
  }

  /**here we are logging the reversed linked list */
  while (head !== null) {
    console.log(head.val);
    head = head.next;
  }
}

reverseList(list.head);
