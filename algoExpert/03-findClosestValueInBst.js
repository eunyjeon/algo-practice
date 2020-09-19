/*
Find Closest Value In BST

Write a function that takes in a Binary Search Tree and a target integer value
and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each BST node has an integer value, a left child node, and a right child node.
A node is said to be a valid BST node if and only if it satisfies the BST property:
its value is strictly greater than the values of every node to its left;
its value is less than or equal to the values of every node ot tis right;
and its children nodes are eigher valid BST nodes themselves or None/null.
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// first approach
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return helper(tree, target);
}

function helper(tree, target, closest = tree) {
  if (!tree) {
    return closest.value;
  }

  const currentDiff = Math.abs(tree.value - target);
  const closestDiff = Math.abs(closest.value - target);

  if (currentDiff < closestDiff) {
    if (target < tree.value) {
      return helper(tree.left, target, tree);
    } else {
      return helper(tree.right, target, tree);
    }
  } else {
    if (target < tree.value) {
      return helper(tree.left, target, closest);
    } else {
      return helper(tree.right, target, closest);
    }
  }
}

// solution 1 - recursion
// Average: // Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space
function findClosestValueInBst(tree, target) {
  // Write your code here.

  function helper(tree, closest) {
    if (!tree) return closest;

    if (Math.abs(target - tree.value) < Math.abs(target - closest))
      closest = tree.value;

    if (target === tree.value) {
      return tree.value;
    } else if (target < tree.value) {
      return helper(tree.left, closest);
    } else {
      return helper(tree.right, closest);
    }
  }

  return helper(tree, tree.value);
}

// solution 2 - iteration
// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space
function findClosestValueInBst(tree, target) {
  // Write your code here.
  let currentNode = tree;
  let closest = tree.value;

  while (currentNode) {
    if (Math.abs(target - currentNode.value) < Math.abs(target - closest))
      closest = currentNode.value;

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return closest;
}
