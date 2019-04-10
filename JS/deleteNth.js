function deleteNth(arr, num) {
  var resArr = []
  for (var i=0; i<arr.length; i++) {
    if (!resArr.includes(arr[i])) {
      resArr.push(arr[i])
    } else {
      var times = checkDigits(resArr, arr[i])
      if(times < num) {
        resArr.push(arr[i])
      }
    }
  }
  return resArr
}

function checkDigits (arr, n) {
  var counter = 0
  for (var i=0; i<arr.length; i++) {
    if (arr[i] == n) {
      counter = counter + 1
    }
  }
  return counter
}

deleteNth([1,2,3,4,3,3], 2)
