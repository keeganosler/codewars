function concatNumber (n, m, phoneNumber, arr) {
  for (var i=m; i<n; i++) {
    phoneNumber = phoneNumber.concat(arr[i].toString())
  }
  return phoneNumber
}

function createPhoneNumber (arr) {
  var phoneNumber = ''
  var firstPart = ''
  var secondPart = ''
  if (arr.length > 10) {
    phoneNumber = "too many digits!"
  } else if (arr.length < 10) {
    phoneNumber = "not enough digits!"
  } else {
    var areaCode = concatNumber(3,0,phoneNumber,arr)
    var firstPart = concatNumber(6,3,phoneNumber,arr)
    var secondPart = concatNumber(6,10,phoneNumber,arr)
    phoneNumber = '('.concat(areaCode).concat(')').concat(' ').concat(firstPart).concat('-').concat(secondPart)
  }
  return phoneNumber
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
