# Hash Tables (= Hahs Maps)

## 194. Intro to Hash Tables

### Hash Table?

- Hash tables are used to sotre key-value pairs.
- The are like arrays, but the keys are not ordered.
- Unlike arrays, hash tables are fast for all the operations of finding, adding, and removing values
- Hash tables in the wild
  - Python: Dictionary
  - JS: Objects and Maps
  - Java, Go, & Scala: Maps
  - Ruby: Hashes

## 195. More about Hash Tables : Implementing Hash Tables without using built-in Objects and Maps

- To imlement a hash table, we'll be using an array.
- In order to look up values by key, we need a way to convert keys into valid array indices (which is an integer). -> done by a hash function.

## 196. Hash Funcitons

- E.g., Basic hash funcition that takes data of arbitrary size and spits out data of a fixed size
  - Often we cannot go back to the original value from the hashed value.

### What makes a good hash?

    1. Fast (i.e., constant time)
    2. Doesn't cluster outputs at specific indices, but distributes uniformly
    3. Deterministic (same input yields same output)

### E.g., Hash function for storing string/key in an array

    ```js
        function hash(key, arrayLen) {
          let total = 0
          for (let char of key) {
            let value = char.charCodeAt(0) - 96 // UTF-16 unit (97 for 'a', 98 for 'b') - 96 === the aphabet order
            total = (total + value) % arrayLen
          }
          return total
        }
    ```

- Problems with the current hash
      1. Only hashes strings (not our concern here)
      2. Not constant time - linear in key length
      3. Could be a little more random

### Refining the Hash Function above

    ```js
        function hash(key, arrayLen) {
          let total = 0
          let WEIRD_PRIME = 31
          for (let i=0; i < Math.min(key.length, 100); i++>) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % arrayLen
          }
          return total
        }
    ```

- **Prime Numbers**
  - The prime number in the hash is helpful in spreading out the keys more uniformly.
  - It's also helpul if the array that you'r putting values into has a *prime length*. (put into an array of the length of a prime number)

## 199. Handling Collisions

> Two common ways
>
> - Seperate chaing
> - Linear probing

### Seperate chaining

- When the collision happens, put all the values in the same index by chaining those values
- At each index in our array we store values using a more sophisticated data structure (e.g., an array or a linked list).
- This allows us to *store muliple key-value pairs at the same index*.

### Linear probing

- When we find a collision, we search through the array to find the *next empty slot*.
- Problem : It only allows us to store a certain number of items (the length of the array.)
  - What should we do if we run out of the space? Grow the table? Or delete exiting data?

## 200. Hash Table Set and Get

- Set method
  1. Accepts a key and a value
  2. Hashes the key
  3. Stores the key-value pair in the hash table array via separate chaining

- Get method
  1. Accepts a key
  2. Hashes the key
  3. Retrieves the key-value pair in the hash table
  4. If the key isn't found, returns undefined

    ```js
        class HashTable {
          constructor(size=53) {
            // this.keyMap will eventually looks like : [[[k1, v1], [k2, v2]], [[k3, v3]], undefined]
            this.keyMap = new Array(size)
          }

          _hash(key) {
            let total = 0
            let WEIRD_PRIME = 31
            for (let i=0; i < Math.min(key.length, 100); i++) {
              let char = key[i]
              let value = char.charCodeAt(0) - 96
              total += (total * WEIRD_PRIME + value) % this.keyMap.length
            }
            return total
          }

          set(key, value) {
            let index = this._hash(key)
            if (!this.keyMap[index]) {
              this.keyMap[index] = []
            }
            this.keyMap[index].push([key, value])
          }

          get(key) {
            let index = this._hash(key)
            if(this.keyMap[index]) {
              // needs to toop over an array at index
              for (let i=0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                  return this.keyMap[index][i][1] // return the corresponding value
                }
              }
            }
            return undefined
          }
        }
    ```

## 203. Hash Table Keys and Values

- Keys method
    1. Loops through the hash table array and returns an array of keys in the table
    2. For the duplicates, most languages overrides the previous value with the current key.

- Values method
    1. Loops through the hash table array and returns an array of values in the table
    2. How would you handle duplicate data?

```js
    // from the above
    class HashTable {
      // ...

      values() {
        let valuesArr = []
        for (let i=0; i<this.keyMap.length; i++) {
          if(this.keyMap[i]) {
            for (let j=0; j < this.keyMap[i].length; j++) {
              // handling duplicates
              if(!valuesArr.includes(this.keyMap[i][j][1])){
                valuesArr.push(this.keyMap[i][j])
              }
            }
          }
        }
        return valuesArr
      }
    }
```

## 205. Hash Table Big O Complexity

O(1) for insertion, deletion, access (average case - distributed uniformly)

### Recap

- Hash tables are collections of key-value pairs
- Hash tables can find values quickly given a key
- Hash tables can add new key-value quickly
- Hash tables store data in a large array, and work by hashing the keys
- A good hash should be fast, distribute keys uniformly, and be deterministic
- Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index.
  - Separate chaining involves storing them together in a nested structure in the same array index
  - Linear probing involves looking forward for the next empty slot.
