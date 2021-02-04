class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  /**
   * Inserting
   * 
   * - Push the avlue into the values property on the heap
   * - Bubble up:
   *     - Create a variable called index which is the length of the values property - 1
   *     - Create a variable called parentIndex which is the floor of (index - 1) / 2
   *     - Keep looping as longs as the values element at the parentIndex is less than the values element at the child index
   *          - Swap the value of the values element at the parentIndex with the value of the element property at the child index
   *          - Set the index to be the parentIndex, and start over 
  */
  insert(value) {
    const bubbleUp = () => {
      let indexOfTheInsertedValue = this.values.length - 1
      let parentIndex = Math.floor((indexOfTheInsertedValue - 1) / 2)

      while (this.values[indexOfTheInsertedValue] > this.values[parentIndex]) {
        let temp = this.values[parentIndex]
        this.values[parentIndex] = this.values[indexOfTheInsertedValue]
        this.values[indexOfTheInsertedValue] = temp

        indexOfTheInsertedValue = parentIndex
        parentIndex = Math.floor((indexOfTheInsertedValue - 1) / 2)
      }
    }

    this.values.push(value)
    bubbleUp()
  }

  // Provided solution
  // insert(element){
  //   this.values.push(element);
  //   this.bubbleUp();
  // }
  // bubbleUp(){
  //   let idx = this.values.length - 1;
  //   const element = this.values[idx];
  //   while(idx > 0){
  //     let parentIdx = Math.floor((idx - 1)/2);
  //     let parent = this.values[parentIdx];
  //     if(element <= parent) break;
  //     this.values[parentIdx] = element;
  //     this.values[idx] = parent;
  //     idx = parentIdx;
  //   }
  // }

  /**
   * Removing (extractMax)
   * Removing the root (max) and replacing it with the ost recently added node and adjust (sink down).
   * 
   * - Swap the first value in the values property with the last one
   * - Pop from the values property, so you can return the value at the end
   * - Have the new root "sink down" to the correct spot
   *      - Your parent index starts at 0 (the root)
   *      - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
   *      - Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
   *      - If the left or right child is greater than the element, swap
   *          - If both left and right chilren are larger, swap with the largest child
   *      - The child index you swapped to now becomes the new parent index
   *      - Keep looping and swapping until neither child is larger than the element
   * - Return the old root
  */
  extractMax() {
    // const swap = (element1, element2) => {
    //   let temp = element1
    //   element1 = element2
    //   element2 = temp
    // }
    // swap(this.values[0], this.values[this.values.length - 1])
    let temp = this.values[0]
    this.values[0] = this.values[this.values.length - 1]
    this.values[this.values.length - 1] = temp
    const removedRoot = this.values.pop()

    let parentIndex = 0
    let leftChildIndex = 2 * parentIndex + 1
    let rightChildIndex = 2 * parentIndex + 2

    while (true) {
      const childIndex = this.values[leftChildIndex] > this.values[rightChildIndex] ? leftChildIndex : rightChildIndex
      if (this.values[parentIndex] < this.values[childIndex]) {
        // swap(this.values[parentIndex], this.values[childIndex])
        let temp = this.values[parentIndex]
        this.values[parentIndex] = this.values[childIndex]
        this.values[childIndex] = temp
        parentIndex = childIndex
      } else {
        break
      }
    }

    return removedRoot
  }
}

const heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
console.log(heap, 'its heap before')
console.log('=========================================')
console.log(heap.extractMax(), 'extracted value')
console.log('=========================================')
console.log(heap, 'its heap after')