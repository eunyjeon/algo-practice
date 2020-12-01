# Interview Questions

## Frequent Questions

### 1396. Design Underground System

- For the same idea, implemented 2 different approaches
    1. Approach 1 : To store travel times from station to station, I converted a pair of start station and end station into a string and used the string as a key for tarvelLogs hashmap.
    2. Approach 2 : Instead of converting start and end station names into a single string, I used a start station as a key and assigned nested hashmap to keep track of total time and the number of ids for each end station. -> FASTER than approach 1

- First approach
  - Slow. Not enough. Second approach is twice faster than this.

```js
var UndergroundSystem = function() {
    this.onTrain = {} // {id1: [startStation1, startTime]}
    this.travelLogs = {} // {'station1-station2' : [totalTime, riderNum]}
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    if (this.onTrain[id]) return false
    this.onTrain[id] = [stationName, t]
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if (!this.onTrain[id]) return false
    let startInfo = this.onTrain[id]
    delete this.onTrain[id]

    let iternary = startInfo[0] + "-"+ stationName
    if (this.travelLogs[iternary]) {
        this.travelLogs[iternary] = [this.travelLogs[iternary][0] + t - startInfo[1], this.travelLogs[iternary][1]+1]
    } else {
        this.travelLogs[iternary] = [t - startInfo[1], 1]
    }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let iternary = startStation + "-"+ endStation
    console.log(this.travelLogs[iternary])
    let average = this.travelLogs[iternary][0] / this.travelLogs[iternary][1]
    return average
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
```

- Second approach
  - This is faster than the first.
  - O(1) time for all 3 methods
  - **O(P + S^2) space**,where S is the number of stations on the network, and PP is the number of passengers making a journey concurrently during peak time.
    - The program uses two hashmaps. What would be the max sizes there could become?
    - For `onTrain` : when every id is on train (checked in) but not yet checked out. Therefore, the maximum size this HashMap could be is the maximum possible number of passengers making a journey at the same time. Therefore, the size of this HashMap is O(P).
    - For `travelTimes` : when every station has its destination. Over time, I could reasonably expect every possible pair of the `S` stations on the network to have an entry in this HashMap, which would be O(S^2).
    - Seeing as I don't know whether S^2 or P is larger, I need to add these together, giving a total space complexity of O(p + S^2)

```js
var UndergroundSystem = function() {
    this.onTrain = {} //
    this.travelTimes = {} // {"New York" : {"Brooklyn": [10, 1], {"Jersey City" : [50, 3]}}} for storing the times to all the destinations from New York station.
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.onTrain[id] = [stationName, t]
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let startStation = this.onTrain[id][0], startTime = this.onTrain[id][1]
    delete this.onTrain[id]

    if(this.travelTimes[startStation]) {
        let endStationObj = this.travelTimes[startStation]
        if(endStationObj[stationName]) {
            let curStation = endStationObj[stationName]
            endStationObj[stationName] = [curStation[0] + t - startTime, curStation[1] + 1]
        } else {
            endStationObj[stationName] = [t - startTime, 1]
        }
    } else {
        this.travelTimes[startStation] = {}
        this.travelTimes[startStation][stationName] = [t - startTime, 1]
    }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let total = this.travelTimes[startStation][endStation]
    return total[0] / total[1]
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
 ```

### 1472. Design Browser History

- Using an array vs linked list

- Array approach

```js
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage]
    this.curPage = 0
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    if(this.curPage !== this.history.length - 1) this.history = this.history.slice(0, this.curPage + 1)
    this.history.push(url)
    this.curPage++
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    if (this.curPage - steps < 0) {
        this.curPage = 0
    } else {
        this.curPage -= steps
    }
    return this.history[this.curPage]
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    if (steps + this.curPage < this.history.length) {
        this.curPage += steps
    } else {
        this.curPage = this.history.length - 1
    }
    return this.history[this.curPage]
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
```

- Linked list approach

```js
class BrowserHistory {
    constructor(homepage) {
        this.curPage = {
            url: homepage,
            prev: null,
            next: null
        }
    }

    visit(url) {
        this.curPage.next = {
            url: url,
            prev: this.curPage,
            next: null
        }
        this.curPage = this.curPage.next
    }

    back(steps) {
        // Be careful about the condition for the while loop.
        // this.curPage.prev, not this.curPage
        while(this.curPage.prev && steps) {
            this.curPage = this.curPage.prev
            steps--
        }
        return this.curPage.url
    }

    forward(steps) {
        while(this.curPage.next && steps) {
            this.curPage = this.curPage.next
            steps--
        }
        return this.curPage.url
    }
}
```

