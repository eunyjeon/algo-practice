/*
lc300 - Longest Increasing Subsequence

Given an unsorted array of intergers, find the length of longest increasing subsequence.

Your algorithm should run in O(n^2) time complexity.
 */

// DP bottom-up solution
// Time O(N^2) | Space O(n)
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  let lenArr = Array(nums.length).fill(1);

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (nums[i] < nums[j]) {
        lenArr[j] = Math.max(lenArr[i] + 1, lenArr[j]);
      }
    }
  }

  return Math.max(...lenArr);
};

// DP with Binary search
// Time O(NlogN) | Space O(N)

console.log(lengthOfLIS(10, 9, 2, 5, 3, 7, 101, 18)); //4
