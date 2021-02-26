/**
 * The Approach
 * 
 * 1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
 * 2. Once we've moved to the node we're going to visit, we look at each of its neighbors
 * 3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
 * 4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node
*/
const PriorityQueue = require('./PriorityQueue')

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return undefined
    this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ vertex: vertex2, weight })
    this.adjacencyList[vertex2].push({ vertex: vertex1, weight })
  }

  /**
   * Dijkscra's Algorithm
   * 
   * - This function should accept a starting and ending vertex
   * - Create an object and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
   * - After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except for the starting vertex, which should have a priority of 0 because that's where we begin
   * - Create anoter object called previous and set each key to be every vertex in the adjacency list with a value of null
   * - Start looping as long as there is anything in the priority queue
   *      - Dequeue a vertex from the priority queue
   *      - If that vertex is the same as the ending vertex, it's done
   *      - Otherwise loop through each value in the adjacency list at that vertex
   *          - Calculate the distance to that vertex from the starting vertex
   *          - If the distance is less than what is currently stored in our distances object
   *              - update the distances object with new lower distance
   *              - update the previous object to contain that vertex
   *              - enqueue the vertex with the total distance from the start node
  */
  dijkstra(start, end) {
    let distances = {}
    let queue = new PriorityQueue()
    let previous = {}
    let path = [] // to return at the end
    let smallest

    for (smallest in this.adjacencyList) {
      if (smallest === start) {
        distances[smallest] = 0
        queue.enqueue(smallest, 0)
      } else {
        distances[smallest] = Infinity
        queue.enqueue(smallest, Infinity)
      }
      previous[smallest] = null
    }

    // as long as there is something to visit
    while (queue.values.length) {
      smallest = queue.dequeue().val
      if (smallest === end) {
        // build up path to return at the end
        while(previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor]
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node

          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }

    return path.concat(smallest).reverse()
  }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]