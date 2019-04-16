function partList(arr) {
  var finalArr = []
  if(arr.length <= 1) {
    console.log("too short!")
  } else {
    for (var i=0; i<arr.length; i++) {
      for (var j=0; j<arr.length; j++) {
        var list1 = arr.slice(i,j)
        var list2 = arr.slice(j,arr.length)
        if(list1!="" && list2!="" && list1.length+list2.length==arr.length) {
          finalArr.push([list1.toString(),list2.toString()])
        }
        
      }
    }
  }
  console.log(finalArr)
}

partList(['one','two','three'])
partList(['one','two','three','four','five'])
