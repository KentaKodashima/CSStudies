// This would be an undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  /**
   * Adding a vertex
   * 
   * - Write a method called addVertex, which accepts a name of a vertex
   * - It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
   *      e.g. g.addVertex('Tokyo') -> { 'Tokyo': [] }
  */
  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return undefined
    this.adjacencyList[vertex] = []
  }

  /**
   * Adding an edge
   * 
   * - This function should accept two vertices
   * - The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
   * - The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
   * - No need to handle errors/invalid vertices
   * 
   * e.g.
   *    { 'Tokyo': [], 'Dallas': [] }
   *    g.addEdge('Tokyo', 'Dallas') -> { 'Tokyo': ['Dallas'], 'Dallas': ['Tokyo'] }
  */
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  /**
   * Removing an edge
   * 
   * - This function should accept two vertices
   * - The function should reassign the key of vertex1 to be an array that does not contain vertex2
   * - The function should reassign the key of vertex2 to be an array that does not contain vertex1
   * - No need to handle errors/invalid vertices
   * 
   * e.g.
   *    { 'Tokyo': ['Dallas'], 'Dallas': ['Tokyo'] }
   *    g.removeEdge('Tokyo', 'Dallas') -> { 'Tokyo': [], 'Dallas': [] }
  */
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((item) => item !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((item) => item !== vertex1)
  }

  /**
   * Removing a vertex
   * 
   * - The function should accept a vertex to remove
   * - The function should loop as long as there are any other vertices in the adjacency list for that vertex
   * - Inside of the loop, call our removeEdge function wiht the vertex it is removing and any values in the adjacency list for that vertex
   * - Delete the key in the adjacency list for that vertex
  */
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      this.removeEdge(vertex, this.adjacencyList[vertex][0])
    }
    delete this.adjacencyList[vertex]
  }

  // Provided solution
  // removeVertex(vertex){
  //   while(this.adjacencyList[vertex].length){
  //     const adjacentVertex = this.adjacencyList[vertex].pop();
  //     this.removeEdge(vertex, adjacentVertex);
  //   }
  //   delete this.adjacencyList[vertex]
  // }

  /**
   * Depth first search (recursive)
   * 
   * - The functio should accept a starting node
   * - Create a list to store the end result to be returned at the very end
   * - Create an object to store visited vertices
   * - Create a helper function which accepts a vertex
   *      - The helper function should return early if the vertex is empty
   *      - The helper function should place the vertex that it accepts into the visited object and push that vertex into the result array
   *      - Loop over all of the values in the adjacency list for that vertex
   *      - If any of those values have not been visited, recursively invoke the helper function with that vertex
   * - Invoke the helper function with the starting vertex
   * - Return the result array
  */
  depthFirstRecursive(start) {
    let result = []
    let visited = {}

    const helper = (vertex) => {
      if (!vertex) return null

      visited[vertex] = 1
      result.push(vertex)

      for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        if (!visited[this.adjacencyList[vertex][i]]) {
          helper(this.adjacencyList[vertex][i])
        }
      }
    }

    helper(start)

    return result
  }

  // Provided solution
  // depthFirstRecursive(start){
  //   const result = [];
  //   const visited = {};
  //   const adjacencyList = this.adjacencyList;

  //   (function dfs(vertex){
  //     if(!vertex) return null;
  //     visited[vertex] = true;
  //     result.push(vertex);
  //     adjacencyList[vertex].forEach(neighbor => {
  //       if(!visited[neighbor]){
  //         return dfs(neighbor)
  //       }
  //     });
  //   })(start);

  //   return result;
  // }

  /**
   * Depth first search (iterative)
   * 
   * - The function should accept a starting node
   * - Create a stack to help use keep track of vertices (use a list/array)
   * - Create a list to store the end result to be returned at the very end
   * - Create an object to store visited vertices
   * - Add the starting vertex to the stack, and mark it visited
   * - While the stack has something in it
   *      - Pop the next vertex from the stack
   *      - If that vertex hasn't been visited yet:
   *          - Mark it as visited
   *          - Add it to the result list
   *          - Push all of its neighbors into the stack
   * - Return the result array
  */
  depthFirstIterative(start) {
    let stack = [start]
    let result = []
    let visited = {}
    let current

    visited[start] = 1

    while (stack.length) {
      current = stack.pop()
      visited[current] = 1
      result.push(popped)
      this.adjacencyList[current].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = 1
          stack.push(neighbor)
        }
      })
    }

    return result
  }

  /**
   * Breath First Search
   * - This function should accept a starting vertex
   * - Create a queue (can be an array) and place the starting vertex in it
   * - Create an array to store the nodes visited
   * - Create an object to store nodes visited
   * - Mark the starting vertex as visited
   * - Loop as long as there is anything in the queue
   * - Remove the first vertex from the queue and push it into the array that stores nodes visited
   * - Loop over each vertex in the adjacency list for the vertex you are visiting
   * - If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
   * - Return the array of visited nodes
  */
  breathFirst(start) {
    let queue = [start]
    let result = []
    let visited = {}
    let current

    visited[start] = 1

    while (queue.length) {
      current = queue.shift()
      result.push(current)
      
      this.adjacencyList[current].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = 1
          queue.push(neighbor)
        }
      })
    }

    return result
  }
}

// let g = new Graph()
// g.addVertex("Dallas")
// g.addVertex("Tokyo")
// g.addVertex("Aspen")
// g.addVertex("Los Angeles")
// g.addVertex("Hong Kong")
// g.addEdge("Dallas", "Tokyo")
// g.addEdge("Dallas", "Aspen")
// g.addEdge("Hong Kong", "Tokyo")
// g.addEdge("Hong Kong", "Dallas")
// g.addEdge("Los Angeles", "Hong Kong")
// g.addEdge("Los Angeles", "Aspen")
// console.log(g, 'its g before')
// g.removeVertex("Dallas")
// console.log(g, 'its g after')

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.depthFirstRecursive("A"))

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F