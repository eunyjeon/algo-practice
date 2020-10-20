# Binary Heap

- Heaps
  - A type of trees with a special rule

- Min & Max heaps

- Binary Heaps
  - To implement **Priority Queues**
  - With **graph traversal algorithms**

## 183. Intro to Heaps

- Binary Heap vs BST
  - Very similar to a BST but not same
  - In a Max Binary Heap, parent nodes are always larger than child nodes.
  - In a Min Binary Heap, parent nodes are always smaller than child nodes.
  - It doesn't matter if the left is smaller than the right, or vice versa.
  - It is a binary tree so each node has at most 2 child nodes

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
> ### For any index of an array n
>
> - The left child is stored at `2n+1`
> - The right child is stored at `2n+2`

- To find an index of parent based off of a child node index
>
> ### For any child node at index n
>
> Its parent is at index `Math.floor((n-1)/2)`

## 185 - 186. Heap: Insert

```js
class MaxbinaryHeap {
  this.values = []
}
```

- Adding to a MaxBinaryHeap
  - Add/push to the end of the values array
  - Bubble up: Compare with its parent and swap values until we find the correct place

- You can have a method that does both pushing to an array and bubbling up Or 2 methods for those work.

### Steps

1. Push the value into the values property on the heap
2. Bubble up
    - let index = values.length - 1
    - let parentIndex = Math.floor((index-1)/2)
    - Keep looping as long as the values element at the aprentIdex is less than the values element at the child index
        - Swap the values of the values element at the parentIndex with the value of the element property at the child index
        - Set the index to be the parentIndex, and start over

```js

```



## 187 - 188. Heap: ExtraMax

## 189 - 191. Priority Queue

## 192. Big O of Binary Heaps
