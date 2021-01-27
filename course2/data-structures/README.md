# Data Structures
Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

## Singly Linked List
A data structure that contains a head, tail and length property. Linked lists consist of nodes, and each node has a value and a pointer to another node or null.

### Comparisons with Arrays
#### Lists
- Do not have indices
- Connected via nodes with a next pointer
- Random access is not allowed

#### Arrays
- Indexed in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

### Time complexity
- Insertion: O(1)
- Removal: O(1) or O(n)
- Searching: O(n)
- Access: O(n)