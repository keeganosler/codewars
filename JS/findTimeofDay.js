/*1440 minutes in a day */

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function makeNum (h) {
  var firstDig = 0
  h = firstDig.toString().concat(h.toString())
  return h
}

function findTime (n) {
  var dayCounter = 0;
  var hourCounter = 0;
  var minCounter =0;
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

 var min = minCounter
  if (min < 10) {
    min = makeNum(min)
  }  
  console.log(day, hour, ':', min)  
}

findTime(59)
