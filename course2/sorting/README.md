# Elementary Sorting Algorithms
Sorting is the process of rearranging the items in a collection (e.g. arrays) so that the items are in some kind of order.

## Bubble sort
A sorting algorithm where the largest values bubble up to the top.

**Average Time Complexity**: **O(n<sup>2</sup>)**  
**Best Time Complexity**: **O(n)**  
**Worst Time Complexity**: **O(n<sup>2</sup>)**

**Space Complexity**: **O(1)**

## Selection sort
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

**Time Complexity**: **O(n<sup>2</sup>)**  
**Best Time Complexity**: **O(n)**  
**Worst Time Complexity**: **O(n<sup>2</sup>)**

**Space Complexity**: **O(1)**

## Insertion sort
Builds up the sort by gradually creating a larger left half which is always sorted.

**Time Complexity**: **O(n<sup>2</sup>)** (because it compares every elements in two arrays with n elementsq)

**Time Complexity**: **O(n<sup>2</sup>)**  
**Best Time Complexity**: **O(n<sup>2</sup>)**  
**Worst Time Complexity**: **O(n<sup>2</sup>)**

## Merge sort
It exploits the fact that arrays of 0 or 1 element are always sorted. It works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

**Time Complexity**: **O(n log n)**  
**Best Time Complexity**: **O(n log n)**  
**Worst Time Complexity**: **O(n log n)**  
**Space Complexity**: **O(n)**

### Flow
1. Split until it finds sorted arrays (arrays with one element or empty arrays)
- [8,3,5,4,7,6,1,2]
- [8,3,5,4] [7,6,1,2]
- [8,3] [5,4] [7,6] [1,2]
- [8] [3] [5] [4] [7] [6] [1] [2]
2. Sort and merge the arrays 
[3,8] [4,5] [6,7] [1,2]
[3,4,5,8] [1,2,6,7]
[1,2,3,4,5,6,7,8]