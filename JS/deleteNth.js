function deleteNth(arr, num) {
  var resArr = []
  for (var i=0; i<arr.length; i++) {
    if (!resArr.includes(arr[i])) {
      resArr.push(arr[i])
      console.log(resArr)
    } else {
      var counter = 0
      for (var j=0; j<resArr.length; j++) {
        if (resArr[j] == arr[i]) {
          counter = counter + 1
          if (counter < num) {
            resArr.push(arr[i])
          }
        }
      }
    }
  }
}

deleteNth([1,2,3,4,3,3], 2)
