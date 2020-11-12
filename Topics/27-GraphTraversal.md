# Graph Traversal

## 222. Intro to Graph Traversal

- Visiting / Updating / Checking each vertex in a graph
- We need to specify a starting point because there isn't THE starting point in graph
- Have to remember visited vertices

- Graph Traversal Uses
  - Peer to peer networking
  - Web crawlers
  - Finding "closest" matches/recommendations
  - Shortest path problems
    - GPS Navigation
    - Solving mazes
    - AI (shortest path to win the game)

## 223. Depth first Graph Traversal

- Explore as far as possible down one brach before "backtracking"
- Important to remeber nodes we already visited

## 224. DFS Recursive Traversal

    ```
    DFT_recursive (vertex) :
      if vertex is empty
        return (this is base case)
      add vertex to results list
      mark vertex as visited
      for each neighbor in vertex's neighbors:
        if neighbor is not visited:
          recursively call DFS_recursive on neighbor
    ```

### Steps - Recursive

1. The function should accept a starting node
2. Create a list to store the end result, to bereturned at the very end
3. Create an object to store visited vertices
4. Create a *helper funciton* with accepts a vertex
    1. The helper funciton should return early if the vertex is empty
    2. The helper funciton should place the vertex it accepts into the visited object and push that vertex into the result array
    3. Loop over all of the values in the *adjacencyList* (neighbors) for that vertex
    4. If any of those values have not been visited, recursively invoke the helper function with that vertex
5. Invoke the helper function with the starting vertex
6. Return the result array

## 225. DFS Recursive Solution

    ```js
    // from the previous lecture
    class Graph {
      constructor() {
        this.adjacencyList = {}
      }
      addVertex(vertex){...}
      addEdge(v1, v2) {...}
      removeEdge(v1, v2) {...}
      removeVertex(vertex) {...}
      dft_Recursive(start) {
        let result = []
        let visited = {}
        let adjacencyList = this.adjacencyList // this context changed in dfs function so we have pass it by storing the context

        (function dfs(vertex) {
          if(!vertex) return null
          visited[vertex] = true
          result.push(vertex)
          adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) return dfs(neighbor)
          })
        })(start)

        return result
      }
    }
    ```

## 226. DFS Iterative

    ```
    DFT_iterative(Start):
    let S be a stack
    S.push(start)
    while S is not empty
      vertex = S.pop()
      if vertex is not labeled as visited:
        visit vertex (add to result list)
        label vertex as visited
        for each of vertex's neighbors, N do
          S.push(N)
    ```

### Steps - Iterative

1. The function should accept a starting node
2. Create a stack to help us keep track of vertices (use a list/array)
3. Create a list to store the end result, to be returned at the very end
4. Create an object to store visited vertices
5. Add the starting vertex to the stack, and mark it visited
6. While the stack has something in it:
    1. **Pop** the next vertex from the stack (*NOT SHIFTING!!!!*)
    2. If that vertex hasn't been visted yet:
        1. Mark it as visited
        2. Add it to the result list
        3. Push all of its neighbors into the stack
7. Return the result array

## 227. DFS Iterative Solution

    ```js
    // from the previous lecture
    class Graph {
      constructor() {
        this.adjacencyList = {}
      }
      addVertex(vertex){...}
      addEdge(v1, v2) {...}
      removeEdge(v1, v2) {...}
      removeVertex(vertex) {...}
      dft_Recursive(start) {}
      dft_Iterative(start) {
        let stack = [start]
        let result = []
        let visited = {}
        let currentVertex

        visited[start] = true

        while(stack.length) {
          currentVertex = stack.pop()
          result.push(currentVertex)

          this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighber]) {
              visited[neighber] = true
              stack.push(neighbor)
            }
          })
        }
        return result
      }
    }
    ```

## 228. Breadth First Graph Traversal

- Visit neighbors at current depth first

### Steps - BFT

1. The function should accept a starting vertex
2. Create a **queue** and place the starting vertex in it
3. Create a list to store the end result, to be returned at the very end
4. Create an object to store visited vertices
5. Mark the starting point as visited
6. While the queue has something in it:
    1. **Shift** the first vertex from the queue and push it into the array that stores nodes visited
    2. Loop over each vertex in the adjacencyList for the vertex you are visiting
    3. If it is not inside the visited object, mark it as visited and enque that vertex
7. Return the result array

## 230. BFS Solution

    ```js
    // from the previous lecture
    class Graph {
      constructor() {
        this.adjacencyList = {}
      }
      addVertex(vertex){...}
      addEdge(v1, v2) {...}
      removeEdge(v1, v2) {...}
      removeVertex(vertex) {...}
      dft_Recursive(start) {...}
      dft_Iterative(start) {...}
      bft(start) {
        let queue = [start]
        let result = []
        let visited = {}
        let currentVertex

        visited[start] = true

        while(queue.length) {
          currentVertex = queue.shift()
          result.push(currentVertex)

          this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighber]) {
              visited[neighber] = true
              stack.push(neighbor)
            }
          })
        }
        return result
      }
    }
    ```
