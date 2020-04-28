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
- O(n): Linear
- O(1): Constant
- O(n^2): Quadratic

#### Identifying runtime complexity
- Iterating with ta simple for loop through a single collection -> Probably **O(n)**
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