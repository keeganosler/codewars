/* finds all the vowels in a given string */

function findVowels (str) {
  var vowels = ['a','e','i','o','u','A','E','I','O','U']
  var vowelCounter = 0
  for (var i=0; i<str.length; i++) {
    if (vowels.includes(str[i])){
      vowelCounter = vowelCounter + 1
    }
  }
  console.log(vowelCounter)
}

findVowels('keegan')
