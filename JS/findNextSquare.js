/* finds the next consecutive square number after the given number */

function findNextSquare(sq) {
  var res
  var n = Math.sqrt(sq)
  if(Number.isInteger(n)) {
    var next = n + 1 
    res = next*next
  } else {
    res = -1
  }
  return res
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(114))
