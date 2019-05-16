package main

import "fmt"

func main() {
    n := 20
   fmt.Println(sumEvenFibo(n))
}

func fibo(n int) []int {
    var fibo int
    var arr []int
    if n <= 1 {
        fibo = n
    }
    fibo = fibo(n-1) + fibo(n-2)
    if fibo%2 == 0 {
        arr.push(fibo)
    }
    return arr
}

func sumEven(arr []int) int {
    sum := 0
    for i:=0; i<len(arr); i++ {
        sum = sum + arr[i]
    }
    return sum
}
