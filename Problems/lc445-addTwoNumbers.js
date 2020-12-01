/* Idea: Backtracking + Recursion
- not reversing the input lists
- getCarry is SOOOOO briliant!!!!
*/

var addTwoNumbers = function (l1, l2) {
  let l1Len = getLength(l1);
  let l2Len = getLength(l2);
  let offset = Math.abs(l1Len - l2Len);
  if (l2Len > l1Len) [l1, l2] = [l2, l1]; // l1 is always longer than l2
  let dummyHead = new ListNode(0);
  dummyHead.val = getCarry(l1, l2, dummyHead, offset);

  return dummyHead.val === 1 ? dummyHead : dummyHead.next;
};

function getCarry(l1, l2, node, offset) {
  if (l1 == null || l2 == null) return 0;
  node.next = new ListNode(0);
  let sum = 0;
  if (offset > 0) sum = l1.val + getCarry(l1.next, l2, node.next, offset - 1);
  else
    sum = l1.val + l2.val + getCarry(l1.next, l2.next, node.next, offset - 1);

  node.next.val = sum % 10;
  return parseInt(sum / 10); // return the carry
}

function getLength(root) {
  let len = 0;
  while (root) {
    len++;
    root = root.next;
  }
  return len;
}

/* My first attempt by reversing the input lists
 */

var addTwoNumbers = function (l1, l2) {
  let reversed1 = reverse(l1);
  let reversed2 = reverse(l2);
  let newHead = new ListNode();

  listBuilder(newHead, reversed1, reversed2);

  return reverse(newHead.next);
};

function listBuilder(prevNode, l1, l2, carry = 0) {
  if (!l1 && !l2) {
    if (carry === 1) {
      prevNode.next = new ListNode(1);
    }
    return;
  } else if (!l1) {
    return singleListBuilder(prevNode, l2, carry);
  } else if (!l2) {
    return singleListBuilder(prevNode, l1, carry);
  }

  let nodeSum = l1.val + l2.val + carry;
  let val;
  if (nodeSum >= 10) {
    val = nodeSum % 10;
    carry = 1;
  } else {
    val = nodeSum;
    carry = 0;
  }
  l1.val = val;

  prevNode.next = l1;
  return listBuilder(prevNode.next, l1.next, l2.next, carry);
}

function singleListBuilder(prevNode, list, carry) {
  if (carry === 0) {
    prevNode.next = list;
    return;
  } else {
    if (!list) {
      prevNode.next = new ListNode(1);
      return;
    }

    let tempVal = list.val + carry;
    if (tempVal >= 10) {
      list.val = 0;
      prevNode.next = list;
      return singleListBuilder(prevNode.next, list.next, 1);
    } else {
      list.val = tempVal;
      prevNode.next = list;
      return singleListBuilder(prevNode.next, list.next, 0);
    }
  }
}
