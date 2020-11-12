# Binary Heap

- Heaps
  - A type of **trees** with a special rule

- Min & Max heaps

- Binary Heaps
  - To implement **Priority Queues**
  - With **graph traversal algorithms**

## 183. Intro to Heaps

- Binary Heap vs BST
  - Very similar to a BST but not same
  - **In a Max Binary Heap, parent nodes are always larger than child nodes.**
  - In a Min Binary Heap, parent nodes are always smaller than child nodes.
  - It doesn't matter if the left is smaller than the right, or vice versa. (**No implied ordering / relationship b/t siblings**)
  - It is a binary tree so each node has at most 2 child nodes
  - Before moving on to the next level, the current level must be fully filled. (fill the nodes from L to R)

> ### BST vs Binary Heap
>
>    p
> c1   c2
>
> BST : c1 < p <= c2
> Binary Heap: c1 < p && c2 < p, but no relationship between c1 and c2 (c1 < c2 is not guaranteed)

- Max Binary Heap
  - Each parent has at most 2 child nodes
  - The value of each parent node is always greater than its child nodes
  - In a Max Binary Heap, the parent is greater than the children, but there are no guarantees b/t sibling nodes. (**The parent is always greater than its children, but there is no relationship b/w siblings. We only know that all the children are smaller than their parent.**)
  - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.
  - e.g., max binary heap
                    100
            19                36
        17      12        25     1
      9   15   6   11  13   8  1   4

## 184. Storing Heaps

- It's easier to implement heaps with an **array** data structure than a linked list.
  - Because we always add data to the left.
- e.g., above maxBinaryHeap = `[100, 19, 36, 17, 12, 25, 1, 9, 15, 6, 11, 13, 8, 1, 4]`

- To find indices of child nodes
>
> ### For any index i of an array n
>
> - The left child is stored at `2i+1`
> - The right child is stored at `2i+2`

- To find an index of parent based off of a child node index
>
> ### For any child node at index i
>
> Its parent is at index `Math.floor((i-1)/2)`

## 185 - 186. Heap: Insert

```js
class MaxbinaryHeap {
  construction() {
    this.values = [] // the only property we need
  }
}
```

- Adding to a MaxBinaryHeap
  - Add/push to the end of the values array
  - Bubble up: Compare with its parent and swap values until we find the correct place

- You can have a method that does both pushing to an array and bubbling up OR 2 methods for those work.

### Steps

1. Push the value into the values property on the heap
2. Bubble up
    - let index = values.length - 1
    - let parentIndex = Math.floor((index-1)/2)
    - Keep looping as long as the values element at the parentIdex is less than the values element at the child index
        - Swap the values of the values element at the parentIndex with the value of the element property at the child index
        - Set the index to be the parentIndex, and start over

```js
class MaxbinaryHeap {
  // ...

  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }
  // helper function to bubble up the value to the correct position by comparing its value with its parent's value
  bubbleUp() {
    // getting the idx and value of newly added value
    let idx = this.values.length - 1
    const element = this.values[idx]
    while(idx > 0) {
      let parentIdx = Math.floor((idx-1)/2)
      let parent = this.values[parentIdx]
      if(element <= parent) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
 }

```

## 187 - 188. Heap: ExtractMax

- **Removing from a heap**
    1. Remove the root
    2. Replace with the most recently added
    3. Adjust (sink down)
        - The procedure for deleting the root from the heap (effectively extracting the max element in a max heap or the min element in a min heap)
        - This process for restoring the properties is called down-heap, (or bubble-down, perfolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max)
        - In a case of max heap, compare the new root with its child with a larger value. If the child is greater than the new root, swap it. (You have to compare with the larger child to make the heap work.)

