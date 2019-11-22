/* finds the innermost (middle) substring in a string
   one letter if its an odd length string
   two letters if its an even length string */

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
