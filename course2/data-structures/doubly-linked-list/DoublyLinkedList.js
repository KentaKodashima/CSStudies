const Node = require('./Node')

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * Pushing
   * 
   * - Create a new node with the value passed to the function
   * - If the head property is null, set the head and tail to be the newly created node
   * - If not, set the next property on the tail to be that node
   * - Set the previous property on the newly created node to be the tail
   * - Set the tail to be the newly created node
   * - Increment the length
   * - Return the doubly linked list
   * - 
  */
  push(val) {
    const node = new Node(val)

    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }

    this.length++

    return this
  }

  /**
   * Popping
   * 
   * - If there is no head, return undefined
   * - Store the current tail in a variable to return later
   * - If the length is 1, set the head and tail to null
   * - Update the tail to be the previous node
   * - Set the new tail's next to null
   * - Decrement the length
   * - Return the value removed
  */
  pop() {
    if (!this.head) return undefined
    const nodeToBeRemoved = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      // Need to remove the linkage to the prev.
      // Otherwise, it keeps the reference to the list.
      nodeToBeRemoved.prev = null
    }

    this.length--

    return nodeToBeRemoved
  }

  /**
   * Shifting
   * 
   * - If length is 0, return undefined
   * - Store the current head property in a variable (we'll call it old head)
   * - If the length is one:
   *      - set the head to be null
   *      - set the tail to be null
   * - Update the head to be the next of the old head
   * - Set the head's prev property to null
   * - Set the old head's next to null
   * - Decrement the length
   * - Return the value removed
  */
  shift() {
    if (this.length === 0) return undefined
    const nodeToBeRemoved = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
      nodeToBeRemoved.next = null
    }

    this.length--

    return nodeToBeRemoved
  }

  /**
   * Unshifting
   * 
   * - Create a new node with the value passed to the function
   * - If the length is 0
   *      - Set the head to be the new node
   *      - Set the tail to be the new node
   * - Otherwise
   *      - Set the prev property on the head of the list to be the new node
   *      - Set the next property on the new node to be the head property
   *      - Update the head to be the new node
   * - Increment the length
  */
  unshift(val) {
    const node = new Node(val)

    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }

    this.length++

    return this
  }
}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
console.log(list.pop())
console.log(list, 'list')