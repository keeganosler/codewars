/* revereses each word in a given string */

function reverseEachWord(str){
  var words = str.split(" ")
  var wordsReversed = []
  for(var i =0; i<words.length; i++) {
    wordsReversed.push(reverseString(words[i]))
  } 
  var reversedWords = wordsReversed.join(" ")
  return reversedWords
}

function reverseString(str) {
  var split = str.split("")
  var revArr = split.reverse()
  var arr = revArr.join("")
  return arr
}

console.log(reverseEachWord("hello there"))
