// first attempt using nested loops

const maxProfit = prices => {
  let profit = 0
  let i=0
  while (i < prices.length-1) {
    for (let j=i+1; j<prices.length; j++) {
      const diff= prices[j]-prices[i]
      if(diff > profit) profit = diff
    }
    i++
  }

  return profit
} // time O(n^2) | space O(1)

// optimal solution
const maxProfit = prices => {
  let minVal = Infinity
  let maxProfit = 0

  for (let i=0; i<prices.length; i++) {
    if (prices[i] < minVal) minVal = prices[i]

    const currentProfit = prices[i] - minVal
    if (currentProfit > maxProfit) maxProfit = currentProfit
  }

  return maxProfit
} // time O(n) | space O(1) + O(1) = O(1)





