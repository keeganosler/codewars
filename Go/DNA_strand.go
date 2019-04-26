package main

/* Converts between pairs in a DNA strand (i.e., A<=>T and C<=>G */

import (
  "fmt"
  "bytes"
)

func main() {
   fmt.Println(DNA_strand("ATTA"))
}

func DNA_strand(str string) string {
  var buf bytes.Buffer
  var res string
  for i:=0; i<len(str); i++ {
    var currLetter = string(str[i])
    if(currLetter == "A") {
      buf.WriteString("T")
      res = buf.String()
    } else if (currLetter == "T") {
      buf.WriteString("A")
      res = buf.String()
    } else if (currLetter == "C") {
      buf.WriteString("G")
      res = buf.String()
    } else {
      buf.WriteString("C")
      res = buf.String()
    }
  }
  return res
}
