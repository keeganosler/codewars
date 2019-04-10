function arrString (aVar) {
  if (typeof(aVar) === "string") {
    return stringToArray(aVar)
  } else if (typeof(aVar) === "object") {
    return arrayToString(aVar)
  } else {
    console.log("Please enter either a string or an array")
  }
}

function stringToArray(str) {
  
}

function arrayToString(arr) {
  var newString = ""
  if (arr.length < 3) {
    console.log("Error: array not long enough")
  } else {
    for (var i=0; i<arr.length; i++) {
      var numString = arr[i].toString()
      if (newString === "") {
        newString = numString
      } else {
        newString = newString.concat(numString)
      }
    }
  }
  return newString
}

arrString([1,2,3,4])
