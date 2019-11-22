/*detects the difference in evenness */

console.log(evennessDifference([2,4,7,8,10]))

function evennessDifference(arr) {
  var evenCount, oddCount = 0
  var index
  for(var i=0; i<arr.length; i++) {
    if(arr[i]%2 == 0) {
      evenCount = evenCount + 1
    } else {
      oddCount = oddCount + 1
    }
  }
  if(evenCount > oddCount) {
    for(var i=0; i<arr.length; i++) {
      if(arr[i]%2 != 0) {
        index = i + 1
      }
    }
  } else {
    for(var i=0; i<arr.length; i++) {
      if(arr[i]%2 == 0) {
        index = i + 1
      }
    }
  }
  return index
}
