/* calculates a person's BMI given their height and weight */

function bmi(height, weight) {
  var bmi 
  var res = weight / height
  res = res * res
  if(res <= 18.5) {
    bmi = "Underweight"
  } else if (res > 18.5 && res <= 25) {
    bmi = "Normal Weight"
  } else if (res > 25 && res <= 30) {
    bmi = "Overweight"
  } else {
    bmi = "Obese"
  }
  return bmi 
}

console.log(bmi(67, 150))
