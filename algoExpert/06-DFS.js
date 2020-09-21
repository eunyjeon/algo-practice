/*
Depth-first Search

You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.

Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.
*/

// // test case

// const graph = new Node('A');
// graph.addChild('B').addChild('C').addChild('D');
// graph.children[0].addChild('E').addChild('F');
// graph.children[2].addChild('G').addChild('H');
// graph.children[0].children[1].addChild('I').addChild('J');
// graph.children[2].children[0].addChild('K');

// graph.depthFirstSearch([])

// 1st approach using the iteration
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    let queue = [this];

    while (queue.length > 0) {
      const node = queue.shift();
      array.push(node.name);
      if (node.children.length) queue = [...node.children, ...queue];
    }

    return array;
  }
}

// solution 2
// O(v+e) time | O(v) space complexity
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
