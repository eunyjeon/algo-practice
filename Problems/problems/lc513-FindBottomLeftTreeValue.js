/*
lc513. Find Bottom Left Tree Value

Give a binary tree, find the leftmost value in the last row of the tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Approach 1. BFS
// Using a queue AND another array called level to store nodes on the level.
// Only when the queue is empty, nodes in the level will be move to to queue. The 1st item in level is the current left most node at the bottom.

var findBottomLeftValue = function (root) {
  let queue = [root];
  let level = [];
  let leftMost = root;

  while (queue.length > 0) {
    let node = queue.shift();
    if (node.left) level.push(node.left);
    if (node.right) level.push(node.right);

    if (queue.length === 0 && level.length > 0) {
      queue = level;
      leftMost = level[0];
      level = [];
    }
  }

  return leftMost.val;
};

// Approach 2. DFS Pre-Order
// This solution does a preorder traversal and keeps track of the depth of the current result. If the depth is surpassed, then the leftmost node on the next layer has been found.

var findBottomLeftValue = function (root) {
  let resVal = root.val;
  let resLevel = 0;

  function dfsPreOrder(node, level) {
    if (node === null) return;
    if (level > resLevel) {
      resVal = node.val;
      resLevel = level;
    }
    if (node.left !== null) dfsPreOrder(node.left, level + 1);
    if (node.right !== null) dfsPreOrder(node.right, level + 1);
  }

  dfsPreOrder(root, 0);
  return resVal;
};
