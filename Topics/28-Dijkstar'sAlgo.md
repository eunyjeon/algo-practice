# Dijkstra's Algorithm

Uses Priority Queue / Binary Heaps and Graph

## 233. Dijkstra's Algorithm

- Dijkstra's Algorithm
  : Finds **the shortes path** between two vertices on a graph with **weighted edges**
- "What is the fastest way from A to B?"
- Usage
  - GPS - finding fasterst route
  - Network Routing - finds open shortest path for data
  - Biology - used to model the spread of viruses among humans
  - Airline tickets - finding chapest route to your destination
  - And more

## 234. Writing a Weighted Graph

```js
    class WeightedGraph {
      constructor() {
        this.adjacencyList = {}
      }
      addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
      }
      addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
      }
    }
```

- `this.adjacencyList` will look something like:
    {
      "A": [{node: "B", weight: 10}, {node: "C", weight: 20}],
      "B": [{node: "A", weight: 10}],
      "C": [{node: "A", weight: 20}],
    }

## 235. Walking through the Algorighm

- The approach
    1. Every time we look to visit a new node, we **pick the node with the smallest known distance to visit first**.
    2. Once we've moved to the node we're going to visit, we look at each of its neighbors.
    3. For each neighboring node, we calulate the distance by summing the total edges that lead to the node we're checking from the starting node.
    4. If the **new total** distance to a node is less than the previous total, we store the new shorter distance for that node.

![Dijkstra-steps](https://raw.github.com/eunyjeon/algorithms/main/images/dijkstra_explained.png)

## 236. Introducing Our Simple Priority Queue

```js
    class PriorityQueue {
      constructor(){
        this.values = []
      }
      enqueue(val, priority) {
        this.values.push({val, priority})
        this.sort()
      }
      dequeue() {
        return this.values.shift()
      }
      sort() {
        this.values.sort((a,b) => a.priority - b.priority) //ascending order
      }
    }
```

- The above code is simple not optimal. It's better to use Binary Heap.

## 237. Dijkstra's Pseudocode

1. This function should accept a starting and ending vertex
2. Create an object called distances and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
3. After setting avalue in the distances object, add and initialize each vertex with a priority of  `Infinity` to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
4. Create another object called `previous` and set each key to be very vertex in the adjacency list with a value of null (previous stores the previous node of the current node - e.g., when A -> E through D gives you the shorter path/lower total priority, D is `previous` of E)
5. Start looping as long as there is anything in the priority queue
    1. Dequeue a vertex from the priority queue
    2. If that vertex is the same as the ending vertex - we are done
    3. Otherwise loop through each value in the adjacency list at that vertex
        1. Calulate the distance to that vertex from the starting vertex
        2. If the distance is less than what is currently stored in our distances object
            1. Update the distances object with new lower distance
            2. Update the previous object to contain that vertex
            3. Enqueue the vertex with the total distance from the start node

## 238. Implementing Dijkstra's Algo

```js
// this is a naive version of Priority Queue.
    class PriorityQueue {
      constructor(){
        this.values = []
      }
      enqueue(val, priority) {...}
      dequeue() {...}
      sort() {...} //called within enqueue method
    }

    class WeightedGraph {
      constructor() {
        this.adjacencyList = {}
      }
      addVertex(vertex) {...}
      addEdge(vertex1, vertex2, weight) {...}
      Dijkstra(start, finish) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {} // stores where the node right before the current node giving the shortest path
        let path = [] // to return at end
        let smallest

        // build up initial state
        for (let vertex in this.adjacencyList) {
          if(vertex === start) {
            distances[vertex] = 0
            nodes.enqueue(vertex, 0)
          } else {
            distances[vertex] = Infinity
            nodes.enqueue(vertex, Infinity)
          }
          previous[vertex] = null
        }

        // as long as there is something to visit
        while(nodes.values.length) {
          smallest = nodes.dequeue().val
          if (smallest === finish) {
            // WE ARE DONE
            // BUILD UP PATH TO RETURN AT THE END
            while(previous[smallest]) {
              path.push[smallest]
              smallest = previous[smallest]
            }
            // break out of the while loop if finding finish
            break;
          }
          if(smallest || distances[smallest] != Infinity) {
            for (let neighbor in this.adjacencyList[smallest]) {
              // find neighboring node
              let nextNode = this.adjacencyLsit[smallest][neighbor]
              // calculate new distance to neightboring node
              let candidate = distances[smallest] + nextNode.weight
              let nextNeighbor = nextNode.node
              if (candidate < distances[nextNeightbor]) {
                // updating new smallest distance to neighbor
                distances[nextBeighbor] = candidate
                // up;dating previous - How we got to neighbor
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

    let graph = new WeightedGraph()
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")
    graph.addVertex("D")
    graph.addVertex("E")
    graph.addVertex("F")

    graph.addEdge("A", "B", 4)
    graph.addEdge("A", "C", 2)
    graph.addEdge("B", "E", 3)
    graph.addEdge("C", "D", 2)
    graph.addEdge("C", "F", 4)
    graph.addEdge("D", "E", 3)
    graph.addEdge("D", "F", 1)
    graph.addEdge("E", "F", 1)

    graph.Dijkstra("A", "E") // return ["A", "C", "D", "F", "E"]
```
