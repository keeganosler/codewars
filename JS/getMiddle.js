function getMiddle(str) {
  var subStr
  if(str.length%2 == 0) {
    var mid = str.length / 2 
    subStr = str.slice(mid-1, mid+1)
  } else {
      var mid = str.length / 2
      var lower = Math.floor(mid)
      var upper = Math.ceil(mid)
      subStr = str.slice(lower, upper)    
  }
  return subStr
}

console.log(getMiddle("erin"))
console.log(getMiddle("erino"))
