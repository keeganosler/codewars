package main

/* finds the one not like the others in a list of numbers */

import "fmt"

func main() {
  var arr1 = []int {1,1,1,2,1,1}
  var uniq = findUniq(arr1)
  fmt.Println("unique: ", uniq)
}

func findUniq(arr []int) int {
  var res int
  for i:=0; i<len(arr)-1; i++ {
    if (arr[i] != arr[i+1]) {
      res = arr[i]
    }
  }
  return res
}
