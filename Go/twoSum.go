package main

import "fmt"

func main() {
    var arr1 []int {1,2,3,4,5}
    var arr2 []int {1,3,5,2,4}
    var target := 10
    
    var indexes = twoSum(arr1, arr2, target)
}

func twoSum(arr1 []int, arr2 []int, num) []int {
    var arr []int
    for i:=0; i<len(arr1); i++ {
        for j:=0; j<len(arr2); j++ {
            if (arr1[i] + arr[j] == num){
                arr = append(arr, i)
                arr = append(arr, j)
            }
        }
    }
    return arr
}
