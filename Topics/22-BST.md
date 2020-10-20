# Binary Search Tree

## 160. Intro to Trees

### What is Tree?

A data structure that consists of nodes in a parent / child relationship

### Trees vs Lists

- Trees: Non-linear
- Lists: Linear

- A singly linked list can be considered as a special case of a tree though

- Tree property
  - Only a parent can point to its children
  - A tree has to have an entry point which is a root

- Terminology
  - Root
  - Child
  - Parent
  - Siblings
  - Leaf
  - Edge

### Trees vs Binary Trees vs Binary Search Trees

- Tree: can have any number of child nodes.
- Binary tree: can have at most 2 child nodes.
- BST: A special case of binary tree  (**at most 2 child nodes**)
  - Sorted in a particualr way
  - Used to store data that can be compared / sortable
  - If we take a node in the BST, **every item less than the node must be on its left and items greater than the node must be on its right.**

## 161. Uses for Trees

- HTML DOM
- Networking routing
- Abstract Syntax Tree
- Artificial Intelligence: to describe possible options from one decision (like a decision tree)
- Folders in OS
- JSON

## 162. Intro to Binary Trees

- Check 160.

## 164. Searching a Binary Search Tree

- Always start from the root and compare the given value with a node
- If val < node -> one level down to the left. Otherwise, go right by one

## 165. Our Tree Classes

```js
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }
}

let tree = new BST()
tree.root = new Node(10)
tree.root.left = new Node(7)
tree.root.right = new Node(15)
```

## 166. BST: Insert

- Steps: iteratively or recursively
  1. Create a new node
  2. Starting at the root
    2.1. Check if there is a root, if not, the root now becomes that new node.
    2.2. If there is a root, check if the value of the new node is greater than or less tha nthe value of the root
    2.3. If it is greater
      2.3.1 Check to see if there is a node to the right
        2.3.1.1 If there is, move to that node and repeat these steps
        2.3.1.2 If there isn't (null), add that node as the right property
    2.4 If it is less
      2.4.1 Check to see if there is a node to the left
        2.4.1.1 If there is, move to that node and repear these steps
        2.4.1.2 If there isn't (null), add that node as the left property

## 167. BST: Insert Solution

- Ways to handle duplicates
  - Option1: Having a counter for checking the number of the same value
    - e.g., 2(3) -> indicates 2 inserted 3 times
  - Option1: Return undefined

```js
class BST {
  constructor () {
    this.root = null
  }
  insert(val) {
    let newNode = new Node(val)
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (val === current.value) return undefined
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
          current = current.left
          }
        } else if (val > current.value){
          if (current.right === null) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }
}
```

## 168. BST: Find

- Steps : similar to insertion
  - Keep comparing values untill finding the target value or reaching null

## 169. BST: Find Solution

```js
class BST {
  constructor () {
    this.root = null
  }
  find(val) {
    if (this.root === null) return false;
    let current = this.root, found = false
    while(current && !found) {
      if (val < current.value) {
        current = current.left
      } else if (val > current.value) {
        current = current.right
      } else {
        found = true
        // return true
      }
    }
    if (!found) return undefined
    return current
  }
}
```

## 170. Big O of BST

- Insertion: O(logN) for average and best cases
- Searching: O(logN) for average and best cases
- But *not guaranteed*
  - If every node has only one child -> O(N)
  - In this case, pick a new root and restructure the BST would make the insertion & searching faster.
