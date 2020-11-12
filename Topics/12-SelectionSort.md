# Selection Sort

## 75. Intro

- Similar to bubble sort, but instread of first placing large values into sorted position, it places small values into sorted position
- Select the min value and swap it with the value at the idx 0.
  - Find **the new minimum** of unsorted part of a given array

## 76. Implementation

1. Store the first element as the smallest value you've seen so far.
2. Compare this item to the next item in the array until you find a smaller number.
3. If a smaller number is found, designate that smaller number to be the new "minimun" and continue until the end of the array.
4. If the "minimun" is not the value(index) you initially began with, swap the two values.
5. Prepeat this with the next element until the array is sorted.

```js
    function selectionSort(arr) {
      let min, minIdx
      for (let i=0; i<arr.length-1; i++) {
        min = arr[i]
        minIdx = i
        for (let j=i+1; j<arr.length; j++) {
          if (arr[j] < min) {
            min = arr[j]
            minIdx = j
          }
        }
        if (minIdx != i) {
          arr[minIdx] = arr[i]
          arr[i] = min
        }
      }
      return arr
    }
```

## 77. Big O

- Time O(N^2) : comparing every element with every element, rouphly
- Selection sort is potentially bettern than other sorting algos like bubble sort if you want to minimize the number of swaps you are making.
  - We are swapping only once for each index.
