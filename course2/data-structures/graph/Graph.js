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
}

let g = new Graph()
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")
g.addVertex("Los Angeles")
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo")
g.addEdge("Dallas", "Aspen")
g.addEdge("Hong Kong", "Tokyo")
g.addEdge("Hong Kong", "Dallas")
g.addEdge("Los Angeles", "Hong Kong")
g.addEdge("Los Angeles", "Aspen")
console.log(g, 'its g before')
g.removeVertex("Dallas")
console.log(g, 'its g after')