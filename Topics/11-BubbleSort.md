# Bubble Sort

## 69. Built-In JS Sorting

### `Array.sort()`

- `Array.sort()` without param : If compareFunction(called as comparator(컴페러투어-ㄹ)) is omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
  - "The pairwise "less than" relationship is also known as comparator in Java, which is a function object that helps the sorting functions to determine the orders among a collection of elements."
- This might not return what you expected.
  - e.g., `[15, 5, 6, 1].sort()` returns `[1, 15, 5, 6]`

### Telling JS how to sort

- Ther built-int sort method accepts an optional *comparator* function
- You can use this comparator function to tell JS how you want it to sort

> - The comparator looks at pairs of elements (a and b) and determines their sort order based on the return value.
>     1. If returnVal < 0 : a then b
>     2. If returnVal > 0 : b then a
>     3. If returnVal === 0 : a and b are the same as far as the sort is concerned

```js
    function numberCompare(num1, num2) {
      return num1 - num2;
    }

    [6, 4, 15, 10].sort(numberCompare)
    // [4, 6, 10, 15]

    function compareByLen(str1, str2) {
      return str1.length - str2.length
    }

    ["Steele", "Colt", "Data Structures", "Algorithms"].sort(comapreByLen)
    //
```

## 70. Bubble Sort: Overview

1. keep comparting adjacent elements and swap if n1 is greater than n2 untill you hit the end of the array.
2. When the first iteration ends, the last element is the largest one in the array.
3. Repeat 1 one element before the previous iteration (do 1 for unsorted part repeatedly)

- Swapping values

```js
    // ES5
    function swap(arr, idx1, idx2) {
      let temp = arr[idx1]
      arr[idx1] = arr[idx2]
      arr[idx2] = temp
    }

    // ES2015
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
```

## 71. Bubble Sort: Implementaion & Optimization

```js
    function bubbleSort(arr) {
      for (let i=arr.length-1; i>0; i--) {
        for (let j=0; j<i; j++) {
          if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
      }
      return arr
    }
```

### Optimizing the Bubble sort

- What if a given array is already sorted or almost sorted?
- Make it short circuited by terminating the process **when the last call didn't swap any element**

```js
    // IDEA: Everytime starting the iteration, set noSwaps to true. When the iteration is done, if noSwap is still true, that means every element is already in right places, thus stop the loop.

    function bubbleSort(arr) {
      let noSwaps
      for (let i=arr.length-1; i>0; i--) {
        noSwaps = true
        for (let j=0; j<i; j++) {
          if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            noSwaps = false
          }
        }
        if (noSwaps) break
      }
      return arr
    }
```

## 73. Bubble Sort: Big O

- Time O(N^2) for most cases
- Linear time for the best case (when the array is already/almost sorted)
