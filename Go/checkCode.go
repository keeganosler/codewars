package main

import "fmt"

func main() {
  s1 := "aaabbbcccddd"
  s2 := "aaabbcddd"
  fmt.Println(checkCode(s1))
  fmt.Println(checkCode(s2))
}

func checkCode(str string) string {
  mistakeCount := 0
  //total := len(str)
  for i:=0; i<len(str); i++ {
    if i==0 {
      if str[i] != str[i+1] {
        mistakeCount = mistakeCount + 1
      }
    } else if i>0 && i<len(str) {
      if str[i]!=str[i+1] && str[i]!=str[i-1] {
        mistakeCount = mistakeCount + 1
      }
    } else {
      if str[i]!=str[i-1] {
        mistakeCount = mistakeCount + 1
      }
    }
  }
  res := string(mistakeCount)
  return res
}
