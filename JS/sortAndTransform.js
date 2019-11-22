/* sorts a list of characters and transforms them to their ASCII values */

function sortAndTransform(arr){
  var ascArr = arr.sort(function(a,b){return a-b})
  var desArr = arr.sort(function(a,b){return b-a})
  var alphArr = convertToAscii(arr)
}

function convertToAscii(arr) {
  var asciiArr = []
  for(var i=0; i<arr.length; i++) {
    var a = String.fromCharCode(i)
    asciiArr.push(a)
  }
  return asciiArr
}

console.log(convertToAscii([65, 66, 67]))
