function partList(arr) {
  var finalArr = []
  if(arr.length <= 1) {
    console.log("too short!")
  } else {
    for (var i=0; i<arr.length; i++) {
      for (var j=0; j<arr.length; j++) {
        var list1 = arr.slice(i,j).toString()
        var list2 = arr.slice(j,arr.length).toString()
        if(list1!="" && list2!="") {
          finalArr.push([list1,list2])
        }
        
      }
    }
  }
  console.log(finalArr)
}

partList(['one','two','three'])
partList(['one','two','three','four','five'])
