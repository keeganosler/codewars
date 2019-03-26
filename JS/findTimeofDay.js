/*1440 minutes in a day */

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function findPastTime (n) {
  
}

function findFutureTime (n) {
  var dayCounter = 0;
  var hourCounter = 0;
  var minCounter =0;
  for (var i=0; i<n; i++) {
    minCounter = minCounter + 1 
    if (i%60 === 0) {
      hourCounter = hourCounter + 1 
      minCounter = 1
    }
    if (i%1440 === 0) {
      dayCounter = dayCounter + 1 
      hourCounter = 1
    }
  }
  day = days[dayCounter-1]
  console.log('Day', day, 'Hour', hourCounter, 'Minute', minCounter)
}

function findTime (n) {
  if (n < 0) {
    findPastTime(n)
  } else {
    findFutureTime(n)
  }
}

findTime(22)
