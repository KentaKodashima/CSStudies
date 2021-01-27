const Node = require('./Node')

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * Pushing
   * 
   * - This function should accept a value
   * - Create a new node using the value passed to the function
   * - If there is no head property on the list, set the head and tail to be the newly created node
   * - Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
   * - Increment the length by one
   * - Return the linked list
  */
  push(val) {
    if (!this.head) {
      const node = new Node(val)
      this.head = node
      this.tail = node
    } else {
      const node = new Node(val)
      this.tail.next = node
      this.tail = node
    }

    this.length++

    return this
  }

  /**
   * Popping
   * 
   * - If there are no nodes in the list, return undefined
   * - Loop through the list until you reach the tail
   * - Set the next property of the 2nd to last node to be null
   * - Set the tail to be the 2nd to last node
   * - Decrement the length of the list by 1
   * - Return the value of the node removed
  */
  pop() {
    if (!this.head) return undefined

    let prev = null
    let curernt = this.head
    while (curernt.next) {
      prev = curernt
      curernt = curernt.next
    }
    
    if (prev) {
      prev.next = null
      this.tail = prev
    } else {
      this.head = null
      this.tail = null
    }

    this.length--

    return curernt
  }

  // Provided pop solution
  //  pop() {
  //     if (!this.head) return undefined
  //     var curernt = this.head
  //     var newTail = curernt
  //     while (curernt.next) {
  //       newTail = curernt
  //       curernt = curernt.next
  //     }
  //     this.tail = newTail
  //     this.tail.next = null
  //     this.length--
  //     return curernt
  //   }

  /**
   * Shifting
   * 
   * - If there are no nodes, return undefined
   * - Store the current head property in a variable
   * - Set the head property to be the current head's next property
   * - Decrement the length by 1
   * - Return the value of the node removed
  */
  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = this.head.next
    this.length--
    if (!this.head) this.tail = null
    return currentHead
  }

  /**
   * Unshifting
   * 
   * - This function should accept a value
   * - Create a new node using the value passed to the function
   * - If there is no head property on the list, set the head and tail to be the newly created node
   * - Otherwise set the newly created node's next property to be the current head property on the list
   * - Set the head property on the list to be that newly created node
   * - Increment the length of the list by 1
   * - Return the linked list
  */
  unshift(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = node
      // In the provided answer
      // this.tail = this.head
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
    return this
  }

  /**
   * Getting
   * 
   * - This function should accept an index
   * - If the index is less than zero or greater than or equal to the length of the list, return null
   * - Loop through the list until you reach the index and return the node at that specific index
  */
  get(index) {
    if (index < 0 || this.length < index) return null
    let currentIndex = 0
    let returningVal = this.head
    while (currentIndex !== index) {
      returningVal = returningVal.next
      currentIndex++
    }
    return returningVal
  }

  /**
   * Setting
   * 
   * - This function should accept a value and an index
   * - Use the get method to find the specific node
   * - If the node is not found, return false
   * - If the node is found, set the value of than node to be the value passed to the function and return true
  */
  set(val, index) {
    const targetNode = this.get(index)
    if (!tawrgetNode) return false
    targetNode.val = val
    return true
  }

  /**
   * Inserting
   * 
   * - If the index is less than zero or greater than the length, return false
   * - If the index is the same as the length, push a new node to the end of the list
   * - If the index is 0, unshift a new node to the start of the list
   * - Otherwise, using the get method, access the node at the index - 1
   * - Set the next property on that node to be the new node
   * - Set the next property on the new nodde to be the previious next
   * - Increment the length
   * - Return true
  */
  insert(val, index) {
    if (index < 0 || this.length < index) return false

    const node = new Node(val)
    if (this.length === index) {
      this.push(val)
    } else if (index === 0) {
      this.unshift(val)
    } else {
      let prev = this.get(index - 1)
      let target = prev.next
      prev.next = node
      node.next = target
      this.length++
    }

    return true
  }

  // First thought before chekcing psedocode
  // insert(val, index) {
  //   if (index < 0 || this.length < index) return false
  //   const node = new Node(val)
  //   let prev = this.head
  //   let current = this.head
  //   let currentIndex = 0

  //   while (currentIndex !== index) {
  //     prev = current
  //     current = current.next
  //   }

  //   prev.next = node
  //   node.next = current
  //   this.length++

  //   return true
  // }

  // Provided solution
  // insert(index, val) {
  //   if (index < 0 || index > this.length) return false
  //   if (index === this.length) !!this.push(val)
  //   if (index === 0) return !!this.unshift(val)
  //   var newNode = new Node(val)
  //   var prev = this.get(index - 1)
  //   var temp = prev.next
  //   prev.next = newNode
  //   newNode.next = temp
  //   this.length++
  //   return true
  // }

  /**
   * Removing
   * 
   * - If the index is less than zero or greater than the length, return undefined
   * - If the index is the same as the length - 1, pop
   * - If the index is 0, shift
   * - Otherwise, using the get method, access the node at the index - 1
   * - Set the next property on that node to be the next of the next node
   * - Decrement the length
   * - Return the value of the node removed
  */
  remove(index) {
    if (index < 0 || index > this.length) return undefined
    if (index === this.length) return this.pop()
    if (index === 0) return this.shift()

    let prev = this.get(index - 1)
    let target = prev.next
    prev.next = target.next
    this.length--

    return target.val
  }

  /**
   * Reversing
   * 
   * - Swap the head and tail
   * - Create a variable called next
   * - Create a variable called prev
   * - Create a variable called node and initialize it to the head property
   * - Loop through the list
   * - Set next to be the next property on whatever node is
   * - Set the next property on the node to be whatever prev is
   * - Set prev to be the value of the node variable
   * - Set the node variable to be the value of the next variable
  */
  reverse() {
    let current = this.head
    this.head = this.tail
    this.tail = current

    let prev = null
    let next = null
    let counter = 0

    while (counter < this.length) {
      next = current.next
      current.next = prev
      prev = current
      current = next
      counter++
    }

    return this
  }

  // Provided solution
  // reverse() {
  //   var node = this.head
  //   this.head = this.tail
  //   this.tail = node
  //   var next
  //   var prev = null
  //   for (let i = 0; i < this.length; i++) {
  //     next = current.next
  //     node.next = prev
  //     prev = current
  //     node = next
  //   }
  //   return this
  // }
}

// let list = new SinglyLinkedList()
// list.push(1)
// list.push(2)
// list.push(3)
// console.log(list.pop())
// console.log(list.shift())
// console.log(list)

// let list2 =  new SinglyLinkedList()
// list2.push(1)
// console.log(list2.pop())
// console.log(list2)

// let list3 = new SinglyLinkedList()
// list3.push(1)
// list3.push(2)
// console.log(list3.pop())
// console.log(list3.shift())
// console.log(list3)

// let list4 = new SinglyLinkedList()
// list4.push(1)
// list4.push(2)
// list4.push(3)
// console.log(list4, 'iist 4')
// console.log(list4.get(0))
// console.log(list4.get(1))
// console.log(list4.insert(4,3))
// console.log(list4)
// console.log(list4.get(2))
// console.log(list4.remove(2))
// console.log(list4.get(0))
// console.log(list4.get(1))
// console.log(list4.get(2))
// console.log(list4)

let list5 = new SinglyLinkedList()
list5.push(1)
list5.push(2)
list5.push(3)
list5.push(4)
list5.push(5)
list5.reverse()
console.log(list5)
console.log(list5.get(0))
console.log(list5.get(1))
console.log(list5.get(2))
console.log(list5.get(3))
console.log(list5.get(4))