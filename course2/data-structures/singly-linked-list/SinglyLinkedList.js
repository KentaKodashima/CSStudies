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
}
let list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
console.log(list.pop())
console.log(list)

let list2 =  new SinglyLinkedList()
list2.push(1)
console.log(list2.pop())
console.log(list2)

let list3 = new SinglyLinkedList()
list3.push(1)
list3.push(2)
console.log(list3.pop())
console.log(list3)