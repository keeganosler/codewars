package main

import(
    "fmt"
    "math/big"
    )

func main() {
   fmt.Printf("hello, world\n")
   fmt.Println(stepsInPrime(2,2,50))
}

func stepsInPrime(n int, s int, m int) arr []int {
    var res = []int
    for i:=0; i<m-s; i++ {
        var u = i+s
        if(isPrime(i) && isPrime(u)) {
            res = append(res,i)
            res = append(res,u)
        }
    }
    return res
}

func isPrime(i int) bool {
    
}
