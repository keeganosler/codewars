package main

import (
    "fmt"
    "strings"
    )

/* determines longest consecutive string in an array */

func main() {
    var strarr = []string {"zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"}
    var res1, res2, res3, res4 string
    res1 = longest_consec(strarr, 2)
    res2 = longest_consec(strarr, 3)
    res3 = longest_consec(strarr, 9)
    res4 = longest_consec(strarr, 0)
    fmt.Printf("%s, %s, %s, %s", res1, res2, res3, res4)
}

func longest_consec(arr []string, n int) string{
    var maxString = 0
    var res string
    if  (len(arr) == 0 || n>len(arr) || n <= 0 ){
        res = ""
    } else {
        for i:=0; i<len(arr)-1; i++ {
            var newLen = 0
            newArr := []string{}
            for j:=0; j<n; j++ {
                newLen = newLen + len(arr[i+j])
                newArr[j] = arr[i+j]
                if (newLen > maxString) {
                    maxString = newLen
                    res = strings.Join(newArr,"")
                }
            }
        }
    }
    return res
}
