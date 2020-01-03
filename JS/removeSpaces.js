function removeSpaces(str) {
  str = str.replace(/\s/g, '')
  return str
}

console.log(removeSpaces('hello there'))
