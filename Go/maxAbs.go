package main

import "fmt"

func main() {
  var a1 = []string {}
  var a2 = []string {}
  fmt.Println(maxAbs(a1, a2))
}

func maxAbs(str1 []string, str2 []string) int {
  var res int
  var sub int
  var maxSub int
  if(len(str1) == 0 || len(str2) == 0) {
    res = -1
  } else {
    for i:=0; i<len(str1); i++ {
      for j:=0; j<len(str2); j++ {
        if len(str1[i]) > len(str2[j]) {
          sub = len(str1[i]) - len(str2[j])
        } else {
          sub = len(str2[j]) - len(str1[i])
        }
        if maxSub > sub {
          maxSub = sub
        }
      }
    }
    res = maxSub
  }
  return res
}
