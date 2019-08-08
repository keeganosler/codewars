var a = [3,4,5]
var b = [6,7,8]

function differenceInCuboidVolume(arr1,arr2) {
  var a1, a2 = 1
  var res
  for(var i=0; i<arr1.length; i++) {
    a1 = a1*arr1[i]
  }
  for(var i=0; i<arr2.length; i++) {
    a2 = a2*arr2[i]
  }
  if(a1 === a2) {
    res = 0
  } else if (a1 >= a2){
    res = a1 - a2
  } else {
    res = a2 - a1
  }
  return res
}

console.log(differenceInCuboidVolume(a,b))
