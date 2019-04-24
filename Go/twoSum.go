package main

import "fmt"

func main() {
    var arr1 = []int {1,2,3,4,5}
    var arr2 = []int {1,3,5,2,4}
    var target int
    target = 10
    
    var indexes = twoSum(arr1, arr2, target)
    fmt.Println(indexes)
}

func twoSum(arr1 []int, arr2 []int, num int) []int {
    var arr []int
    for i:=0; i<len(arr1)-1; i++ {
        for j:=0; j<len(arr2)-1; j++ {
            if (arr1[i] + arr[j] == num){
                arr = append(arr, i)
                arr = append(arr, j)
            }
        }
    }
    return arr
}
