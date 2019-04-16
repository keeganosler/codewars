function partList(arr) {
  var finalArr
  if(arr.length <= 1) {
    console.log("too short!")
  } else {
    for (var i=1; i<arr.length; i++) {
      var list1 = arr.slice(0,1).toString()
      var list2 = arr.slice(1,arr.length).toString()
      finalArr.push([list1,list2])
    }
  }
  console.log(finalArr)
}

partList(['one','two','three'])
