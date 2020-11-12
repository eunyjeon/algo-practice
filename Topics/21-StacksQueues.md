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

- **FIFO** data structure
- Examples
  - Background tasks
  - Uploading resources
  - Printing, task processing

- Implementation
  - Using arrays; OR
  - Using a Queue class

## 156. Creating Queues Using Arrays

- enqueue to the end
- dequeue from the beginning
- enqueue and dequeue could be done in opposite direction (add to the beginning and delete from the end)
  - If you keep following the FIFO rule, it doesn't matter which side you push or pop.
- BUT not ideal since reindexing items when dequeued is expensive.

## 157. Writing Queue From Scratch

- **Inserting to the end & removing from the beginning** (cheaper than adding to the beginning and deleting from the end)

```js
class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  // adding to end
  enqueue(val) {
    let newNode = new Node(val)

    if (this.first) {
      this.last.next = newNode
      this.last = this.last.next
    } else {
      this.first = newNode
      this.last = this.first
    }

    return ++this.size
  }

  // removing from beginning
  dequeue() {
    if (!this.first) return null

    let dequeued = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return dequeued.value
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
```

### Implementing Stack and Queue using Classes (Singly Linked List)

- **Pop and Dequeue should be the same : Removing from the beginning**
  -Removing from the end is always expensive than the other
- Push and Enqueue aren't
  - For Stacks, pushing to the beginning && removing from the beginning
  - For Queues, adding to the eand && removing from the beginning

## 158. Big O of Queues

- Insertion & Removal : O(1) <- when using SLL or circular array
  - If using arrays, reindexing makes time complexity increased -> time complexity of dequeue will be O(n) [Array Implementation of Queue](https://www.geeksforgeeks.org/array-implementation-of-queue-simple/)
- Searching & Access : O(N) <- doesn't matter
