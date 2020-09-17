// new reversedLinkedlist

const mkNode = (value, next = null) => ({ value, next })
const nums = mkNode(1, mkNode(2, mkNode(3))) // {1, {2, {3, null}}}

const returnReversed = (list, newList=null) => {
  if(!list) {
    return newList
  }
  const newNode = mkNode(list.value, newList) // 1, {2, {3, null}}
  return returnReversed(list.next ,newNode)
}

// console.log(returnReversed(nums))


// const reversedList = head => {
//   if (!head) {
//     return reversedList(head.next)}
//   console.log(head.value)
// }



// reversedList(nums)

// SOLUTION:
const logReversed = list => {
    if (list) {
    logReversed(list.next)
    console.log(list.value)
    }
}

logReversed(nums)

// reversedList(nums)

//hello

// singly linked list value next
// log val in reverse
// mutating list X
// var, func

// link of new nodes
// for loop not allowed
///////////////////

// 1->2->3->4
// log 4,3,2,1


// head.val, head.next

//
