// using for loop
const isPal = str => {
  const len = str.length
  const upperStr = str.toUpperCase()
  for (let i=0; i <= len/2; i++) {
    if (upperStr[i] !== upperStr[len-1-i]) {
      return false
    }
  }

  return true
}


// using while loop
const isPal = str => {
  while (str.length > 1) {
    let first = str[0].toUpperCase()
    let last = str[str.length-1].toUpperCase()
    if (first !== last) return false
    str = str.slice(1, length-1)
  }
  return true
}


// using recursion
const isPal = str => {
  str = str.toUpperCase()
  if(str.length === 1 || str.lenth === 0) return true
  // if(str.length === 2 && str[0] === str[1]) return true

  if(str[0] === str[str.length-1]) {
    return isPal(str.slice(1, str.length-1))
  } else {
    return false
  }
}

// isPal('car')
// isPal('racecar')
// isPal('RaCecAr')
// isPal('!? 100 ABCcba 001 ?!')
