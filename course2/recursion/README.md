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