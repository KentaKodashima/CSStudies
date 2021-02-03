const Node = require('./Node')

class Tree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
    } else {
      let current = this.root
      while (true) {
        if (newNode.value > current.value) {
          if (!current.right) {
            current.right = newNode
            break
          } else {
            current = current.right
          }
        } else {
          if (!current.left) {
            current.left = newNode
            break
          } else {
            current = current.left
          }
        }
      }
    }

    return this
  }

  find(value) {
    if (!this.root) {
      return undefined
    } else {
      let current = this.root
      while (true) {
        if (!current) return undefined
        if (current.value === value) return current
        if (current.value > value) {
          current = current.left
        } else {
          current = current.right
        }
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false
    } else {
      let current = this.root
      while (true) {
        if (!current) return false
        if (current.value === value) return true
        if (current.value > value) {
          current = current.left
        } else {
          current = current.right
        }
      }
    }
  }

  /**
   * - Create a queue and a variable to store the values of nodes visited
   * - Place the root node in the queue
   * - Loop as long as there is anything in the queue
   *      - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
   *      - If there is a left property on the node dequeued - add it to the queue
   *      - If there is a right property on the node dequeued - add it to the queue
   * - Return the variable that stores the values
  */
  breathFirstSearch() {
    let nodesQueue = []
    let visitedNodes = []
  
    nodesQueue.push(this.root)

    while (nodesQueue.length !== 0) {
      const dequeuedNode = nodesQueue.shift()
      if (dequeuedNode.left) nodesQueue.push(dequeuedNode.left)
      if (dequeuedNode.right) nodesQueue.push(dequeuedNode.right)
      visitedNodes.push(dequeuedNode)
    }

    return visitedNodes
  }

  /**
   * DFS - Pre Order
   * 
   * - Create a variable to store the values of nodes visited
   * - Store the root of the BST in a variable called current
   * - Write a helper function which accepts a node
   *      - Push the value of the node to the variable that stores the values
   *      - If the node has a left property, call the helper function with the left property on the node
   *      - If the node has a right property, call the helper function with the right property on the node
   * - Invoke the helper function with the current variable
   * - Return the array of values
  */
  depthFirstSearchPreOrder() {
    let visitedNodes = []
    let current = this.root

    function traverse(node) {
      visitedNodes.push(node)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(current)

    return visitedNodes
  }

  /**
   * DFS - Post Order
   * 
   * - Create a variable to store the values of nodes visited
   * - Store the root of the BST in a variable called current
   * - Write a helper function which accepts a node
   *      - If the node has a left property, call the helper function with the left property on the node
   *      - If the node has a right property, call the helper function with the right property on the node
   *      - Push the value of the node to the variable that stores the values
   * - Invoke the helper function with the current variable
   * - Return the array of values
  */
  depthFirstSearchPostOrder() {
    let visitedNodes = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      visitedNodes.push(node)
    }

    traverse(current)

    return visitedNodes
  }

  /**
   * DFS - In Order
   * 
   * - Create a variable to store the values of nodes visited
   * - Store the root of the BST in a variable called current
   * - Write a helper function which accepts a node
   *      - If the node has a left property, call the helper function with the left property on the node
   *      - Push the value of the node to the variable that stores the values
   *      - If the node has a right property, call the helper function with the right property on the node
   * - Invoke the helper function with the current variable
   * - Return the array of values
  */
  depthFirstSearchInOrder() {
    let visitedNodes = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      visitedNodes.push(node)
      if (node.right) traverse(node.right)
    }

    traverse(current)

    return visitedNodes
  }
}

let tree = new Tree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
// console.log(tree.breathFirstSearch())
// console.log(tree.depthFirstSearchPreOrder())
console.log(tree.depthFirstSearchPostOrder())