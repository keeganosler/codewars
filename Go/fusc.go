package main

import(
    "fmt"
    )

/* propagates fuscilli numbers */

func main() {
   fmt.Println(fusc(10))
}

func fusc(n int) int {
    var res int
    if(n == 0) {
        res = 0
    } else if(n == 1) {
        res = 1
    } else if(n%2 == 0) {
        res = fusc(n/2)
    } else if((n-1)%2 == 0) {
        res = fusc(n/2) + fusc(n/2 + 1)
    } else {
        res = 0
    }
    return res
}
