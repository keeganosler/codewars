/* determines if a given string is a panagram */

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function isPanagram (str) {
  var isCount = 0
  var strArr = str.split("")
  for(var i=0; i<letters.length; i++) {
    if(strArr.includes(letters[i])){
      isCount = isCount + 1
    } else {
      isCount = isCount
    }
  }
  if(isCount == 26) {
    return true
  }
  else{
    return false
  }
}

console.log(isPanagram("The quick brown fox jumps over the lazy dog"))
