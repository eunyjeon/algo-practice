# Big O Notation

- Time Complexity and Space Complexity

## 4. Intro to Big O

- When having multiple implementations of the same function, how to determine which one is the best or better than others?

## 5. Timing Our Code

- What does better mean?
  - Faster && Less memory-internsive (+ More readable)

- The Problem with Time (performance.now)
  - Diff machines will record diff times
  - The smae machine will record diff times.
  - For fast algs, speed measurements may not be precide enough
  - We need a reliable way to evaluate an algo -> Counting operations

## 6. Counting Operations

- Big O Definition
: An algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times `f(n)`, as `n` increases
  - `f(n)` could be linear `(f(n)=n)`
  - `f(n)` could be quadratic `(f(n)=n^2)`
  - `f(n)` could be constant `(f(n)=1)` : As `n` grows, the number of operations is the same.
  - `f(n)` could be sth entirely different.

- Big O is for the worst case scenario.
  - Upperbound

## 9. Simplifying Big O Expressions

- Big O Shorthands
    1. Arithmetic operations(+|-|*|/) are constant
    2. Variable assignment is constant
    3. Accessign elements in an array by index or object by key is constant
    4. In a loop, the complexity is the length of the loop * the complexity of whatever happens inside of the loop

## 10. Space Complexity

How much additional memory do we need to allocate in order to run the code in our algorithm?

- What about the inputs?
  - We are intereted in the auxiliary space complexity that refers to space required by the alorithm, not including space taken up by the inputs.

- Space complexity in JS
  - Most primitives (bool, numbers, undefined, null) are constant space
  - Strings requires O(n) space (where n is the string length)
  - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

## 11. Logs

- Certain **searching** algorithms have logarithmic **time** complexity.
- Efficient **sorting** algorithms involves logarithms.
- **Recursion** sometimes involves logarithmic **space** complexity.
