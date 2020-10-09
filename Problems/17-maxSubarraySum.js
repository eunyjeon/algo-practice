// Given an array of intergers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
// Sliding window pattern

function maxSubarraySum(arr, target) {
  if (arr.length < target) return null;
  let currentSum = 0;

  for (let i = 0; i < target; i++) {
    currentSum += arr[i];
  }
  let max = currentSum;

  for (let i = 1; i <= arr.length - target; i++) {
    currentSum = currentSum - arr[i - 1] + arr[i + target - 1];
    max = Math.max(currentSum, max);
  }

  return max;
}

console.log(maxSubarraySum([10, 20, 30, 40], 3)); // 90
console.log(maxSubarraySum([10, 20], 3)); // null
console.log(maxSubarraySum([10, 20, -10, 50], 2)); // 40

/*
Time O(N)
Space O(1)
*/
