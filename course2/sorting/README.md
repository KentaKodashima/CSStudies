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

**Average Time Complexity**: **O(n<sup>2</sup>)**  
**Best Time Complexity**: **O(n)**  
**Worst Time Complexity**: **O(n<sup>2</sup>)**
**Space Complexity**: **O(1)**

## Insertion sort
Builds up the sort by gradually creating a larger left half which is always sorted.

**Average Time Complexity**: **O(n<sup>2</sup>)**  
**Best Time Complexity**: **O(n<sup>2</sup>)**  
**Worst Time Complexity**: **O(n<sup>2</sup>)**
**Space Complexity**: **O(1)**

## Merge sort
It exploits the fact that arrays of 0 or 1 element are always sorted. It works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

**Average Time Complexity**: **O(n log n)**  
**Best Time Complexity**: **O(n log n)**  
**Worst Time Complexity**: **O(n log n)**  
**Space Complexity**: **O(n)**

**log is a short for logarithm**
(https://en.wikipedia.org/wiki/Logarithm#:~:text=In%20mathematics%2C%20the%20logarithm%20is,to%20produce%20that%20number%20x.)[Logarithm]

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

## Quick sort
Like merge sort, it exploits the fact that arrays of 0 or 1 element are always sorted. It works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array. Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

### Flow
[5,2,1,8,4,7,6,3] 5 becomes pivot
[3,2,1,4,5,7,6,8] 5 is in the appropriate spot
[3,1,2,4] [7,6,8] 3 and 7 become pivot
[1,2,3,4] [6,7,8]

**Average Time Complexity**: **O(n log n)**  
**Best Time Complexity**: **O(n log n)**  
**Worst Time Complexity**: **O(n<sup>2</sup>)**  
**Space Complexity**: **O(log n)**

## Radix sort
Radix sort is a special sorting algorithm that works on lists of numbers. It never makes comparisons between elements. Instead, it exploits the fact that information about the size of a number is encoded in the number of digits. More digits means a bigger number.

### Flow
[1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29] Base
[902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29] Sorted based on the last digit
[902, 4, 7, 408, 29, 9637, 1556, 2556, 8157, 4386, 86, 593] Sorted based on the second digit from the last
[4, 7, 29, 86, 8157, 4386, 408, 1556, 3556, 593, 9637, 902] Sorted based on the third digit from the last
[4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637] Sorted based on the fourth digit from the last