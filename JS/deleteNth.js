function deleteNth(arr, num) {
  var sortedArr = arr.slice().sort()
  console.log(sortedArr)
  var resArr = []
  for (var i=0; i<sortedArr.length-1; i++) {
    var counter = 1
    resArr.push(arr[i])
    if (sortedArr[i+1] == sortedArr[i]) {
      counter = counter + 1 
      if (counter >= num) {
        resArr.push(arr[i])
      }
    }
  }
  console.log(resArr)
}

deleteNth([1,2,3,4,3,3], 2)
