function removeSmallest(numbers) {
  var minNum = 100000000000000000
  var minInd
  for(var i=0; i<numbers.length; i++) {
    if(numbers[i] < minNum) {
      minNum = numbers[i]
      minInd = i
    }
  }
  var newNum = numbers.slice(minInd)
  return newNum
}