### 723. Candy Crush

- IDEA
    1. 3 steps
      1. Search through every row
      2. Search through every column
      3. Gravity (make stable) : crush the candy by setting all flagged board cells to zero
    2. Using `Math.abs`: If 3 consecutive cells have **the same absolute value**, make them negative. (Negative values === flagged)
    3. Only bring down values greater than 0 using a *sliding window* approach
      - Maintain read and write heads. As the read head iterates through the column in reverse order, when the read head sees candy, the write head will write it down and move one place. Then, the write head will write zeroes to the remainder of the column.
    4. Have a boolean var `removed` to recored if there were celled to crush -> it will determine the return value.

- O((R\*C)^2) time: where R, C is the number of rows and columns in board. We need O(R*C) to scan the board, and we might crush only 3 candies repeatedly.
    1. each function call scans the board 3 times so ti's 3(R*C).
    2. If we only crush 3 candies each time, the function will be called (R*C)/3 times.
    3. Multipling those 2 terms from 1 and 2 together give us O((R*C)^2).
    4. e.g., `[[3][3][2][2][1][1][1][2][3]]`

- Space Complexity: O(1)O(1) additional complexity, as we edit the board in place.

```js
/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    const rowNum = board.length
    const colNum = board[0].length
    let removed = false
    // check a row
    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            let val = Math.abs(board[i][j])

            if (
                val != 0  // don't forget to check if the val is 0
                && j + 2 < colNum
                && val === Math.abs(board[i][j+1])
                && val === Math.abs(board[i][j+2])
            ) {
                board[i][j] = -val
                board[i][j+1] = -val
                board[i][j+2] = -val

                removed = true
            }
        }
    }

    // check a column
    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            let val = Math.abs(board[i][j])

            if (
                val != 0
                && i + 2 < rowNum
                && val === Math.abs(board[i+1][j])
                && val === Math.abs(board[i+2][j])
            ) {
                board[i][j] = -val
                board[i+1][j] = -val
                board[i+2][j] = -val

                removed = true
            }
        }
    }

    // make stable
    for (let j = 0; j < colNum; j++) {
        let write = rowNum - 1
        for (let i = rowNum - 1; i >= 0; i--) {
            if (board[i][j] > 0) {
                board[write][j] = board[i][j]
                write--
            }
        }
        while (write >= 0) {
            board[write][j] = 0
            write--
        }
    }

    // I will return candyCrush with updated board if crushed candies
    return removed ? candyCrush(board) : board
};
```

### 1274. Number of Ships in a rectangle

### 430. Flatten a Multilevel Doubly Linked List

### 09. Remove All Adjacent Duplicates in String II

### 1029 Two City Scheduling

### 253 Meeting Rooms II

### 200 Number of Islands

### 987 Vertical Order Traversal of a Binary Tree

### 797 All Paths From Source to Target

### 1169 Invalid Transactions

### 1244 Design A Leaderboard

### 146 LRU Cache

### 394 Decode String

### 314 Binary Tree Vertical Order Traversal

### 380 Insert Delete GetRandom O(1)

### 98 Validate Binary Search Tree

### 140 Word Break II

### 387 First Unique Character in a String

### 56 Merge Intervals

### 242 Valid Anagram

### 79 Word Search

### 117 Populating Next Right Pointers in Each Node II

### 1188 Design Bounded Blocking Queue

### 1583 Count Unhappy Friends

### 128 Longest Consecutive Sequence

### 20 Valid Parentheses

### 1347 Minimum Number of Steps to Make Two Strings Anagram

### 488 Zuma Game

### 2 Add Two Numbers

### 333 Largest BST Subtree

### 425 Word Squares

### 155 Min Stack

### 399 Evaluate Division

### 1095 Find in Mountain Array

### 3 Longest Substring Without Repeating Characters

### 347 Top K Frequent Elements

### 139 Word Break

### 445 Add Two Numbers II

### 694 Number of Distinct Islands

