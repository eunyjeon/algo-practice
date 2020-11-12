# Insertion Sort

## Intro

- In a certain situation, insertion sort works.
- Build up the sort by gradually creating a large left half which is always sorted ( Gradually sizing up the sorted portion)
- **Taking an element and insert it in a right spot**

## Implementation

1. Start by *picking the 2nd* element in the array
2. Now *compare the second element with the one before it* and swap if necessary.
3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e., the left side) to place the element in the correct place
4. Repeat until the given array is sorted

```js
    // my version - code below is better
    function insertionSort(arr) {
      for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j>0; j--) {
          if (arr[j] < arr[j-1]) {
            let temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp
          } else {
            break
          }
        }
      }

      return arr
    }

    // from the lecture
    // j start from i-1 to 0
    // compare arr[i] with arr[j]
    function insertionSort(arr) {
      for (let i=1; i<arr.length; i++) {
          let currentVal = arr[i]
          for (let j=i-1; j>=0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j] //
          }
          arr[j+1] = currentVal
      }

      return arr
    }
```

## Big O

- Worst case: O(n^2)
