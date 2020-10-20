# Singly Linked List

## 110. Intro to Singly Linked Lists

### 1. What is a linked list?

- A data structure that contains a **head, tail** and **length** property.
- Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another/next node or null
- No index

### 2. Lists vs. Arrays

- Lists
  - Do not have indexes
  - Connected via nodes with a **next** pointer
  - Random access is not allowed
  - Good at **insertion** and **deletion**
    - But deletion might be O(1) OR O(N) (shifting vs popping)

- Arrays
  - Indexed in order
  - Insertion and deletion can be expensive
  - Can quickly be accessed at a specific index

## 111. Starter Code and Push Intro

> ### Methods in Singly Liinked List
>
> 1. push: this.tail.next = newNode (except for this.head===null)
> 2. pop
> 3. Shift
> 4. Unshift
> 5. Get
> 6. Set
> 7. Insert
> 8. Remove
> 9. Reverse

```js
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null // head & tail : pointers
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
      this.length++
    } else {
      this.tail.next =newNode
      this.tail = this.tail.next
      this.length++
    }
    return this
  }

  pop() {
    // edge case 1. when the code is empty
    if (!this.head) return undefined

    let cur = this.head
    let newTail = cur

    while(cur.next) {
      newTail = cur
      cur = cur.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--

    // edge case 2. when the list becomes empty
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return cur
  }

  shift() {
    if (!this.head) return undefined

    let removed = this.head
    this.head = this.head.next
    removed.next = null
    this.length--

    // What if this.length === 0??
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return removed
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get (idx) {
    // check if idx is valid
    if (idx < o || idx >= this.length) retun null
    let counter = 0
    let cur = this.head
    while(counter !== idx) {
      cur = cur.next
      counter++
    }
    return cur
  }

  set(idx, val) {
    let cur = this.get(idx)
    if(cur) {
      cur.val = val
      return true
    }
    return false
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false
    if (idx === this.length) return !!this.push(val) // === adding a val to the end
    if (idx === 0) return !!this.unshift(val)

    let newNode = new Node(val)
    let prev = this.get(idx-1)
    newNode.next = prev.next
    prev.next = newNode

    this.length++
    return true
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined
    if (idx === this.length -1 ) return this.pop()
    if (idx === 0) return this.shift()

    let prev = this.get(idx-1)
    let removed = prev.next
    pre.next = removed.next
    this.length--
    return removed
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null // setting prev = null to make sure the tail.next === null
    for (let i = 0; i < this.length ; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }

  // this is not related to Singly Linked List at all. This is for to see if mothods works as we expected.
  print() {
    let arr = []
    let cur = this.head
    while(cur) {
      arr.push(cur.val)
      cur = cur.next
    }
    console.log(arr)
  }
}

let myList = new SinglyLinkedList()
myList.push("HELLO")
myList.push("GOODBYE")
```

### Pushing a new value to SinglyLinkedList

1. This function should accept a value.
2. Create a new node using the value passed to the function
3. If there is no head property on the list, set the head and tail to be the newly created node
4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
5. Increment the length by one
6. Return the linked list(`this`)


>> At first, head and tail point to null/nothing.

## 112. Push Solution

## 113. Pop intro

- Removing a tail and setting a new tail

- Gotchas
  - How to get the second to the last item?
  - When the linked list is emptry -> return undefined
  - **When the linked list becomes empty after popping out -> set this.head & this.tail to null**

## 114. Pop Solution

## 115. Shift Intro

- Removing a new node from the beginning of the Linked List

## 116. Shift Solution

## 117. Unshift Intro

## 118. Unshift Solution

## 119. Get intro

- Retrieving a node by its **position** in the Linked List
- Takes a number and traver the list to get an item at the given index

## 120. Get Solution

## 121. Set Intro

- Changing the value of a node based on its position/index in the Linked List

## 122. Set Solution

## 123. Insert Intro

- Inserting a new node at the given index

### Steps

1. If index < 0 || index > length (not >= length!!!): return false
2. If index === length: push()
3. If index === 0: unshift()
4. Otherwise, get(index-1) to access the node which will be prev of the new node
5. Set newNode.next = prev.next && prev.next = newNode
6. length++
7. Return true

## 124. Insert Solution

## 125. Remove Intro

- Removing a node from the linked list at a specific position

### Steps

1. If index < 0 || index >= length: return undefined
2. IF index === length - 1: pop()
3. If index === 0 : shift()
4. Otherwise, get(index-1) to access the node which will be prev of the new node
5. Set prev.next = prev.next.next
6. length--
7. Return the val of the removed node

## 126. Remove Solution

## 127. Reverse Intro

- Reversing the LInked List **in place**

### Steps

1. Swap the head and tail
2. let next, let prev: if 3 -> 4 -> 5 -> 6, prev === 4 and next === 6 for node 5
3. let node = this.head
4. Loop through the list
5. next = node.next
6. node.next = prev
7. prev = node
8. node = next

## 128. Reverse Solution

## 129. Big O Complexity of Singly Linked List

- Insertion: O(1)
- **Removal**: Depends on where we are removing from
  - O(1): when removing from the beginning
  - **O(N): when removing from the end** -> need to iterate to the end
- Searching: O(N)
- Accessing: O(N)

### RECAP : Singly Linked List vs Array

- Singly LInked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
- Arrays contain a built in index whereas Linked Lists don't
- The idea of a list data structure that consists of ndes is the foundation for other data structures like Stacks and Queues
