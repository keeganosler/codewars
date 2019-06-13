function supermarketQueue(arr, n) {
  var totalTime
  if(n == 1) {
    totalTime = sumArr(arr)
  }
  return totalTime
}

function sumArr(arr) {
  var sum = 0
  for(var i=0; i<arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum
}

console.log(supermarketQueue([10,3,3,2], 1))
