# Analyzing Peformance of Arrays and Objects

- How objects and arrays work, through the lens of Big O
- Why adding elements to the beginning of an array is costly
- Compare and contrast the ructime for arrays and objects, as well as built-in methods

## 14. The Big O of Objects

> Undordered DB storing data in key-value pairs

- When to use Objects
  - When you don't need order
  - When you need fast access/insertion and removal

- Big O of Objects
  - O(1) : Insrtion / Removal / Access
  - O(n) : Searching when n is the # of keys

- Bing O of Object methods
  - O(1) : obj.hasOwnProperty(key)
  - O(n) : Object.keys, Object.values, Object.entries

## 15 - 16. The Big O of Arrays

- When to use arrays
  - When you need order
  - When you need fast access/insertion and removal (not really..)

- Big O of Arrays
  - Depends on situ : Insertion / removal
    - If you add/remove an item at idx 0, you have reindex everything -> time
  - O(1) : Access
  - O(n) : Searching

- Big Of Array methods
  - O(1) : push / pop
  - O(N*logN) : sort
  - O(n) : shift / unshift / concat / slice / splice AND forEach / map / filter / reduce / etc.
    - concat : O(n+m) precisely speaking.
    - splice: it depends on the index, but in general O(n)
