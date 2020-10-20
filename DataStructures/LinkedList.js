// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// Singly Linked List
// Methods: push && pop
// 1. Push : when a list is empty OR not empty
// 2. Pop : Removing a node from the end of the Linked list
class SinglyLinkedList {
  constructor() {
    this.head = null // head & tail : pointers
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    this.head = newNode
      if(!this.head) {
      this.tail = this.head
      this.length++
    } else {
      this.tail.next =newNode
      this.tail = this.tail.next
      this.length++
    }
    return this
  }

  // How would you access to the second last item in singly linked list? (there's no prev!)
  pop() {
    // cover edge cases!!
    // edge case 1. when the code is empty
    if (!this.head) return undefined

    let cur = this.head
    let newTail = cur

    while(cur.next) {
      newTail = cur
      cur = cur.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--

    // edge case 2. when the list becomes empty
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return cur


    // let removed = this.tail
    // let cur = this.head
    // while (cur.next) {
    //   cur = cur.next
    // }
    // cur.next = null
    // this.tail = cur
    // return removed
  }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
// console.log(first)

let myList = new SinglyLinkedList()
myList.pus("HELLO")
myList.pus("GOODBYE")