### 924 Minimize Malware Spread

### 1429 First Unique Number

### 322 Coin Change

### 296 Best Meeting Point

### 1300 Sum of Mutated Array Closest to Target

### 991 Broken Calculator

### 535 Encode and Decode TinyURL

### 1060 Missing Element in Sorted Array

### 138 Copy List with Random Pointer

### 390 Elimination Game

### 173 Binary Search Tree Iterator

### 611 Valid Triangle Number

### 42 Trapping Rain Water

### 759 Employee Free Time

### 12 Integer to Roman

### 1366 Rank Teams by Votes

### 503 Next Greater Element II

### 126 Word Ladder II

### 621 Task Scheduler

### 115 Distinct Subsequences

### 450 Delete Node in a BST

### 731 My Calendar II

### 85 Maximal Rectangle

### 31 Next Permutation

- 3 steps
    1. Find an index `nums[i] < nums[i+1]`
    2. Swap nums[i] with an element just greater than it
    3. Reverse subarray[i+1, -1] to make the permutation just greater than the given one

- O(N) time: In worst case, only two scans of the whole array are needed (e.g, [1,5,4,3,2])

```js
[9, 6, 9, 5, 5] // [9,9,5,5,6]
[1,5,1] // [5,1,1]
[2,3,1,3,3] // [2,3,3,3,1] => [2,3,3,1,3]
```

```js
var nextPermutation = function(nums) {
    // start from length - 2
    let p = nums.length - 2

    while(p >= 0 && nums[p] >= nums[p+1]) {
        p--
    }

    if (p < 0) {
        // when no next permutation exists. e.g, [5,4,3,2]
        nums.sort((a, b) => a - b)
    } else {
        // finding an element just greater than nums[p]
        let j = p + 1

        while (nums[j] > nums[p]) {
            j++
        }
        // swap the two
        j--
        [nums[p], nums[j]] = [nums[j], nums[p]]

        // reverse subarray
        j = nums.length - 1
        p++
        while (p < j) {
            [nums[p], nums[j]] = [nums[j], nums[p]]
            p++
            j--
        }
    }
}
```

### 889 Construct Binary Tree from Preorder and Postorder Traversal

### 78 Subsets

### 460 LFU Cache

### 106 Construct Binary Tree from Inorder and Postorder Traversal

### 451 Sort Characters By Frequency

### 103 Binary Tree Zigzag Level Order Traversal

### 23 Merge k Sorted Lists

### 692 Top K Frequent Words

### 33 Search in Rotated Sorted Array

### 993 Cousins in Binary Tree

### 64 Minimum Path Sum

### 642 Design Search Autocomplete System

### 86 Partition List

### 384 Shuffle an Array

### 153 Find Minimum in Rotated Sorted Array

### 1123 Lowest Common Ancestor of Deepest Leaves

### 188 Best Time to Buy and Sell Stock IV

### 15 3Sum

### 127 Word Ladder

### 174 Dungeon Game

### 120 Triangle

### 463 Island Perimeter

### 315 Count of Smaller Numbers After Self

### 529 Minesweeper

### 116 Populating Next Right Pointers in Each Node

### 784 Letter Case Permutation

### 53 Maximum Subarray

### 301 Remove Invalid Parentheses

### 1249 Minimum Remove to Make Valid Parentheses

### 102 Binary Tree Level Order Traversal

### 332 Reconstruct Itinerary	37.3%	Medium

### 329 Longest Increasing Path in a Matrix	44.0%	Hard

### 395 Longest Substring with At Least K Repeating Characters	41.9%	Medium

### 441
Arranging Coins	42.2%	Easy

### 415
Add Strings	47.9%	Easy

### 1200
Minimum Absolute Difference	66.6%	Easy

### 41
First Missing Positive	33.1%	Hard

### 5
Longest Palindromic Substring	29.9%	Medium

### 560
Subarray Sum Equals K	43.9%	Medium

### 1038
Binary Search Tree to Greater Sum Tree	81.6%	Medium

### 362
Design Hit Counter
64.6%	Medium

### 713
Subarray Product Less Than K	40.3%	Medium

### 68
Text Justification	28.7%	Hard

### 662
Maximum Width of Binary Tree	40.1%	Medium

### 829
Consecutive Numbers Sum	39.4%	Hard

