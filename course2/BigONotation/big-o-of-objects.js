/**
 * Big O of Objects
 * - Doesn't have specific order
 * - Fast access, insertion and removal
 * 
 * Insertion = O(1)
 * Removal = O(1)
 * Searching = O(n)
 * Access = O(1)
 * 
 * Big O of Obect Methods
 * .keys = O(n)
 * .values = O(n)
 * .entries = O(n)
 * .hasOwnProperty = O(1)
*/

// Insertion, removal and access is constant because objects don't have order
let instructor = {
  firstName: 'Kenta',
  isInstructor: true,
  favNums: [1,2,3,4]
}

// As the number of elements in the array grows, it has to visit more elements: O(n)
Object.keys(instructor)
Object.values(instructor)
Object.entries(instructor)

// It's constant: O(1)
Object.hasOwnProperty(instructor)