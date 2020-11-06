# Data Structure and Algorithms in JavaScript

## Runtime Complexity
Describes the performance of an algorithm.

### General 
- Constant time `1`:  
The algorithm will always take the same amount of time no matter how many elements are in a collection

- Logarithmic time | `log(n)`:  
Doubling the number of elements that the operation is iterating over does not double the amount of work. (e.g. **searching operations**)

  **Logarithm formula example**  
  1. log<sub>2</sub>8 = x
  2. 2<sup>x</sup> = 8
  3. x = 3

- Linear time | `n`:  
Iterating through all elements in a collection. (e.g. `for (let i = 0; i < arr.length; i++)`)

- Quasilinear time | `n * log(n)`:  
Doubling the number of elements that the operation is iterating over does not double the amount of work. (e.g. **sorting operations**)

- Quadratic time | `n ^ 2`:  
Every element in a collection has to be compared to every other element.

- Exponential time | `2 ^ n`:  
Adding single element to a collection will double the processing power

### Big 'O' Notation
Important to understand Big O Notation to decide an algorithms that is faster and less-memory intensive than other options. Since time has the following problems, comparing time isn't the best way to measure the efficiency of an algorithm.

**The problem with time**
- Different machines will record different times
- The same machine will record different times
- For fasr algorithms, speed measurements may not be precise enough

So, it's better to ***count the number of simple operations the computer has to perform***. For example, the function below has to perform 3 operation which are 1 multiplication(`*`), 1 addition(`+`), and 1 division(`/`).

```
function addUpTo(n) {
  return n * (n + 1) / 2
}
```
- `n *` : 1 multiplication
- `(n + 1)` : 1 addition
- `/ 2` : 1 division

On the other hand, the function below has to perform more operation (n times of operations) because the number of addition(`+`) and assignments(`=`) that it has to perform varies depending on the `n` argument. In addition to that, there are more operations that it has to perform.

```
function addUpTo(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}
```
- `let total = 0`  : 1 assignment
- `let i = 1` : 1 assignment
- `i++` : n additions and n assingments
- `i <= n` : n comparisons
- `total += 1` : n additions and n assignments

#### Visualizing time complexities

- O(n): Linear
- O(1): Constant
- O(n^2): Quadratic

#### Identifying runtime complexity
- Iterating with a simple for loop through a single collection -> Probably **O(n)**
- Iterating through half a collection -> **O(n)**
- Iterating through two "different" collections with separate for loops -> **o(n + m)**
- Two nested for loops iterating over the same collection -> **O(n^2)**
- Two nested for loops iterating over different collections -> **O(n*m)**
- Sorting -> **O(n*log(n))**
Searching a sorted array -> **O(log(n))**

### Space Complexicity
How much more memory is required by doubling the problem set.

### Memoization
Store the arguments of each function call along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the function again.

## Data Structures
### Queue
FIFO

### Stack
FILO

### Sorting
#### Bubble Sort
Find the largest and move it to the right place. Therefore, inner loop shrinks as it goes.

#### NOTES
- undefined vs null  
  By convention, `null` means that the value is intentionally not assigned. `undefined` means that the value is empty by accident.


### Trees
Node consists of `data` and `children[]`.

#### Operations
##### Traversal
Iterating through a tree. There are different orders of traversal.

###### Breadth-First Traversal
Starting from the top-left, then moving towards the bottom.
Add children at the end of array to check all the node on the same level first.

```
traverseBF(fn) {
  const arr = [this.root]
  
  while (arr.length) {
    const node = arr.shift()
    arr.push(...node.children)
    fn(node)
  }
}
```

###### Deapth-First Traversal
Traverse through all the children first. Then, moves towards right and does the same.

Add children at the front of array to check all the children of a node first.

```
traverseDF(fn) {
  const arr = [this.root]
  
  while (arr.length) {
    const node = arr.shift()
    arr.unshift(...node.children)
    fn(node)
  }
}
```

##### Binary Search Tree
Every node can have at most 2 children. Children's value is less than the parent on the left side and bigger on the right side.