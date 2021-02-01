const Node = require('./Node')

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  /**
   * Inserting
   * 
   * - Create a new node
   *    - Starting at the root
   *        - Check if there is a root
   *            - If not, the root now becomes that new node
   *        - If there is a root, chekc if the value of the new node is greater than or less than the value of the root
   *            - If it is greater
   *                - Check to see if there is a node to the right
   *                    - If there is, move to that node and repeat these steps
   *                    - If there is not, add that node as the right property
   *            - If it is less
   *                - Check to see if there is a node to the left
   *                    - If there is, move to that node and repeat these steps
   *                    - If there is not, add that node as the left property
   * - Return the tree
  */
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

  // Provided solution
  // insert(value) {
  //   var newNode = new Node(value);
  //   if(this.root === null){
  //     this.root = newNode;
  //     return this;
  //   }
  //   var current = this.root;
  //   while(true) {
  //     if(value === current.value) return undefined;
  //     if(value < current.value){
  //       if(current.left === null){
  //         current.left = newNode;
  //         return this;
  //       }
  //       current = current.left;
  //     } else {
  //       if(current.right === null){
  //         current.right = newNode;
  //         return this;
  //       } 
  //       current = current.right;
  //     }
  //   }
  // }

  /**
   * Finding
   * 
   * - Starting at the root
   *      - Check if there is a root
   *          - If not, searching is done
   *      - If there is a root, check if the value of the node is the value we are looking for
   *          If it's found, searching is done
   *      - If not, check to see if the value is greater than or less than the value of the root
   *      - If it is greater
   *            - Check to see if there is a node to the right
   *                - If there is, move to that node and repeat these steps
   *                - If there is not, searching is done
   *      - If it is less
   *            - Check to see if there is a node to the left
   *                - If there is, move to that node and repeat these steps
   *                - If there is not, searching is done
   * 
  */
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

  // Provided solution
  // find(value){
  //   if(this.root === null) return false;
  //   var current = this.root, found = false;
  //   while(current && !found){
  //     if(value < current.value){
  //       current = current.left;
  //     } else if(value > current.value){
  //       current = current.right;
  //     } else {
  //       found = true;
  //     }
  //   }
  //   if(!found) return undefined;
  //   return current;
  // }

  // contains(value){
  //   if(this.root === null) return false;
  //   var current = this.root,
  //     found = false;
  //   while(current && !found){
  //     if(value < current.value){
  //       current = current.left;
  //     } else if(value > current.value){
  //       current = current.right;
  //     } else {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
}

let bst = new BinarySearchTree()
console.log(bst.insert(10))
console.log(bst.insert(3))
console.log(bst.insert(13))
console.log(bst.insert(15))
console.log(bst.find(3))
console.log(bst.find(16))