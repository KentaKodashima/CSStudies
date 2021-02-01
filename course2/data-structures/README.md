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

## Doubly Linked List
Doubly linked lists are almost identical to singly linked lists. However, every node in doubly linked lists has another pointer to the previous node. Therefore, finding nodes can be done in half time of singly linked lists. However, they take up more memory considering the extra pointer.

### Time complexity
- Insertion: O(1)
- Removal: O(1)
- Searching: O(n)
- Access: O(n)

## Stack
Stack is a FIFO data structure. The last element added to the stack will be the first element removed from the stack.

It can be implemented easily using an array (push/pop). However, a stack doesn't need to have indices. In this case, implementing a **linked list** with shift and unshift can be more efficient.

### Use cases
- Managing function invocations
- Undo / Redo actions (like in Photoshop)
- Routing (the history object)

### Time complexity
- Insertion: O(1)
- Removal: O(1)
- Searching: O(n)
- Access: O(n)

## Queue
Queue is a FIFO data structure. The first element added to the queue will be the first element removed from the queue.

Just like stack, it can be implemented easily using an array (push/shift). However, a queue doesn't need to have indices. In this case, implementing a **linked list** with push and shift can be more efficient.

### Use cases
- Background tasks
- Uploading resources
- Print queue
- Task processing
- Download queue (the completion order might be different)

### Time complexity
- Insertion: O(1)
- Removal: O(1)
- Searching: O(n)
- Access: O(n)