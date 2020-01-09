const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

function stringMath(str) {
  var numsToUse = []
  for (var s of str) {
    if (nums.includes(s)) {
      numsToUse.push(parseInt(s))
    }
    
  }
}

stringMath('1plus1plus2')
