/* finds the longest substring of string 1 contained in string 2 */

function longest(str1, str2) {
  var resArr = []
  for(var i=0; i<str1.length; i++) {
    if(!resArr.includes(str1[i])){
      resArr.push(str1[i])
    }
  }
  for(var i=0; i<str2.length; i++) {
    if(!resArr.includes(str2[i])) {
      resArr.push(str2[i])
    }
  }
  return resArr.toString()
}

console.log(longest('aaddhgb', 'fffkklrl'))
