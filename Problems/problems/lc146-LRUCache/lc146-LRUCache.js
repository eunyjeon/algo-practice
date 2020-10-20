/* Implement an LRU Cache

- get-> Time O(1)
- put-> Time O(1)

- LRU is a space heavy approach, that requires O(n) space
 */

// Approach 1. Doubly LInked List && Object
// Doubly Linked List for fast insertion and deletion
// Object for random access based on the given key

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // I will always add a new node to the end of the DLL
  // items at the end === recently used item
  // Insertion at the head or tail -> O(1)
  push(key, val) {
    let newNode = new Node(key, val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  // At first I thought about to use shift.
  // But I will always know which node to remove by
  // 1. checking this.list.head, which is LRU item; OR
  // 2. the key & value to be pushed
  remove(node) {
    // case 1. when this is the only node
    // case 2. when node === tail
    // case 3. when node === head
    // other
    if (!node.prev && !node.next) {
      this.head === null;
      this.tail === null;
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
    } else {
      let prev = node.prev;
      let next = node.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length--;
  }
}

var LRUCache = function (capacity) {
  this.map = {};
  this.cacheList = new DoublyLinkedList();
  this.capacity = capacity;
};

LRUCache.prototype.get = function (key) {
  let node = this.map[key];
  if (!node) return -1;
  this.cacheList.remove(node);
  this.map[key] = this.cacheList.push(key, node.val);
  return node.val;
};

LRUCache.prototype.put = function (key, value) {
  if (this.map[key]) this.cacheList.remove(this.map[key]);

  this.map[key] = this.cacheList.push(key, value); // this can create OR update.

  if (this.cacheList.length > this.capacity) {
    let LRUitem = this.cacheList.head;
    delete this.map[LRUitem.key];
    this.cacheList.remove(LRUitem);
  }
};
