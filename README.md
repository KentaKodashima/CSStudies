## Data Structure and Algorithms in JavaScript

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