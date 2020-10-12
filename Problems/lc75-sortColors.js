/*
75. Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

Here, we will use the intergers 0,1, and 2 to represent the color red, white, and blue respectively.

- Could you come up with a cone-pass algo using only O(1) constant space?
*/

// FIXME: first attempt failed
// mistake 1. while condition - it should be 'less than or equal to'
// mistake 2. when to move pos - only when cur === 0 || cur === 1
// check the working code below

// var sortColors = function (nums) {
//   let afterZero = 0
//   let beforeTwo = nums.length - 1
//   let pos = 0

//   while (pos < beforeTwo) {
//     const cur = nums[pos]
//     if (cur === 0) {
//       let temp = nums[afterZero]
//       nums[afterZero] = cur
//       nums[pos] = temp
//       afterZero++
//     } else if (cur === 2) {
//       let temp = nums[beforeTwo]
//       nums[beforeTwo] = cur
//       nums[pos] = temp
//       beforeTwo--
//     }
//     pos++
//   }
//   return nums
// }

// TODO: Success

var sortColors = function (nums) {
  let afterZero = 0;
  let beforeTwo = nums.length - 1;
  let pos = 0;

  while (pos <= beforeTwo) {
    const cur = nums[pos];
    if (cur === 0) {
      nums[pos] = nums[afterZero];
      nums[afterZero] = cur;
      afterZero++;
      pos++;
    } else if (cur === 2) {
      nums[pos] = nums[beforeTwo];
      nums[beforeTwo] = cur;
      beforeTwo--;
    } else {
      pos++;
    }
    // console.log("nums ",nums)
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 2, 1, 1, 0, 1, 1, 1, 1, 0]));
console.log(sortColors([2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 0, 0, 0]));
console.log(sortColors([2, 0]));
console.log(sortColors([1, 0]));
console.log(sortColors([0, 2, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([0]));
console.log(sortColors([1]));
