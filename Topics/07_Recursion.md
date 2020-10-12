# Recursion

## 41. Why Use Recursion?
  - What is recursion
  : A process (a function) that calls itself
  - It's everywhere
    - JSON.parse / JSON.stringify often written in recursive function
    - document.getElementById and DOM traversal algorithms
    - Object traversal
    - We will see it with more complex data structures
    - Sometimes a cleaner alternative to itertation

## 42. The Call Stack
  - The call stack
    - It's a stack data structure
    - Anytime a function is invoked it is placed (**pushed**) on the top of the call stack
    - When JS sees the return keyword or when the function ends, the compiler will remove (**pop**)

  - Why do I care?
   - You'are used to functions being pushed on the call stack and popped off when they are done
   - When we write recursive functions, we keep pushing new functions onto the call stack

## 43 - 44. Recursive Functions
  - Two essential parts of a recursive function
    : Base Case (a situation when the recursion ends) & Different input


## 45 - 46. Factorial Iteratively vs Recursively

## 47. Common Recursion Pitfalls
  - No base case
  - Returning wrong value
  - Stack overflow

## 48. Helper Method Recursion
  - When an **outer function** has an **inner recursive function**
  - E.g., when dealing with an array/string, collecting values in an array/object (compiling an array/etc.)

## 49. Pure Recursion
  - A recursive function that is self-contained without having nested functions

  ```js
    function collectOddValues(arr) {
      let newArr = [];

      if(arr.length === 0) {
        return newArr;
      }

      if(arr[0]%2 !== 0) {
        newArr.push(arr[0])
      }

      newArr = newArr.concat(collectOddValues(arr.slice(1)))
      return newArr
    }
  ```
  - Tips
    - For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you don't mutate them
    - Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
    - To make copies of objects use Object.assign or the spread operator



