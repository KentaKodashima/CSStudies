# Dynamic Programming

## What is it?
A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

## Overlapping subproblems
A problem is said to haave overlapping subproblems if it can be broken down into subproblems which are reused several times.

e.g. Fibonnaci numbers

## Optimal substructure
A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

e.g. Fibonnaci numbers, Finding the shortest path in a graph

## Memoization
Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

## Tabulation
Storing the result of a previous result in a "table" (usually an array), then usually iterate through the "table". Better space complexity can be achieved using tabulation.