/*
21. Merge Two Sorted Lists\

Merge two sorted linked lists and return it as a new sorted list.
The new list should be made by splicing together the nodes of the first two lists.
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Using iteration
// Time O(n+m) : Because exactly one of l1 and l2 is incremented on each loop iteration, the while loop runs for a number of iterations equal to the sum of the lengths of the two lists. All other work is constant, so the overall complexity is lniear.
// Space o(1) : The iterative approach only allocates a few pointers, so it has a constant overall memory footprint.
const mergeTwoLists = function (l1, l2) {
  let prehead = new ListNode();
  let prev = prehead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      const currentNext = l1.next;
      prev.next = l1;
      l1 = currentNext;
    } else {
      const currentNext = l2.next;
      prev.next = l2;
      l2 = currentNext;
    }

    prev = prev.next;
  }

  if (l1) {
    prev.next = l1;
  } else {
    prev.next = l2;
  }

  return prehead.next;
};

//Using recursion
// Time O(n+m) : Because each recursive call increments the pointer to l1 or l2 by one (approaching the dangling null at the end of each list), there will be exactly one call to mergeTwoLists per element in each list. Therefore, the time complixity if linear in the combined soze of the lists.
// Space(n+m) : The first call to mergeTwoLists does not return until the ends of both l1 and l2 have been reached, so n + m stack frames consume O(n + m) space.
var mergeTwoLists = function (
  l1,
  l2,
  prehead = new ListNode(),
  prev = prehead
) {
  if (!l1) {
    prev.next = l2;
    return prehead.next;
  }

  if (!l2) {
    prev.next = l1;
    return prehead.next;
  }

  if (l1.val < l2.val) {
    prev.next = l1;
    return mergeTwoLists(l1.next, l2, prehead, prev.next);
  } else {
    prev.next = l2;
    return mergeTwoLists(l1, l2.next, prehead, prev.next);
  }
};

// Recursion without dummy head
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
