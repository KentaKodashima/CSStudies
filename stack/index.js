// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.stack = []
  }

  push(element) {
    this.stack.push(element)
  }

  pop() {
    return this.stack.pop()
  }

  peek() {
    const lastIndex = this.stack.length - 1

    if (lastIndex < 0) return null

    return this.stack[lastIndex]
  }
}

module.exports = Stack;
