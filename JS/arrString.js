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
  
}
