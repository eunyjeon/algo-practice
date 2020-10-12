/*
someRecursive

This recursive function accepts an array and a callback function. The function returns true if a single value in the array returns true when passed to the callback. Otherwise return false
 */

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// My approach
function someRecursive(arr, cb) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return false;
  return cb(arr[0]) ? true : someRecursive(arr.slice(1), cb);
}
