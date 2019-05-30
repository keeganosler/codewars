function persistence(num) {
  var numStr = num.toString()
  var prod = 1
  if(numStr.length > 1) {
    for(var i=0; i<numStr.length; i++) {
      var prod = prod*numStr[i]
    }
    if(prod.length > 1) {
      prod = persistence(prod)
    }
  }
  return prod
}

console.log(persistence(39))
