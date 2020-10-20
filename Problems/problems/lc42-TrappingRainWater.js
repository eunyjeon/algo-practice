/* 42. Trapping Rain Water

Given n non-negative intergers representing an elevation map where the width of each bbar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.


Input: height = [4,2,0,3,2,5]
Output: 9
*/

// THINK VERTOCALLY!

// 1. Brut force - practice this one
// O(n^2)
// Adding possible water for each idx using leftMax and rightMax of the current bar
var trap = function (height) {
  let res = 0;

  for (let i = 0; i < height.length; i++) {
    let leftMax = 0,
      rightMax = 0;
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j]);
    }
    for (let k = i; k < height.length; k++) {
      rightMax = Math.max(rightMax, height[k]);
    }
    res += Math.min(leftMax, rightMax) - height[i];
  }

  return res;
};

// 2. DP
/* steps

1. loop 0 - end and store current MaxValue in a leftMax array
2. loop end - 0 and store current maxValue in a rightMax array
3. Store min(leftMax[i], rightMax[i]) in another minValue array -> areas overlapped by the two - each bar === capacity
4. Sum minValue[i] - height[i] -> answer
 */

var trap = function (height) {
  if (!height || height.length === 0) return 0;

  let water = 0,
    hLen = height.length,
    leftMax = Array(hLen).fill(0),
    rightMax = Array(hLen).fill(0),
    curLeftMaxBar = height[0],
    curRightMaxBar = height[hLen - 1];

  leftMax[0] = curLeftMaxBar;
  rightMax[hLen - 1] = curRightMaxBar;

  for (let i = 1; i < hLen; i++) {
    curLeftMaxBar = Math.max(curLeftMaxBar, height[i]);
    leftMax[i] = curLeftMaxBar;
  }

  for (let j = hLen - 2; j >= 0; j--) {
    curRightMaxBar = Math.max(curRightMaxBar, height[j]);
    rightMax[j] = curRightMaxBar;
  }
  console.log(leftMax, rightMax);

  for (let i = 0; i < hLen; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return water;
};

// 3. Using 2 pointers -lPoint, rPoint & maxLeft, maxRight
// Gooooooodd!!!!!

/* Steps
- seperate cases

1. height[p1] < height[p2]
    - maxLeft <= height[p1] -> update maxLeft
    - OR min(maxLeft, height[p2]) - h1

*/
var trap = function (height) {
  let p1 = 0,
    p2 = height.length - 1,
    lMax = 0,
    rMax = 0,
    ans = 0;

  while (p1 < p2) {
    if (height[p1] < height[p2]) {
      if (lMax <= height[p1]) {
        lMax = height[p1];
      } else {
        ans += Math.min(lMax, height[p2]) - height[p1];
      }
      p1++;
    } else {
      if (rMax <= height[p2]) {
        rMax = height[p2];
      } else {
        ans += Math.min(rMax, height[p1]) - height[p2];
      }
      p2--;
    }
  }

  return ans;
};
