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
Big O Notation is just a way to formalize fuzzy counting. It allows us to understand how the runtime of an algorithm grows as the inputs grow.

It is helpful to decide an algorithms that is faster and less-memory intensive than other options. Since time has the following problems, comparing time isn't the best way to measure the efficiency of an algorithm.


### Counting operations
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

#### Common time complexities
##### Constant O(1)
Changing the input doesn't affect the runtime. It's constant because it doesn't affect the number of operations that it has to run.

##### Linear O(n)
As `n` grows, the runtime grows.

##### O(n<sup>2</sup>)
As `n` grows, the runtime grows at the rate of `n` squared.  
e.g. Nested for loops

#### Logarithms
The logarithms of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

##### O(log n)
- log<sub>2</sub>(8) = 3 ===> 2<sup>3</sup> = 8
- log<sub>2</sub>(value) = exponent ===> 2<sup>exponent</sup> = value
**log === log<sub>2</sub>**

### Big O Shorthands
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, **the complexity is the length of the loop times the complexity of whatever happens inside of the loop**

### Space Complexity
Using big O notation, we can analize space complexity meaning how much additional memory we need to allocate in order to run the code an algorithm.

1. Most primitives (booleans, numbers, undefined, null) are constant space
2. String require O(n) space, where n is the string length
3. Reference types are generally O(n), where n is the length for arrays or the number of keys for objects

Considering the following example, it only requires constant space: O(1).

```
function sum(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}
```

- `let total = 0` : 1 space for number
- `let i = 0` : 1 space for number

However, the space needed for the following example varies depending on input: O(n) because the length of the array affects the space complexity.

```
function double(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i])
  }
  return newArr
}
```

- `let newArr = []` : n space for number
- `let i = 0` : 1 space for number


- O(n^2): Quadratic

#### Identifying runtime complexity
- Iterating with a simple for loop through a single collection -> Probably **O(n)**
- Iterating through half a collection -> **O(n)**
- Iterating through two "different" collections with separate for loops -> **o(n + m)**
- Two nested for loops iterating over the same collection -> **O(n^2)**
- Two nested for loops iterating over different collections -> **O(n*m)**
- Sorting -> **O(n*log(n))**
- Searching a sorted array -> **O(log(n))**

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