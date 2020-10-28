// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack = new Stack()
    this.queueStack = new Stack()
  }

  add(element) {
    this.stack.push(element)
  }

  remove() {
    while (this.stack.peek()) {
      const poppedValue = this.stack.pop()
      this.queueStack.push(poppedValue)
    }

    const toBePopped = this.queueStack.pop()

    while (this.queueStack.peek()) {
      const poppedValue = this.queueStack.pop()
      this.stack.push(poppedValue)
    }

    return toBePopped
  }

  peek() {
    while (this.stack.peek()) {
      const poppedValue = this.stack.pop()
      this.queueStack.push(poppedValue)
    }

    const toBePeeked = this.queueStack.peek()

    while (this.queueStack.peek()) {
      const poppedValue = this.queueStack.pop()
      this.stack.push(poppedValue)
    }

    return toBePeeked
  }
}

module.exports = Queue;
