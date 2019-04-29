package main

import(
    "fmt"
    "math"
    )

func main() {
   fmt.Println(simpson(2))
}

func simpson(n) float64 {
    var a = 0
    var b = math.Pi
    var co = (b - a)/(3*n)
    var t1 = createFunc(a) + createFunc(b)
    var sum1 = createSum1()
}

func createFunc(i float64) float64 {
    var f = (3/2)*math.Sin(i)*math.Sin(i)*math.Sin(i)
    return f
}
