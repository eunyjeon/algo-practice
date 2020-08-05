# Best Time to Buy and Sell Stock

## Prompt
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

## Example Output
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

Input = [3,7,2,1]
Output: 4

## Test Cases
```js
const input = [7,1,5,3,6,4]
const input1 = [3,7,1,2]
const input2 = [7,6,4,3,1]

maxProfit(input)
maxProfit(input1)
maxProfit(input2)
```


## Solution
https://gist.github.com/cieltan/e4373054ee180793b3b1317cf0d138c7
