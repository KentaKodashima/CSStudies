# Searching Algorithms

## Linear Search
The method to check every single element in an array until it finds a match. The time complexity is usually `O(n)` because it uses loop.

e.g.:
- indexOf
- includes
- find
- findIndex

**Time Complexity**: `O(n)` (`O(1)` in best cases)

## Binary Search
Binary search is a much faster form of search. Rater than eliminating one element, it eliminates half of the remaining elements at a time. However, binary search only works on **sorted arrays**.

**Time Complexity**: `O(log n)` (`O(1)` in best cases)
It's O(log n) because doubling the number of elements that the operation is iterating over does not double the amount of work.

e.g:
- Searching for 13 from the array of 16 elements
[2,4,5,9,11,14,15,19,21,25,28,30,50,52,60,63]
[2,4,5,9,11,14,15]
[11,14,15]
[11]

4 steps total

- Searching for 32 from the array of 32 elements
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]
[17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]
[25,26,27,28,29,30,32,35]
[29,30,32,35]
[32,35]

5 steps total