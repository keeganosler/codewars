function luhnAlgo(arr) {
  if(arr.length%2 !== 0) { //odd number of digits
    for(var i=0; i>arr.length; i++) {
      if(i%2 === 0) {
        arr.splice(i, 1, arr[i]*2)
      }
    }
  } else { //even number of digits
    for(var i=0; i<arr.length; i++) {
      if(i%2 !== 0) {
        arr.splice
      }
    }
  }
}
