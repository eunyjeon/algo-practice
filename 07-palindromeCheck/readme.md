# Palindrome Check

## Interviewer Prompt
Given an string `str`, create a function that returns a boolean, corresponding to whether that string is a palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive.


## Examples

```js
isPal('car') => false
isPal('racecar') => true
isPal('RaCecAr') => true
isPal('!? 100 ABCcba 001 ?!') => true
```


## Iterative Solution

### Approach

Implement a `while` loop that continues running if the string has a length >1. Slice off the first and last chars of the string and ensure they match. If they do not, break out of the loop and return false. If we are able to whittle the string down to 0 or 1 characters, return true

### Performance Analysis

* O(n) time: We must loop through the string n/2 times in order to return false.
* O(1) space: We create a constant number of new variables (first and last) to solve the problem

## Recursive Solution

### Approach

Check the length of the string. If it is <= 1 characters, return true. If not, check if the first and last characters of the string match. If they do not, return false. If they match, slice them off the string and recurse.

### Performance analysis

* O(n) time: We must recurse through the string n/2 times in order to return false.
* O(n) space: We create n/2 additional calls on the recursive call stack, each time we slice of the first/last characters and recurse.
