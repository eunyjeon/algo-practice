/* 206. Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

- write 2 different solutions with the iteration and recursion.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 1. Iterative solution - version 1 using dummy head
// O(n) time complexity || O(1)
// While traversing the list, changed the current node's next pointer to point to the new head's next point

var reverseList = function (head) {
  let newHead = new ListNode(),
    curNode = head,
    nextNode;

  while (curNode) {
    nextNode = curNode.next;
    curNode.next = newHead.next;
    newHead.next = curNode;
    curNode = nextNode;
  }
  return newHead.next;
};

// 1. Iterative solution - version 2
// O(n) time complexity || O(1)
// While traversing the list, change the current node's next pointer to point to its previous node.
// Since a node does not have ref to its prev node, I must store its previous elem beforehand.
// I also used another pointer nextTemp to store the node's current next node before changing the reference.
// Ant at the end, I will return PREV!!!
var reverseList = function (head) {
  let cur = head,
    prev = null;

  while (cur) {
    let nextTemp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextTemp;
  }

  return prev;
};

var reverseList = function (head) {};

// 2. Recursive solution
// Assume the list is n1 -> n2 -> ... -> -> n(k-1) -> nk -> n(k+1) -> nm -> null
// If I already reversed some of its nodes: n1 -> n2 -> ... -> -> n(k-1) -> nk -> **n(k+1)** <- nm <- null
// Now I want n(K+1)'s next node to point to nk. So,
// *************
// nk.next.next = nk  ---> The current node's next node's next node will be the CURRENT NODE.
// *************
// After doing this, I have to set nk.next = null. Or, the list has a cycle in it.

var reverseList = function (head) {
  if (!head || !head.next) return head;

  let res = reverseList(head.next);

  head.next.next = head;
  head.next = null;
  return res;
};
