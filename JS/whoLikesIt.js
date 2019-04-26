/* turns likes into a string */

function whoLikesIt(arr) {
  var res = ''
  if(arr.length === 0) {
    res = 'nobody likes this'
  } else if (arr.length === 1) {
    res = res.concat(arr[0]).concat(' likes this')
  } else if (arr.length === 2) {
    res = res.concat(arr[0]).concat(' and ').concat(arr[1]).concat(' like this')
  } else {
    var count = 0
    res = res.concat(arr[0]).concat(', ').concat(arr[1])
    for (var i=2; i<arr.length; i++) {
      count = count + 1
    }
    res = res.concat(' and ').concat(count.toString()).concat(' others like this')
  }
  console.log(res)
}

whoLikesIt([])
whoLikesIt(['Peter'])
whoLikesIt(['Peter','Sam'])
whoLikesIt(['Peter','Sam','Andrew'])
whoLikesIt(['Peter','Sam','Andrew','Max'])
