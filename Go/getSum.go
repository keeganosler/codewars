package main

/* gets the sum of all the numbers between two given numbers */

import "fmt"

func main() {
   var re1 int
   var re2 int
   var re3 int
   re1 = getSum(1,3)
   fmt.Printf("sum: %d\n", re1)
   re2 = getSum(2,5)
   fmt.Printf("sum: %d\n", re2)
   re3 = getSum(3,3)
   fmt.Printf("sum: %d", re3)
}

func getSum (a, b int) int {
    var res int
    if (a == b) {
        res = a
    } else {
        res = a
        for i:=a+1; i<=b; i++ {
            res = res + i
        }
    }
    return res
}
