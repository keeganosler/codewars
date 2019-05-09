package main

import "fmt"

func main() {
  arr1 := []int {1,2,3,4}
  arr2 := []int {1,4,9,16}
  arr3 := []int {3,2,1}
  arr4 := []int {1,2,3}
  fmt.Println(comp(arr1,arr2))
  fmt.Println(comp(arr1,arr3))
  fmt.Println(comp(arr1,arr4))
}

func comp(ar1, ar2 []int) bool {
  var doesContain bool
  for i:=0; i<len(ar1); i++ {
    sq := ar1[i]*ar1[i]
    doesContain = contains(ar2, sq)
  }
  return doesContain
}

func contains(s []int, e int) bool {
    for _, a := range s {
        if a == e {
            return true
        }
    }
    return false
}
