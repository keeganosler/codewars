function evennessDifference(arr) {
  var index
  for (var i=0; i<arr.length; i++) {
    if(arr[i]%2 != 0) {
      index = i + 1
    }
  }
  return index
}

console.log(evennessDifference([2,4,7,8,10]))
