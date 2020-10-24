# Stacks + Queues

Both are **ADT** (a kind of concepts)

## 151. Intro to Stacks

- Stack
  - A **LIFO** data structure (== collection of data) : The last element added to the stack will be the first element removed from the stack

- Where stacks are used
  - Managing function invocations (e.g., call stack)
  - Undo / redo
  - Routing (the history object) (e.g., in React) is treated like a stack
  - When implementing other algorithms (e.g., trees, graphs - to store history that you want to come back to)

## 152. Creating a Stack with an Array

Using push and pop

## 153. Writing Stack From Scratch

- Using Linked List (can be done with either SLL or DLL)
- **Inserting and removing to the beginning to acheive constant time**: Insertion and removal of Stacks have to be constant time, but pushing and inserting to the end of SLL takes linear time. Thus, inserting and removing to the beginning should be used.

```js
class Node {
  constructor(value) {
    this.value = value
    this.next = next
  }
}

class Stack {
  constructor() {
    this.first = null // head of the SLL
    this.last = null // tail of the SLL
    this.size = 0
  }

  // inset to beginning
  insert(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }

    return ++this.size
  }

  // remove from beginning
  remove() {
    if (!this.first) return null
    let temp = this.first
    if (this.first === this.last) this.last = null
    this.first = this.first.next
    this.size--
    return temp.value
  }
}
```

## 154. Big O of Stacks

- O(1) : Insertion / Removal
- O(n) : Searching / Access <- these are not really for Stack ADT. Stack is a LIFO data structure.

## 155. Intro to Queues

## 156. Creating Queues Using Arrays

## 157. Writing Queue From Scratch

## 158. Big O of Queues
