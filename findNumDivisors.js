function findNumDivisors(n) {
  var count = 0
  for(var i=0; i<=n; i++) {
    let d = n/i
    if(d%1 == 0) {
      count++
    }
  }
  return count
}

console.log(findNumDivisors(3))
console.log(findNumDivisors(21))
console.log(findNumDivisors(40))
