# Tree Traversal

This is for any generic tree. (Not specific to BST)

## 172. Intro to Tree Traversal

>          10
>     6         15
>   3   8         20
>
> - BFS: [10, 6, 15, 3, 8, 20]
> - DFS Pre-Order: [10, 6, 3, 8, 15, 20]
> - DFS Post-Order: [3, 8, 6, 20, 15, 10]
>     1. The root will be visited at the very end
>     2. You will visit all the child nodes first before their parent
> - DFS In-Order: [3, 6, 8, 10, 20, 15]
>     1. If the tree was BST: return the values from smallest to biggest


### RECAP

- **Trees** are *non-linear* data structures that contain a root and child nodes
- **Binary trees** are a special case of trees, that can have values of any type, but *at most 2 children* for each parent
- **Binary Search Trees** are a more specific version of binary trees where *every node to the left of a parent is less than it's value and every node to the right is greater*
- BFS and DFS

---

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

- Steps (Using recursion)
    1. Create a variable to store the values of nodes visited
    2. Store the root of the BST in a variable called current
    3. Write a **helper function** which accepts a node
        1. Push the value of the node to the variable that stores the values
        2. If the node has a left property, call the helper function with the left property on the node
        3. If the node has a right property, call the helper function with the right property on the node
    4. Invoke the helper function with the current variable
    5. Return the array of values

## 176. DFS PreOrder Solution

```js
Function DFSPreOrder() {
  var data = []
  let current = this.root // current is useful when you want to start the DFS from a certain node

  fuction traverse(node) {
    data.push(node.value)
    if(node.left) traverse(node.left)
    if(node.right) traverse(node.right)
  }

  traverse(current)
  return data
}
```

## 177. DFS PostOrder Intro


## 178. DFS PostOrder Solution

```js
Function DFSPostOrder() {
  var data = []
  let current = this.root // current is useful when you want to start the DFS from a certain node

  fuction traverse(node) {
    if(node.left) traverse(node.left)
    if(node.right) traverse(node.right)
    data.push(node.value) // this line after visiting left && right
  }

  traverse(current)
  return data
}
```

## 179. DFS InOrder Intro

## 180. DFS InOrder Solution

```js
Function DFSInOrder() {
  var data = []
  let current = this.root // current is useful when you want to start the DFS from a certain node

  fuction traverse(node) {
    if(node.left) traverse(node.left)
    data.push(node.value) // this line between visiting left && right
    if(node.right) traverse(node.right)
  }

  traverse(current)
  return data
}
```

## 181. When to Use BFS and DFS

BFS vs DFS : It depends on the shape of a tree

- Both have the same time complexity since we visit every node one by one
- If a tree is **wide** (when one level has many nodes / every level is fully filled ): In terms of the space complexity, **DFS** is better.
  - BFS has lots of nodes to keep track of (in your queue)
  - DFS has less nodes to keep track of / store during the process

- If a tree is **long** and grows deep (e.g., when each node has one child like a linked list): **BFS** is better

- About the time, BFS and DFS are the same (linear).

### DFS - When to use InOrder, PreOrder, PostOrder

- **InOrder** : When a tree is a BST, it returns values **in their underlying order**
  - Used commonly with BST's
- **PreOrder** : When you want to **duplicate/copy/clone a tree**
  - Can be used to export a tree structure so that it is easily reconstructed or copied
  - Flatten/serialize a tree out into db or file, and rebuild the structure
- PostOrder : ?
