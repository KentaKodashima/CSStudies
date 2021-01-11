# Recursion
It is just a process that calls itself. It invokes the same function with a different input until it reachs your base case. It should have a `base case` to determine when the recursion ends.

**Essential parts of a recursive function**
- Base case
- Different input

## Why Use Recursion?
It's commonly used and it can be a cleaner alternative to iteration.

e.g.
 - JSON.parse / JSON.stringify
 - document.getElementById and DOM traversal algorithms
 - Object traversal
 - In more complex data structures

## The Call Stack
 - A stack data structure
 - Any time a function is invoked, it is placed on the top of the call stack (push)
 - When the function hits the return keyword or when the function ends, the compiler will remove it from the top (pop)

## Common pitfalls with recursive solutions
 - No base case
 - Forgetting to return or returning the wrong thing
 - Stack overflow (too many functions are trying to be called / the recursion's not stopping)

## Helper method recursion
Reffering to recursive functions that have a helper method inside of them. The helper method calls itself recursively.

## PUre recurssion tips
- For arrays, use methods like `slice()`, the spread operator and `concat()` that make copies of arrays so it doesn't mutate the original arrays
- Strings are immutable so you will need to use methods like `slice()`, `substr()` or `substring()` to make copies of strings
- To make copies of objects, use `Object.assign()` or the spread operator