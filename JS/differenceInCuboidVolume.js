function differenceInCuboidVolume(arr1,arr2) {
  var a1, a2 = 1
  for(var i=0; i<arr1.length; i++) {
    a1 = a1*arr1[i]
  }
  for(var i=0; i<arr2.length; i++) {
    a2 = a2*arr2[i]
  }
  if(a1 === a2) {
    return 0
  } else if (a1 >= a2){
    return a1 - a2
  } else {
    return a2 - a1
  }
}

console.log(differenceInCuboidVolume([3,4,5],[6,7,8]))
