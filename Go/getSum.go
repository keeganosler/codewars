package main

import "fmt"

func main() {
   var re1 int
   var re2 int
   re1 = getSum(1,3)
   fmt.Printf("sum: %d\n", re1)
   re2 = getSum(2,5)
   fmt.Printf("sum: %d", re2)
}

func getSum (a, b int) int {
    var res int
    res = a + b
    return res
}
