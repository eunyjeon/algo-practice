// --> n^2

// using 3 pointers
// this doesn't work for an array with duplicated values
// e.g., arrayThreeSum ([1,1,1,3,3,4,5], 7) --> [ [ 1, 3, 3 ], [ 1, 1, 5 ], [ 1, 1, 5 ], [ 1, 1, 5 ] ]

function arrayThreeSum (arr, targetSum) {
  arr.sort((a,b) => a-b)
  let result = []
  let second = Math.floor(arr.length/2)
  let first = 0
  let third = arr.length-1

  while (second > 0) {
    if (first === second || third === second) {
      second--
      first = 0
      third = arr.length-1
    }

    const currentSum = arr[first] + arr[second] + arr[third]
    if (currentSum > targetSum) {
      third--
    } else if (currentSum < targetSum) {
      first++
    } else {
      result = [... result, [arr[first], arr[second], arr[third]]]
      first++
      third--
    }
  }

  return result
}


