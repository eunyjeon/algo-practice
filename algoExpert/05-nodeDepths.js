/*
Node Depths

The distance between a node in a Binary Tree and the tree's root is called the node's depths.

Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
*/

// 1st attempt & Solution 1 using Recursion
// Average case: O(n) time | O(h) space when the tree is balanced
function nodeDepths(root) {
  // Write your code here.
  let result = 0;

  function calcDepths(node, level, sum) {
    if (node) {
      result += level;
      level++;
      calcDepths(node.left, level, sum + level);
      calcDepths(node.right, level, sum + level);
    }
  }

  calcDepths(root, 0, 0);
  return result;
}

// solution 2 - iteration
// Average case: O(n) time | O(h) space when the tree is balanced
function nodeDepths(root) {
  // Write your code here.

  let sumOfDepths = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (!node) continue;
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepths;
}
