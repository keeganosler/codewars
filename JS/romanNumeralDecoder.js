/* decodes roman numerals into arabic numbers */

var numerals = ['I','V','X','L','C','D','M']
var nums = [1,5,10,50,100,500,1000]

function romanNumeralDecoder(str) {
  var sum = 0
  for(var i=0; i<str.length; i++) {
    if(!numerals.includes(str[i])){
      console.log('not a roman numeral!')
    } else {
      var sum = sum + nums[numerals.indexOf(str[i])]
    }
  }
  return sum
}

console.log(romanNumeralDecoder('XXI'))
