function getAsciiChar(str) {
  var code 
  if(str.length > 1) {
    console.log('not a single character!')
    code = 0
  } else {
    code = str.charCodeAt(0)
  }
  return code
}

console.log(getAsciiChar('H'))
