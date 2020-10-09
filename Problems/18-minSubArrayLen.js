/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

- Sliding window
*/

// My approach - this seems better then the given solution.
function minSubArrayLen(nums, sum) {
  let total = 0;
  let p1 = 0;
  let p2 = 0;
  let minLen = Infinity;
  let tempLen = 0;

  while (p2 <= nums.length) {
    if (total >= sum) {
      minLen = Math.min(minLen, tempLen);
      total -= nums[p1];
      p1++;
      tempLen--;
    } else {
      total += nums[p2];
      p2++;
      tempLen++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// Solution
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 95)); // 0

/*
My approach seems cleaner than the given solution.
O(N) time complexity
 */
