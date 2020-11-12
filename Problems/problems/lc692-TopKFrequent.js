/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

const { isInterfaceType } = require("graphql");

// 1-1. Sorting & Hash
// var topKFrequent = function(words, k) {
//     let hash = {}
//     let res = []

//     for (let w of words) {
//         hash[w] = hash[w] ? hash[w] + 1 : 1
//     }

//     for (let [w, o] of Object.entries(hash)) {
//         if(res[o]) {
//             res[o].push(w)
//             res[o].sort()
//         } else {
//             res[o] = [w]
//         }
//     }

//     return res
//         .filter(e => !!e)
//         .reverse()
//         .join(',')
//         .split(',')
//         .slice(0,k)

// }

// 1-2. Sorting & Map
// Time O(N*logN) : I sorted the input words in O(N*logN) time, then counted the frequency of each word in O(N) time.
// Space O(N) : the space used to store count and candidates
var topKFrequent = function (words, k) {
  let map = new Map();
  let res = [];

  words.sort();

  for (let w of words) {
    if (map.has(w)) {
      map.set(w, map.get(w) + 1);
    } else {
      map.set(w, 1);
    }
  }

  for (let [w, o] of map) {
    if (res[o]) {
      res[o].push(w);
    } else {
      res[o] = [w];
    }
  }

  return res
    .filter((e) => e)
    .reverse()
    .join(",")
    .split(",")
    .slice(0, k);
  console.log(map);
};

// 2. Nice Sorting trick [https://leetcode.com/problems/top-k-frequent-words/discuss/444221/JavaScript-Solution]
/* Idea
1. Build a hash and count the frequency
2. Sort the hash using frequency or compare strings
3. Return the top k results */

var topKFrequent = function (words, k) {
  let hash = {};
  for (let word of words) {
    hash[word] = hash[word] + 1 || 1;
  }
  let result = Object.keys(hash).sort((a, b) => {
    let countCompare = hash[b] - hash[a];
    if (countCompare == 0) return a.localeCompare(b);
    else return countCompare;
  });
  return result.slice(0, k);
};


// 3. Using Heap

class MaxHeap() {
  constructor() {
    this.heap = []
  }

  insert(tuple) {
    this.heap.push(tuple)
    heapifyUp()
  }

  heapifyUp() {
    let idx = this.heap.length - 1
  }
}
