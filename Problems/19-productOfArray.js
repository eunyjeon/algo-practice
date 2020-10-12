/*
Product of Array

This function takes an array of numbers and returns the product of them all.
 */

// First approach - Using an inner recursive helper function

function productOfArray(arr) {
  if (arr.length === 0) return 0;

  let product = 1;

  function helper(arr) {
    if (arr.length === 0) return product;
    product *= arr[0];
    return helper(arr.slice(1));
  }
  return helper(arr);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
