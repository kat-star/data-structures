class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding to the tail
  addToTail(val) {
    const newNode = new Node(val);

    // empty if no head, so set the new node as the head
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  // removing the tail
  removeTail() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return current;
    }

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }

    while (tail.next != null) {
      current = tail;
      tail = tail.next;
    }
    current.next = null;
    this.tail = current;
    this.length--;
    return tail;
  }

  addToHead(val) {
    let newNode = new Node(val);

    // empty if there is no head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  removeHead() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
      this.length = 0;
    }
    return current;
  }

  // go through List to see if List contains the target input
  contains(target) {
    let node = this.head;
    while (node) {
      if (node.value === target) return true;
      node = node.next;
    }
    return false;
  }

  // simulates node retrivial as if it were an array
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    //use get helper to get boolean on whether node is found in List
    const foundNode = this.get(index);
    if (foundNode) {
      //if true, the value of the found node will now be val
      foundNode.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return !!this.addToTail(val);
    if (index === 0) return !!this.addToHead(val);

    let newNode = new Node(val);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index > 0 && index > this.length) return undefined;

    let current;
    let previous;
    let i = 0;

    current = this.head;
    previous = current;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.length--;
    return current;
  }

  size() {
    return this.length;
  }

  printList() {
    let current_node = this.head;
    console.log(current_node.value);
    while ((current_node = current_node.next)) {
      console.log(current_node.value);
    }
  }
}