### 39
Combination Sum	58.2%	Medium

### 348
Design Tic-Tac-Toe
55.0%	Medium

### 216
Combination Sum III	59.5%	Medium

### 152
Maximum Product Subarray	32.4%	Medium

### 695
Max Area of Island	63.8%	Medium

### 199 Binary Tree Right Side View	55.2%	Medium

### 1
Two Sum

### 19
Remove Nth Node From End of List	35.4%	Medium

### 92
Reverse Linked List II	39.8%	Medium

### 658
Find K Closest Elements	41.4%	Medium

### 258
Add Digits	58.1%	Easy

### 14
Longest Common Prefix	35.8%	Easy

### 209
Minimum Size Subarray Sum	38.9%	Medium

### 207
Course Schedule	43.9%	Medium

### 371
Sum of Two Integers	50.6%	Medium

### 1266
Minimum Time Visiting All Points	79.2%	Easy

### 402
Remove K Digits	28.5%	Medium

### 328
Odd Even Linked List	56.6%	Medium

### 21
Merge Two Sorted Lists	54.8%	Easy

### 9
Palindrome Number	49.1%	Easy

### 121
Best Time to Buy and Sell Stock	51.1%	Easy

### 10
Regular Expression Matching	27.1%	Hard

### 222
Count Complete Tree Nodes	48.2%	Medium

49
Group Anagrams	58.3%	Medium
1025
Divisor Game	66.0%	Easy
297
Serialize and Deserialize Binary Tree	48.8%	Hard
172
Factorial Trailing Zeroes	38.1%	Easy
496
Next Greater Element I	64.8%	Easy
338
Counting Bits	70.0%	Medium
162
Find Peak Element	43.6%	Medium
105
Construct Binary Tree from Preorder and Inorder Traversal	50.5%	Medium
125
Valid Palindrome	37.5%	Easy
721
Accounts Merge	50.4%	Medium
129
Sum Root to Leaf Numbers	50.1%	Medium
863
All Nodes Distance K in Binary Tree	56.9%	Medium
134
Gas Station	40.6%	Medium
269
Alien Dictionary
33.4%	Hard
96
Unique Binary Search Trees	53.8%	Medium
54
Spiral Matrix	34.9%	Medium
76
Minimum Window Substring	35.4%	Hard
852
Peak Index in a Mountain Array	71.8%	Easy
518
Coin Change 2	51.1%	Medium
90
Subsets II	48.1%	Medium
55
Jump Game	34.9%	Medium
1047
Remove All Adjacent Duplicates In String	69.8%	Easy
160
Intersection of Two Linked Lists	42.0%	Easy
219
Contains Duplicate II	38.3%	Easy
665
Non-decreasing Array	19.6%	Easy
124
Binary Tree Maximum Path Sum	35.0%	Hard
528
Random Pick with Weight	44.3%	Medium
69
Sqrt(x)	34.5%	Easy
724
Find Pivot Index	44.7%	Easy
88
Merge Sorted Array	40.0%	Easy
40
Combination Sum II	49.5%	Medium
994
Rotting Oranges	49.4%	Medium
287
Find the Duplicate Number	56.7%	Medium
22
Generate Parentheses	64.2%	Medium
234
Palindrome Linked List	39.9%	Easy
704
Binary Search	53.8%	Easy
114
Flatten Binary Tree to Linked List	50.8%	Medium
438
Find All Anagrams in a String	44.3%	Medium
6
ZigZag Conversion	37.2%	Medium
240
Search a 2D Matrix II	43.6%	Medium
1480
Running Sum of 1d Array	89.7%	Easy
74
Search a 2D Matrix	37.1%	Medium
448
Find All Numbers Disappeared in an Array	56.0%	Easy
136
Single Number	66.1%	Easy
412
Fizz Buzz	63.4%	Easy
24
Swap Nodes in Pairs	51.6%	Medium
283
Move Zeroes	58.3%	Easy
230
Kth Smallest Element in a BST	61.6%	Medium
350
Intersection of Two Arrays II	51.8%	Easy
62
Unique Paths	55.2%	Medium
236
Lowest Common Ancestor of a Binary Tree	47.4%	Medium
34
Find First and Last Position of Element in Sorted Array	36.8%	Medium
198
House Robber	42.6%	Easy
4
Median of Two Sorted Arrays	30.4%	Hard
122
Best Time to Buy and Sell Stock II	57.9%	Easy
101
Symmetric Tree	47.6%	Easy
70
Climbing Stairs	48.3%	Easy
206
Reverse Linked List
---

