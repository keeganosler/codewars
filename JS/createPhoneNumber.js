function createPhoneNumber (arr) {
  var phoneNumber = ''
  var areaCode = ''
  var firstPart = ''
  var secondPart = ''
  if (arr.length > 10) {
    phoneNumber = "too many digits!"
  } else if (arr.length < 10) {
    phoneNumber = "not enough digits!"
  } else {
    for (var i=0; i<3; i++) {
      areaCode = areaCode.concat(arr[i].toString())
    }
    phoneNumber = '('.concat(areaCode).concat(')')
    for (var i=3; i<6; i++) {
      firstPart = firstPart.concat(arr[i].toString())
    }
    phoneNumber = phoneNumber.concat(' ',firstPart).concat('-')
    for (var i=6; i<10; i++) {
      secondPart = secondPart.concat(arr[i].toString())
    }
    phoneNumber = phoneNumber.concat(secondPart)
  }
  return phoneNumber
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
