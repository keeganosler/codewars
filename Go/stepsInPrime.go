package main

import(
    "fmt"

    )

func main() {
   fmt.Println(stepsInPrime(2,2,50))
}

func stepsInPrime(n int, s int, m int) []int {
    var res []int
    for i:=n; i<m-s; i++ {
        var u = i+s
        if(isPrime(i) && isPrime(u)) {
            res = append(res,i)
            res = append(res,u)
            return res
        }
    }
    return res
}

 func isPrime(j int) bool {
    for i:=2; i<j; i++ {
        if j%i == 0 {
            return false
        }
    }
    return true
 }
