// O(n)
const pairSum1 = (arr, sum) => {
  if (arr.length <=1) return false

  for (let i=0; i<arr.length; i++) {
    const currentVal = arr[i]
    if(currentVal >= sum) return false

    const diff = sum - currentVal

    for (let j=i+1; j<arr.length; j++) {
      if(arr[j] === diff) {
        return true
      }
    }
  }
  return false
}

// Only works with sorted arrays
const pairSum2 = (arr, sum) => {
  if (arr.length <= 1 || arr[0] >= sum) return false

  let firstIdx=0
  let secondIdx=arr.length-1

  while (firstIdx !== secondIdx) {
    if(arr[firstIdx] + arr[secondIdx] === sum) {
      return true
    } else if (arr[firstIdx] + arr[secondIdx] < sum) {
      firstIdx++
    } else {
      secondIdx--
    }
  }
  return false
}

// using hash
// mapSolution -> space complexity increased
function pairSum(arr, sum) {
  const targetMap = {}

  for (let i = 0; i < arr.length; i++) {
    const target = sum - arr[i]

    if (targetMap[arr[i]]) {
      return true
    } else {
      targetMap[target] = true
    }
  }
  return false
}

// pairSum([1, 1, 2, 3, 4, 5], 7) -> true (either 2+5 or 3+4)
// pairSum([1, 2, 3, 4, 5], 10) -> false
// pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
// pairSum([1, 2, 3, 7, 8], 7) -> false
// pairSum([-2, 0, 4, 6, 10], 8) -> true (-2 + 10)
// pairSum([1, 2, 3, 4, 5], 2) -> false


//* DO THIS WAY *//
// using hash func
// from algoexpert
function twoNumberSum(array, targetSum) {

	const pairs = hashFunc(array, targetSum)

	for (let i=0; i<array.length; i++) {
		const currentVal = array[i]
		const targetVal = targetSum - currentVal
		if (pairs[targetVal] && currentVal !== targetVal) return [currentVal, targetVal]
	}

	return []
}

function hashFunc(array, targetSum) {
	let obj = {}

	for (let i=0; i<array.length; i++) {
		obj[array[i]] = targetSum - array[i]
	}

	return obj
}

