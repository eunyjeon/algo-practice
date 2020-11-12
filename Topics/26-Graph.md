# Graph

## 207. Intro to Graphs

- Graph
  : A collection of nodes and connections between those nodes
- ***Tree vs Graph***
  - Tree is a type of a graph (with one root/entry point and parent-child relationship)
  - "A tree is an undirected graph in which any two vertices are **connected by exactly one path**. Every acyclic connected graph is a tree." (from Wikipidia Tree(graph theory) page)

## 208. Uses for Graphs

- Social networks
- Web pages: One page is linked to another
- Location / Mapping: cities are nodes
- Routing algorithms
- Visual hierarchy
- File system optimizations
- Recommendations: Suggestion lists on Netflix, Amazon, etc.
- and more

## 209. Types of Graphs

- Terminologies
  - Vertex
  - Edge
  - Directed / Undirected
    - Directed : Twitter Follower feature
    - Undirected : Facebook friend system (If I am your friend, you also can see my stuff)
  - Weighted / Unweighted
    - Weighted : Google Maps

## 210. Storing Graphs: Adjacency Matrix

For a circular graph A - B - C - D - E - F - A :

    [
      [0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 0],
      [0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0],
    ]

- To add a new vertex : add a new row and column

## 211. Storing Graphs: Adjacency List

- Can use arrays or hash tables
  - Hash tables
      1. When keys are not numeric values
      2. When there are huge gaps among keys

- Using an array for a circular graph 0 - 1 - 2 - 3 - 4 - 5 - 0 :

    [
      [1,5],
      [0,2],
      [1,3],
      [2,4],
      [3,5],
      [5,0],
    ]

- Using a hash table for the graph in 210 :

  {
    A : ['B', 'F'],
    B : ['A', 'C'],
    C : ['B', 'D'],
    D : ['C', 'E'],
    E : ['D', 'F'],
    F : ['E', 'A'],
  }

## 212. Adjacency Matrix vs. List Big O

|Adjacency List                            |Adjacency Matrix                   |
|:-----------------------------------------|:----------------------------------|
|Can take up *less space (in sparse graphs)* |Takes up more space (in sparse graphs)|
|*Faster to iterate over all edges*        |Slower to iterate over all edges |
|Can be slower to lookup a specific edge and check the existence of an edge |*Faster to lookup/query a specific edge* |

`|V|` - Number of vertices && `|E|` - number of edges
|Operation     |Adjacency List         |Adjacency Matrix         |
|:-------------|:----------------------|:------------------------|
|Add Vertex    |O(1)                   |O(|V^2|) to create a new row and column
|Add Edge      |O(1)                   |O(1)
|Remove Vertex |O(|V| + |E|) to delete edges connected to the vertex | O(|V ^ 2|)
|Remove Edge   |O(|E|)                 |O(1)
|Query (lookup a specific edge) | O(|V| + |E|) | O(1)
|Storage| O(|V| + |E|)                 |O(|V^2|)

- Most data in the real-world tends to lend itself to sparser and/or larger graphs -> Adjacency List

## 213. Add Vertex (Adjacency List)

1. Write a method called addVertex, which accepts a name of a vertex
2. It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array. E.g., `g.addVertex("Seoul") => {"Seoul": []}`

    ```js
      class Graph {
        constructor() {
          this.adjacencyList = {}
        }
        addVertex(vertex) {
          // only add a vertex when ...
          if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
        }
      }
    ```

## 215. Add Edge

1. This function should accept two vertices, vertex1 and vertex2
2. The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
3. The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
4. Don't worry about handling errors/invalid vertices

    ```js
      class Graph {
        constructor() {
          this.adjacencyList = {}
        }
        addVertex(){...}
        addEdge(v1, v2) {
          this.adjacencyList[v1].push(v2)
          this.adjacencyList[v2].push(v1)
        }
      }
    ```

## 217. Remove Edge

1. This function should accept two vertices, vertex1 and vertex2
2. The function should reassign the key of vertex1 to be an array that doesn't contain vertex2
3. The function should reassign the key of vertex2 to be an array that doesn't contain vertex1
4. Don't worry about handling errors/invalid vertices

    ```js
      class Graph {
        constructor() {
          this.adjacencyList = {}
        }
        addVertex(vertex){...}
        addEdge(v1, v2) {...}
        removeEdge(v1, v2) {
          this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
          this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
        }
      }
    ```

## 218. Remove Vertex

1. This function should accept a vertex to remove
2. The function should loop as long as there are any other vertices in the adjacency list for that vertex
3. Inside the loop, *call our removeEdge function* with the vertex we are removing and any values in the adjacency list for that vertex
4. Delete the key in the adjacency list for that vertex

```js
      class Graph {
        constructor() {
          this.adjacencyList = {}
        }
        addVertex(vertex){...}
        addEdge(v1, v2) {...}
        removeEdge(v1, v2) {...}
        removeVertex(vertex) {
          while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList(vertex).pop()
            this.removeEdge(vertex, adjacentVertex)
          }
          delete this.adjacencyList[vertex]
        }
      }
```
