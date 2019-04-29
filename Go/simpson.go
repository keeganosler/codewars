package main

import(
    "fmt"
    "math"
    )

func main() {
   fmt.Println(simpson(100))
}

func simpson(n int) float64 {
    var a = 0.0
    var b = math.Pi
    var h = (b-a)/float64(n)
    var co = (b - a)/float64(3*n)
    var t1 = createFunc(a) + createFunc(b)
    var sum1 = 4*createSum1(a,n,h)
    var sum2 = 2*createSum2(a,n,h)
    var res = co*(t1 + sum1 + sum2)
    return res
}

func createSum1(a float64, n int, h float64) float64 {
    var res = 0.0
    for i:=0; i<n/2; i++ {
        var f = a + ((2*float64(i))-1)*h
        res = res + createFunc(f)
    }
    return res
}

func createSum2(a float64, n int, h float64) float64 {
    var res = 0.0
    for i:=0; i<n/2 -1; i++ {
        var f = a + 2*float64(i)*h
        res = res + createFunc(f)
    }
    return res
}

func createFunc(i float64) float64 {
    var f = (3/2)*math.Sin(i)*math.Sin(i)*math.Sin(i)
    return f
}
