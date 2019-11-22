function textEditor(arr) {
  var text = []
  for(var i=0; i<arr.length; i++) {
    for(var j=0; j<arr.length+1; j++) {
      text.push(j.toString() + ': ' + arr[i].toString())
    }
  }
  return text
}

console.log(textEditor([1,2,4]))
