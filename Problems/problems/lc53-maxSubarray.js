/*
53. Max Subarray sum(https://hackernoon.com/kadanes-algorithm-explained-50316f4fd8a6)
 */

// Both Greedy and DP use the same logic: either start at the current index or add the current element to the previous sum.

// Greeady approach
// local max vs. global max
// localMax = max(localMax + nums[i], nums[i]) -> always consider the local last elem
var maxSubArray = function (nums) {
  if (!nums || nums.length === 0) return undefined;
  let curSum = nums[0],
    maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSum = Math.max(curSum, maxSum);
    console.log(curSum, maxSum);
  }
  return maxSum;
};

// DP approach (Kdane's algo: Given an array, the algo to find the max sub sum)
// Take an array dp[] where each dp[i] denotes maximum subarray sum ending at index i (including i). We can say:
//    dp[i] = max(dp[i-1], 0) + arr[i] (i : 1~n-1)
//    base condition: dp[0] = arr[0]
// the max of denotes that we're starting anew from the current element

// Below is time O(N) and space O(1) cuz it modifies the input arr nums.
// Or we can have a dp array that stores the local sum for each i (space O(N))
var maxSubArray = function (nums) {
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i - 1] + nums[i]);
    maxSum = Math.max(nums[i], maxSum);
  }
  return maxSum;
};

// DP with the same logic without editing the input arr
var maxSubArray = function (nums) {
  let curMax = -Infinity,
    totalMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    curMax = Math.max(curMax, 0) + nums[i];
    totalMax = Math.max(curMax, totalMax);
  }

  return totalMax;
};
