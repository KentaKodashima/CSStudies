// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0
    let currentNode = this.head

    if (!currentNode) return 0

    while(currentNode) {
      counter++
      currentNode = currentNode.next
    }

    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let lastNode = this.head

    if (!lastNode) return undefined

    while(lastNode.next) {
      lastNode = lastNode.next
    }

    return lastNode
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) return

    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) return

    if (this.head.next === null) { 
      this.head = null
      return
    }

    let currentNode = this.head
    while(currentNode.next.next) {
      currentNode = currentNode.next
    }

    currentNode.next = null
  }
}

module.exports = { Node, LinkedList };
