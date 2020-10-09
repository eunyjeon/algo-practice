# Section 5: Problem Solving Patterns

- Pattern 1: Frequency Counter
- Pattern 2: Multiple Pointers
- Pattern 3: Sliding Window

## 27. Frequency Counter Pattern
- This pattern uses objects/sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(n<sup>2</sup>) operations with arrays/strings
- Often takes O(n) time

🍀 E.g., Write a function called  **same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding value sequared in the second array. The frequency of values must be the same.
```js
// console.log(same([2,3], [4,9])) // true
// console.log(same([2,3], [4,9,4])) // false
// console.log(same([2,3,3], [4,9,4])) // false
// console.log(same([2,3], [9])) // false
// console.log(same([2,4], [4,9])) // false
const same = function (arr1, arr2) {
  const obj2 = {}

  if(arr1.length != arr2.length) return false

  for (let num of arr2) {
    obj2[Math.sqrt(num)] = ++obj2[Math.sqrt(num)] || 1
  }

  arr1.forEach(num => {
    if(obj2[num]) {
      obj2[num] > 1 ? --obj2[num] : delete obj2[num]
    } else {
      return false
    }
  })

  return Object.keys(obj2).length ? false : true
}

// O(n)
const same = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if(!(key**2 in frequencyCounter2)) return false

    if(frequencyCounter2[key**2] !== frequencyCounter1[key]) return false
  }

  return true
}
```

## 28 & 29. Frequency Counter: Anagram Challenge and Solution

🍀 Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
```js
const validAnagram = function (str1, str2) {
  if (str1.length !== str2.length) return false

  const str1obj = {}
  for (let char of str1) {
    str1obj[char] = (str1obj[char] || 0) + 1
  }

  for(let c of str2) {
    if (!str1obj[c]) {
      return false
    } else {
      str1obj[c] -= 1
    }
  }

  return true
}

console.log(validAnagram('','')) // true
console.log(validAnagram('aaz','zza')) //false
console.log(validAnagram('anagram','nagaram')) //true
console.log(validAnagram('rat','car')) // false
console.log(validAnagram('awesome','awesom')) // false
console.log(validAnagram('qwerty','qeywrt')) // true
console.log(validAnagram('texttwisttime','timetwisttext')) // true
```

## 30. Multiple Pointers Pattern

🍀 Write a function called sumZero which accepts a shorted array of intergers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```js
const sumZero = function (arr) {
  let p1 = 0
  let p2 = arr.length - 1

  while(p1 < p2) {
    const currentSum = arr[p1] + arr[p2]
    if(!currentSum) {
      return [arr[p1], arr[p2]]
    } else if (currentSum > 0) {
      if (arr[p1] > 0) return ;
      else p2--
    } else {
      if(arr[p2] < 0) return ;
      else p1++
    }
  }
}

console.log(sumZero([3,2,1,0,-1,-2,-3]))
console.log(sumZero([-2,0,1,3]))
console.log(sumZero([1,2,3]))
console.log(sumZero([-3,-2,-1]))
```

## 31 & 32. Multiple Pointers : Count Unique Values Challenge & Solution
🍀 Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
```js

// Using Set
const countUniqueValues = function (arr) {
  let uniqueVals = new Set()

  for (let num of arr) {
    uniqueVals.add(num)
  }
  return uniqueVals.size
}

// Using 2 pointers
const countUniqueValues = function (arr) {
  let i=0
  for (let j=0; j<arr.length; j++) {
    if (arr[i]!==arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
}
```

## 33. Sliding Window Pattern
- This pattern involves creating a window which can either be an array or number from one position to another
- Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for **keeping track of a subset of data** in an array/string etc.
  * e.g., Finding the longest sequence of unique characters in a string : "lother" from "hellothere"

🍀 **maxSubarraySum**
/Problems/17-maxSubarraySum.js
Write a function called maxSubarraySum which accepts an array of intergers and a number called n. The function should calculate the max sum of n consecutive elements in the array.
```js
/*
Naive solution without a window
Inefficient when it have a large array with large n
*/
// function maxSubarraySum (arr, n) {
//   if (n > arr.length) return null;
//   let currentMax = -Infinity;
//   for (let i=0; i <= arr.length-n; i++) {
//     let currentSum = 0;
//     for (let j=0; j < n; j++) {
//       currentSum += arr[i+j]
//     };
//     if (currentSum > currentMax) currentMax = currentSum;
//   }
//   return currentMax;
// }

// sliding window approach
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) //10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) //17
console.log(maxSubarraySum([4,2,1,6],1)) //6
console.log(maxSubarraySum([4,2,1,6,2],4)) //13
console.log(maxSubarraySum([],4)) //null
```

## 34. Divide and Conquer Pattern
- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
- This pattern can tremedously decrease time complexity.
- Often used for searching and sorting algorithms

E.g., Given a **sorted** array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.
```js

// naive linear search -> O(n)

// binary search -> O(log(n))
function search(arr, val) {
  let min = 0;
  let max = arr.length-1;

  while(min <= max) {
    let middle = Math.floor((min+max)/2);
    let currentElem = arr[middle];

    if(arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      min = middle - 1;
    } else {
      return middle;
    }
    return -1;
  }
}
// search([1,2,3,4,5,6], 4) // 3
// search([1,2,3,4,5,6], 6) // 5
// search([1,2,3,4,5,6], 11) // -1
```

