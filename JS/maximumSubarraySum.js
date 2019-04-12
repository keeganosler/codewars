function greatestSum (arr) {
  var maxSum = 0
  for (var i=0; i<arr.length-1; i++) {
    if (arr[i]+arr[i+1] > maxSum) {
      maxSum = arr[i]+arr[i+1]
    }
  }
  console.log(maxSum)
}

greatestSum([1,2,3,4,5]) //should return 13
greatestSum([1,-2,-3,4,5]) //should return 9
