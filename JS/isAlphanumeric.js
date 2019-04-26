/* determines if a string is alphanumeric */

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
var nums = '0123456789'.split('')

function isAlphanumeric (string) {
  var alphaNumeric
  if (string.length < 1) {
    alphaNumeric = false
  } else {
    for (var i=0; i<string.length; i++) {
      curr = string[i]
      if(!(alphabet.includes(curr) || nums.includes(curr))){
        alphaNumeric = false
      }
      else {
        alphaNumeric = true
      }
    }
  }
  return alphaNumeric
}

console.log(isAlphanumeric("here1111"))
