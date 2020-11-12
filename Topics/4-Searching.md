# Searching Algorithms

> Linear Search
> Binary Search

## 56. Intro to Searching

---

## 57. Linear Search

### Intro to Linear Search

- JS uses Linear Search for some methods on arrays
  - indexOf
  - includes
  - find
  - findIndex

### Linear Search Solution

### Linear Search Big O

O(N)

---

## 60. Binary Search

### Intro to to Binary Search

- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- **CAUTION**: Binary search only works on **sorted arrays**.

### PseudoCode

### Solution

```js
    // input array must be SORTED to use Binary Search
    function binarySearch (arr, elem) {
      let start = 0
      let end = arr.length - 1
      let mid

      while(start <= end) {
        mid = Math.floor((start + end) / 2)
        if (arr[mid] === elem) {
          return mid
        } else if (elem < arr[mid]) {
          end = mid - 1
        } else {
          start = mid + 1
        }
      }

      return -1
    }
```

### Binary Search Big O

Worst case O(logN) and best case O(1)

---

## 64. Naive String Search

E.g., Given two strings, find the number of exact match of the short string from the long string

"abcdecd" , "cd" -> 2

### Implementation

```js
    function naiveSearch(long, short) {
      let count = 0
      for (let i =0; i < long.length; i++) {
        for (let j=0; short.length; j++) {
          if (long[i+j] !== short[j]) break
          if (j === short.length - 1) count++
        }
      }
      return count
    }
```

## 66. KNP Searching??
