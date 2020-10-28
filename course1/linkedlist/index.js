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
      // this does not work if I assign this.head to a variable
      this.head = null
      return
    }

    let currentNode = this.head
    while(currentNode.next.next) {
      currentNode = currentNode.next
    }

    currentNode.next = null
  }

  insertLast(data) {
    const lastNode = this.getLast()
    const newLast = new Node(data)

    if (!lastNode) {
      this.head = newLast
      return
    }
    
    lastNode.next = newLast
  }

  getAt(index) {
    let counter = 0
    let currentNode = this.head

    while (currentNode) {
      if (counter === index) {
        return currentNode
      }

      currentNode = currentNode.next
      counter++
    }

    return null
  }

  removeAt(index) {
    if (!this.head) return

    if (index === 0) {
      this.head = this.head.next
      return
    }

    let counter = 0
    // In case there is getAt() availbale
    // let previousNode = getAt(index - 1)
    let previousNode = this.head
    while(previousNode) {
      if (counter === index - 1) break

      previousNode = previousNode.next
      counter++
    }

    if (!previousNode || !previousNode.next) return

    if (previousNode.next.next) {
      previousNode.next = previousNode.next.next
    } else {
      previousNode.next = null
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }
    
    let previousNode = this.getAt(index - 1) || this.getLast()
    previousNode.next = new Node(data, previousNode.next)
  }
}

module.exports = { Node, LinkedList };
