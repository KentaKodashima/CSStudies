# Dijkstra's Algorithm

## What is it?
One of the most famous and widely used algorithmes around. It finds the shortest path between two vertices on a graph.

## Use cases
- GPS - finding the fastest route
- Networking routing - finds open the shortest path for data
- Biology - used to model the spread of viruses among humans
- Airline tickets - finding the cheapest route to your destination
- Many other uses

## Visualization

Finding the shortest path From A to E

|  Vertex  |  The shortest dist from A  |
|   ----   |  ------------------------  |
|  ~~A~~   |              0             |
|  ~~B~~   |        ~~Infinity~~ 4      |
|  ~~C~~   |        ~~Infinity~~ 2      |
|  ~~D~~   |        ~~Infinity~~ 4      |
|    E     |    ~~Infinity~~ ~~7~~ 6    |
|  ~~F~~   |        ~~Infinity~~ 5      |

```
Visited
[A, C, B, D]

Previous
{
  A: null,
  B: A,
  C: A,
  D: C,
  E: F,
  F: D
}
```