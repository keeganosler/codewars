function multiplyDigits(num) {
  var res = 1
  var numStr = num.toString()
  if(numStr.length == 1) {
    res = res*numStr
  } else {
    for(var i=0; i<numStr.length; i++) {
      res = res*numStr[i]
    }
  }
  return res
}

function persistence(num) {
  var count = 1
  var prod = multiplyDigits(num)
  var len = prod.toString().length
  if(len > 1) {
    prod = multiplyDigits(prod)
    count = count + 1
  }
  return count
}

console.log(persistence(39))
