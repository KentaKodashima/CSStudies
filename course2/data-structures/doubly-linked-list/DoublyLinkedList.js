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

  /**
   * Getting
   * 
   * - If the index is less than 0 or equal to the length, return 0
   * - If the index is less than or equal to half the length of the list
   *      - Loop through the list starting from the head and loop towards the middle
   *      - Return the node once it is found
   * - If the index is greater than or equal to half the length of the list
   *      - Loop through the list starting from the tail and loop towards the middle
   *      - Return the node once it is found
  */
  get(index) {
    if (index < 0 || index > this.length - 1) return null
    if (!this.head) return null
    
    const middle = Math.floor((this.length - 1) / 2)
    if (index <= middle) {
      let counter = 0
      let current = this.head
      while (counter <= middle) {
        if (counter === index) return current
        current = current.next
        counter++
      }
    }　else {
      let counter = this.length - 1
      let current = this.tail
      while (counter >= middle) {
        if (counter === index) return current
        current = current.prev
        counter--
      }
    }
  }

  // Provided solution
  // get(index) {
  //   if (index < 0 || index > this.length) return null
  //   var count, current
  //   if (index <= this.length / 2) {
  //     count = 0
  //     current = this.head
  //     while (count !== index) {
  //       current = current.next
  //       count++
  //     }
  //   } else {
  //     count = this.length - 1
  //     current = this.tail
  //     while (count !== index) {
  //       current = current.prev
  //       count--
  //     }
  //   }
  //   return current
  // }

  /**
   * Setting
   * 
   * - Create a variable which is the result of the get method at the index passed to the function
   *      - If the get method returns a valid node, set the value of that node to be the value passed to the function
   *      - Return true
   * - Otherwise, return false
  */
  set(index, val) {
    let targetPosition = this.get(index)
    if (targetPosition) {
      targetPosition.val = val
      return true
    }
    return false
  }

  /**
   * Insert
   * 
   * - If the index is less than zero or greater than or equal to the length, return false
   * - If the index is 0, unshift
   * - If the index is the same as the length, push
   * - Use the get method to access the index - 1
   * - Set the next and prev properties on the correct nodes to link everything together
   * - Increment the length
   * - Return true
  */
  insert(val, index) {
    if (index < 0 || index > this.length) return false
    if (index === 0) this.unshift(val)
    if (index === this.length - 1) this.push(val)

    let node = new Node(val)
    let targetPrev = this.get(index - 1)
    if (targetPrev) {
      node.prev = targetPrev
      node.next = targetPrev.next
      targetPrev.next = node
    }

    this.length++
    return true
  }

  // Provided solution
  // inser(index, val) {
  //   if (index < 0 || index > this.length) return false
  //   if (index === 0) this.unshift(val)
  //   if (index === this.length - 1) this.push(val)

  //   var newNode = new Node(val)
  //   var beforeNode = this.get(index - 1)
  //   var afterNode = beforeNode.next

  //   beforeNode.next = newNode
  //   newNode.prev = beforeNode
  //   newNode.next = afterNode
  //   afterNode.prev = newNode
  //   this.length++
  //   return true
  // }

  /**
   * Removing
   * 
   * - If the index is less than zero or greater than or equal to the length return undefined
  */
  remove(index) {
    if (index < 0 || index > this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    let nodeToBeRemoved = this.get(index)
    let prev = nodeToBeRemoved.prev
    let next = nodeToBeRemoved.next
    prev.next = next
    next.prev = prev
    nodeToBeRemoved.next = null
    nodeToBeRemoved.prev = null
    this.length--

    return nodeToBeRemoved
  }

  // Reversing
  reverse() {
    let current = this.head
    this.head = this.tail
    this.tail = this.head

    let next = null
    let counter = 0

    while (counter <= this.length) {
      next = current.next
      current.next = current.prev
      current.prev = current.next
      current = next
      counter++
    }

    return this
  }
}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
// console.log(list.pop())
// console.log(list.get(2))
list.insert(4, 1)
console.log(list.get(1))
console.log(list, 'list')