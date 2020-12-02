/**
 * Big O of Arrays
 * - It has specific order
 * - Fast access, insertion and removal
 * 
 * Insertion = It depends
 * Removal = It depends
 *    When adding/removing at the beginning of an array,
 *      it can be heavy because it has to perform shift/unshift to reindex the array.
 * Searching = O(n)
 * Access = O(1)
 * 
 * Big O of Array Methods
 * .push = O(1)
 * .pop = O(1)
 * .shift = O(n)
 * .unshift = O(n)
 * .concat = O(n)
 * .sllice = O(n)
 * .splice = O(n)
 * .sort = O(n * log n)
 * forEach/map/filter/reduce/etc. = O(n)
*/

// Accessing by index is constant no matter how long the array is
let names = ["Michael", "Melissa", "Andrea"]

// Constant insersion and removal
names.push("Emily")
names.pop()

// O(n) insersion and removal
names.shift() // Removing the element at the beginning
names.unshift("John") // Inserting at the beginning