## Must Know

### 46 Permutations

- DFS backtracking solution
  - O(n!) time : Roughly, N options in the 1st level of the tree, N-1 options in the second level of the tree, ... 1 option in the last level of the tree => O(N!) time

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * O(n!) time
 */
var permute = function(nums) {
    // init output list
    let output = []
    dfs_backtrack(nums, [], Array(nums.length).fill(false), output)
    return output
};

/**
 * @param {number[]} nums
 * @param {number[]} path : A list to represent permutation constructed so far
 * @param {number[]} used : A list to record which letters are already used
 */
function dfs_backtrack(nums, path, used, res) {
    if(path.length === nums.length) {
        res.push(Array.from(path))
        return;
    }

    for (let i=0; i<nums.length; i++) {
        // skip used nums
        if (used[i]) continue
        // add num to permutation, mark num as used
        path.push(nums[i])
        used[i] = true
        dfs_backtrack(nums, path, used, res)
        // remove num from permutation, make letter as unused
        path.pop()
        used[i] = false
    }
}
```

- Backtracking solution 2
  - which takes the index of the first integer to consider as an argument backtrack(first).
      1. If the first integer to consider has index n that means that the current permutation is done.
      2. Iterate over the integers from index first to index n - 1.
        - Place i-th integer first in the permutation, i.e. swap(nums[first], nums[i]).
        - Proceed to create all permutations which starts from i-th integer : backtrack(first + 1).
        - Now backtrack, i.e. swap(nums[first], nums[i]) back.

```js
var permute = function(nums) {
    let output = []
    let n = nums.length
    backtrack(n, nums, output, 0)
    return output
};

function backtrack(n, nums, output, first) {
    // if all numbers are used up
    if (first === n) output.push(Array.from(nums))

    for (let i=first; i<n; i++) {
        // place i-th integer first in the current permutation
        // [ nums[first], nums[i] ] = [ nums[i], nums[first] ]
        let temp = nums[first]
        nums[first] = nums[i]
        nums[i] = temp
        // use next numbers to complete the permutations
        backtrack(n, nums, output, first+1)
        // backtrack
        let temp1 = nums[first]
        nums[first] = nums[i]
        nums[i] = temp1
    }
}
```

### 47 Permutation II - duplicate numbers allowed

- Approach 1: DFS backtracking
  - A key insight to avoid generating any redundant permutation is that at each step rather than viewing each number as a candidate, **we consider each unique number as the true candidate**. For instance, at the very beginning, given in the input of [1, 1, 2], we have only two true candidates instead of three.

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
DFS Backtracking approach
- O(N!) time when each number in the array is unique (It takes NN steps to generate a single permutation. Since there are in total N!N! possible permutations, at most it would take us N \cdot N!N⋅N! steps to generate all permutations, simply assuming that there is no overlapping effort (which is not true).)
    - As one can see in the exploration graph we have shown earlier, the execution of the backtracking algorithm will unfold itself as a tree, where each node is an invocation of the recursive function backtrack(comb, counter). The total number of steps to complete the exploration is exactly the number of nodes in the tree. Therefore, the time complexity of the algorithm is linked directly with the size of the tree.
- O(N) space
    - O(N) hash table in worst case
    - O(N) space for the recursion
    - O(N) space for keeping a candidate of permutation along the way

*/
var permuteUnique = function(nums) {
    let res = []
    let count = {}

    // count the occurrence of each number
    for (let n of nums) {
        count[n] = (count[n] ? count[n] : 0) + 1
    }

    dfs_backtrack(nums, [], count, res)
    return res
};

function dfs_backtrack(nums, path, count, res) {
    if (nums.length === path.length) {
        res.push(Array.from(path))
    }

    for (let [key, val] of Object.entries(count)) {
        if (val === 0) continue

        // add this number into the current combination
        path.push(key)
        count[key]--

        // continue the exploration
        dfs_backtrack(nums, path, count, res)

        // revert the choice for the next exploration
        path.pop()
        count[key]++
    }
}
```