- Steps (for max heap)
    1. Swap the first value in the values perperty with the last one
    2. Pop from the values property, so you can return the value at the end
    3. Have the new root "sink down" to the correct position
        1. Your parent index starts at 0 (the root)
        2. Find the index of the left child: 2*index + 1 (make sure it's not out of bounds)
        3. Find the index of the right child: 2*index + 2 (make sure it's not out of bounds)
        4. If the left or right child is greater than the element, swap. If both left and right children are larger, swap with the largest child.
        5. The child index you swapped ot now becomes the new parent index.
        6. Keep looping and swapping until neigher child is larger than the element.
        7. Return the old root, which is the max value.

```js
class MaxbinaryHeap {
  // ...

  extractMax() {
    const max = this.values[0]
    const end = this.values.pop()
    // EDGE CASE: if consdition to prevent  popping out an elemen and pushing it back when it is the only elem
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }

  // finding the right position of the node moved to the root from the very end
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while(true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null // to keep track of  the position we are going to swap with

      if (leftChildIdx < length) {
        leftChild = this.valeus[leftChildIdx]
        if(leftChild > element) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightchildIdx // when rightchild is greater than the left OR left is less than the element but rightChild is greater than element
        }
      }
      if (swap === null) break
      // swapping the values of parent and its larger child
      this.values[idx] = this.valeus[swap]
      this.values[swap] = element
      idx = swap
    }

  }
 }
```

## 189 - 191. Priority Queue

- A data structure where each element has a priority.
- Elements with higher priorities are served before elements with lower priorities.
- Use cases
  - On every machine (e.g., Unix) each process has a priority level.
- Priority queues are seperate from heaps. They are abstract concepts / ADT.
  - You could implement a priority queue with an array or a list (not efficient though).

- A naive version of Priority Queue using a list - Don't
  - Use a list to store all elements
  - Iterate over the entire thing to find the highest priority element -> **Use a HEAP!**

- A better version of Priority Queue using a Heap
  - Place an item with the highest priority at the root
  - Always remove the root and adjust the heap
  - Always add to the end (at the leftmost position at the bottom) and bubble up

- Basic Structure
  - We are only comparing the priority to construct and rearrange the heap
  - Usually a lower value is served first (higher priority) -> minHeap is better than maxHeap

  ```js
  class PriorityQueue {
    constructor() {
      this.values = []
    }
  }

  class Node {
    constructor(val, priority) {
      this.val = val
      this.priority = priority
    }
  }
  ```

### Pseudocode

- Write a Min Heap  - lower number means higher priority.
- Each node has a val and a priority. Use the priority to build the heap.
- **Enqueue** method accepts a value and priority, makes a new node, and puts it in the right spot *based off of its priority*.
- **Dequeue** method removes root element, returns it, and rearranges heap using prioirty.

```js
  class PriorityQueue {
    constructor() {
      this.values = []
    }

    enqueue(val, priority) {
      let newNode = new Node(val, priority)
      this.values.push(newNode)
      this.bubbleUp()
    }

    bubbleUp() {
      let idx = this.values.length - 1
      const element = this.values[idx]
      while(dix > 0) {
        let parentIdx = Math.floor((idx-1) / 2)
        let parent  = this.values[parentIdx]
        // this line below is different from the maxHeap since this uses minHeap
        if(element.priority >= parent.priority) break;
        this.values[parentIdx] = element
        this.values[idx] = parent
        idx  = parentIdx
      }
    }

    dequeue() {
      const min = this.values[0]
      const end = this.values.pop()
      // EDGE CASE: if consdition to prevent  popping out an elemen and pushing it back when it is the only elem
      if (this.values.length > 0) {
        this.values[0] = end
        this.sinkDown()
      }
      return max
    }

    // finding the right position of the node moved to the root from the very end
    sinkDown() {
      let idx = 0
      const length = this.values.length
      const element = this.values[0]
      while(true) {
        let leftChildIdx = 2 * idx + 1
        let rightChildIdx = 2 * idx + 2
        let leftChild, rightChild
        let swap = null // to keep track of  the position we are going to swap with

        if (leftChildIdx < length) {
          leftChild = this.valeus[leftChildIdx]
          if(leftChild.priority < element.priority) {
            swap = leftChildIdx
          }
        }

        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx]
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightchildIdx // when rightchild is greater than the left OR left is less than the element but rightChild is greater than element
          }
        }
        if (swap === null) break
        // swapping the values of parent and its larger child
        this.values[idx] = this.valeus[swap]
        this.values[swap] = element
        idx = swap
      }

    }
 }

  class Node {
    constructor(val, priority) {
      this.val = val
      this.priority = priority
    }
  }
  ```

## 192. Big O of Binary Heaps

- When N is the number of nodes
  - O(logN) : Insertion -  when you added a node that has a higher priority than the root's
  - O(logN) : Removal - when the value moved to the root has the lowest priority
  - O(N) : Search - Heap is not for searching.
- There is no possibility that a heap is unbalanced because we fully fill each level from L to R before moving on to the next level.
 -> Even in the worst cases, insertion and deletion have O(logN) time complexity.

### RECAP

- Binary Heaps are very usefull data structures for sorting, and implementing other data structures like priority queues
- Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
- With just a little bit of math, **we can represent heaps using *arrays***.
