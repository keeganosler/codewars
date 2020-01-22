function reversedSequence(n) {
  var arr = []
  for(var i=n; i>0; i--) {
    arr.push(i)
  }
  return arr 
}

console.log(reversedSequence(5))
console.log(reversedSequence(21))
