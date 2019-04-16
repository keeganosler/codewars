function whoLikesIt(arr) {
  var res = ''
  if(arr.length === 0) {
    res = 'nobody likes this'
  } else if (arr.length === 1) {
    res = res.concat(arr[0]).concat(' likes this')
  } else {
    res = res.concat(arr[0])
    for (var i=1; i<arr.length; i++) {
      res = res.concat(' and ').concat(arr[i])
    }
    res = res.concat(' like this')
  }
  console.log(res)
}

whoLikesIt([])
whoLikesIt(['Peter'])
whoLikesIt(['Peter','Sam'])
whoLikesIt(['Peter','Sam','Andrew'])
