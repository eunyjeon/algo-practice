# Tree Traversal

TODO: 175 - 180 haven't taken yet

This is for any generic tree. (Not specific to BST)

## 172. Intro to Tree Traversal

## 173. BFS Intro

### Steps - Iteratively

- Create a **queue** (this can be an array) and a vaiable to store the values of nodes **visited**
- Place the root in the queue
- Loop as long as there is anything inte queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - if there is a left property/child node on the node dequeued - add it to the queue
  - If there is a right property/child node on the node dequeued - add it to the queue
- Return the variable that stores values

## 174. BFS Solution

```js
function bfs () {
  var data = [], // for visited nodes
      queue = [],
      node = this.root;
  queue.push(node);

  while(queue.length) {
    node = queue.shift();
    data.push(node.value);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  return data;
}
```

## 175. DFS PreOrder Intro

## 176. DFS PreOrder Solution

## 177. DFS PostOrder Intro

## 178. DFS PostOrder Solution

## 179. DFS InOrder Intro

## 180. DFS InOrder Solution

## 181 When to Use BFS and DFS

It depends on the shape of a tree

- If a tree is wide (when one level has many nodes): In terms of the space complexity, DFS is better.
  - BFS has lots of nodes to keep track of (in your queue)
  - DFS less nodes to keep track of

- If a tree is long and grows deep (e.g., when each node has one child like a linked list)
  - BFS is better

- About the time, BFS and DFS are the same (linear).

### DFS - When to use InOrder, PreOrder, PostOrder

- InOrder : When a tree is a BST, it returns values in their underlying order
  - Used commonly with BST's
- PreOrder : When you want to duplicate a tree
  - Can be used to export a tree structure so that it is easily reconstructed or copied
  - Flatten/serialize a tree out into db or file, and rebuild the structure
- PostOrder : ?

### RECAP

- **Trees** are *non-linear* data structures that contain a root and child nodes
- **Binary trees** are a special case of trees, that can have values of any type, but *at most 2 children* for each parent
- **Binary Search Trees** are a more specific version of binary trees where *every node to the left of a parent is less than it's value and every node to the right is greater*
- BFS and DFS
