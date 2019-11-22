/* determines date (day and time) */

// 1440 minutes in a day

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function makeNum (num) {
  var zero = 0
  num = zero.toString().concat(num.toString())
  return num
}

function findTime (n) {
  var dayCounter, hourCounter, minCounter = 0;
  for (var i=0; i<n; i++) {
    minCounter = minCounter + 1 
    if (minCounter%60 === 0) {
      hourCounter = hourCounter + 1 
      minCounter = 1
    }
    if (i%1440 === 0) {
      dayCounter = dayCounter + 1 
      hourCounter = 1
    }
  }
 var day = days[dayCounter-1]
 var hour = hourCounter -1
  if (hour < 10) {
    hour = makeNum(hour)
  }
  if (minCounter < 10) {
    minCounter = makeNum(minCounter)
  }  
  console.log(day, hour, ':', minCounter)  
}


findTime(1500)
