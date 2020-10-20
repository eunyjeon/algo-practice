/* 2. Add Two Numbers

u are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.


Input: l1 = [0], l2 = [0]
Output: [0]


Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

*/

// First Attempt

var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  let carry = 0, // carry will be 0 or 1 cuz the largest possible sum of two digits is 19(=9+9+1)
    fNode = new ListNode(0), //dummy head
    cur = fNode,
    p1 = l1,
    p2 = l2;

  while (p1 || p2) {
    let sum = 0;
    if (p1 && p2) {
      sum = p1.val + p2.val;
      p1 = p1.next;
      p2 = p2.next;
    } else if (!p2) {
      sum = p1.val;
      p1 = p1.next;
    } else if (!p1) {
      sum = p2.val;
      p2 = p2.next;
    }

    sum += carry;
    if (sum >= 10) {
      cur.next = new ListNode(sum - 10); // make sure to substract by 10
      carry = 1;
    } else {
      cur.next = new ListNode(sum);
      carry = 0;
    }
    cur = cur.next;
  }

  if (carry === 1) cur.next = new ListNode(carry);

  return fNode.next;
};

// We begin by summing the "least-significant digits", which is the head of l1 and l2
// Since each digit is in the range of 0 to 9, summing two digits may "overflow" (e.g., 7+5)
// Used 3 pointers & dummy head
// Before returning solution, check if carry is 1 -> if 1, add a new node at the end

// Same logic with cleaner syntax
var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  let result = new ListNode();
  const tmp = result;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = parseInt(sum / 10);
    sum = sum % 10;

    result.val = sum;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;

    result.next = l1 || l2 || carry ? new ListNode() : null;
    result = result.next;
  }

  return tmp;
};
