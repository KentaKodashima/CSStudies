const PriorityQueueNode = require('./PriorityQueueNode')

/**
 * Priority queue
 * 
 * - Write a min binary heap - lower number means higher priority
 * - Each node has a value and a priority. Use the priority to build the heap
 * - Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
 * - Dequeue method removes root element, returns it, and rearranges heap using priority
*/
class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(value, priority) {
    const bubbleUp = () => {
      let indexOfTheInsertedValue = this.values.length - 1
      let parentIndex = Math.floor((indexOfTheInsertedValue - 1) / 2)

      while (parentIndex >= 0 && this.values[indexOfTheInsertedValue].priority < this.values[parentIndex].priority) {
        let temp = this.values[parentIndex]
        this.values[parentIndex] = this.values[indexOfTheInsertedValue]
        this.values[indexOfTheInsertedValue] = temp

        indexOfTheInsertedValue = parentIndex
        parentIndex = Math.floor((indexOfTheInsertedValue - 1) / 2)
      }
    }

    const newNode = new PriorityQueueNode(value, priority)
    this.values.push(newNode)
    bubbleUp()
  }

  dequeue() {
    let temp = this.values[0]
    this.values[0] = this.values[this.values.length - 1]
    this.values[this.values.length - 1] = temp
    const removedRoot = this.values.pop()

    let parentIndex = 0
    let leftChildIndex = 2 * parentIndex + 1
    let rightChildIndex = 2 * parentIndex + 2

    while (true) {
      const childIndex = this.values[leftChildIndex].priority < this.values[rightChildIndex].priority ? leftChildIndex : rightChildIndex
      if (this.values[parentIndex].priority > this.values[childIndex].priority) {
        let temp = this.values[parentIndex]
        this.values[parentIndex] = this.values[childIndex]
        this.values[childIndex] = temp
        parentIndex = childIndex
        leftChildIndex = 2 * parentIndex + 1
        rightChildIndex = 2 * parentIndex + 2
      } else {
        break
      }
    }

    return removedRoot
  }
}

const queue = new PriorityQueue()
queue.enqueue('cold', 5)
queue.enqueue('injured', 1)
queue.enqueue('fever', 4)
queue.enqueue('broken arm', 2)
queue.enqueue('glass injury', 3)
console.log(queue, 'list')