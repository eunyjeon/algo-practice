# LRU(Least Recently Used) Cache

## LRU

- a Cache eviction policy
- Similar to the FIFO policy except we are using it for cache
- When there are items `1-2-3-4` from the most recently used to the least recently used.
  - If you use 2, then the cache will be `2-1-3-4`
  - When the cache grows to go over its size, it will **remove the least recently used item(=tail)**, which is `4`

## Cache

- Stores data to speed up the same future requets
- Maybe a pervious computation or a reducdant copy of data

### LRU Cache Implementation

- Fast lookup && fast removal requied -> Time O(1) -> **Hash Table && Doubly Linked List**
  - Hash table: For fast lookup (a set of keys where we can hash them -> fast lookuped based those keys and a hash function)
  - Doubly linked list: For fast removal
      1. If we have instant access to a doubly linked list node, we can remove it in constant time b/c I/a node can touch my next node and previous node, and remove myself. *If it were a singly linked list, I won't have access to my previous node and it would take O(n) time to find my previous.*
      2. *We can prevent ourselves from having to resize an array*. If we use a linear structure like an array for this, we need to shift all the elements over when remove an item. But with a linked list, it is an abstraction of pointers between objects so we don't have to shift items and it prevents us from doing linear work during resizing.
- It is a space heavy approach(O(n))

- When we add/put an item, it will be added to the front because it is the most recently accessed/used item.
- If a key already exists, we updates it with a new value && move it to `head.next`
- If you get an item, it will be moved to `head.next` because it is recently accessed.

> Anytime you interact with a node, it will be moved to the front.
