const Node = require('./Node')

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  /**
   * Enqueue
   * 
   * - This function accepts some value
   * - Create a new node using that value passed to the function
   * - If there are no nodes in the queue,
   *      set this node to be the first and last property of the queue
   * - Otherwise, set the next property on the current last to be that node,
   *      and then set the last property of the queue to be that node
  */
  enqueue(value) {
    const node = new Node(value)

    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }

    this.size++
    return
  }

  /**
   * Dequeue
   * 
   * - If there is no first property, just return null
   * - Store the first property in a variable
   * - See if the first is the same as the last (check if there is only 1 node).
   *      If so, set the first and last to be null
   * - If there is more than 1 node, set the first property to be the next property of first
   * - Decrement the size by 1
   * - Return the value of the node dequeued
  */
  dequeue() {
    if (!this.first) return null

    const nodeToBeRemoved = this.first
    if (this.first === this.last) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
      nodeToBeRemoved.next = null
    }

    this.size--
    return nodeToBeRemoved.value
  }
}