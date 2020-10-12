// my first attempt using recursion

function multiplicative (num, memo = 0) {
  if (num >=0 && num <= 10) {
    return memo
  } else {
    let digits = []

    while(num > 0) {
      digits.push(num%10)
      num = Math.floor(num/10)
    }

    let newNum = 1
    for (let i = 0; i < digits.length; i++) {
      newNum *= digits[i]
    }

    return multiplicative (newNum, memo+1)
  }
}


// second attempt - also used recursion

function timesToGetSignleDigit (num, memo=0) {
  if(num < 10) return memo

  let numArr = String(num).split('')
  let newNum = 1

  for (let i=0; i<numArr.length; i++) {
    newNum *= +numArr[i]
  }

  if (newNum === 0) {
    return memo+1
  } else {
    return timesToGetSignleDigit(newNum, memo+1)
  }
}
