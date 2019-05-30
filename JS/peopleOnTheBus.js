function peopleOnTheBus(arr) {
  var total = 0
  for(var i=0; i<arr.length; i++){
    total = total + arr[i][0] - arr[i][1]
  }
  return total
}

console.log(peopleOnTheBus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
