/*
Branch Sums

Wriite a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all vlues in a Binary Tree banch. A BT branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
*/

// 1st attempt : failed to pass all cases.
// has an issue if a tree has nodes with the same value.

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let result = [];
  let visited = { 0: 0 };

  function helper(node, parent = 0) {
    if (node) {
      visited[node.value] = node.value + visited[parent];

      if (!node.left && !node.right) {
        result.push(visited[node.value]);
      }

      helper(node.left, node.value);
      helper(node.right, node.value);
    } else {
      return;
    }
  }

  helper(root);
  return result;
}

// working solution
// O(n) space complexity | O(n) time complexity
function branchSums(root) {
  // Write your code here.
  let result = [];
  addValues(root, 0, result);
  return result;
}

function addValues(node, currentSum, result) {
  if (node) {
    const newSum = node.value + currentSum;
    if (!node.left && !node.right) {
      result.push(newSum);
    }
    addValues(node.left, newSum, result);
    addValues(node.right, newSum, result);
  }
}
