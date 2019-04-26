package main

/* Converts each letter in a string to its corresponding military phonetic alphabet representation */

import s "strings"
import "fmt"
import "bytes"

var alph = []string {"Alpha", "Bravo", "Charlie", "Delta",
                    "Echo", "Foxtrot", "Golf", "Hotel",
                    "India", "Juliet", "Kilo", "Lima",
                    "Mike", "November", "Oscar", "Papa",
                    "Quebec", "Romeo", "Sierra", "Tango",
                    "Uniform", "Victor", "Whiskey", "Xray",
                    "Yankee", "Zulu"}

func main() {
   fmt.Println(convertToMilitary("If you can read this"))
}

func convertToMilitary(str string) string {
  var goodStr = s.Replace(str, " ", "", 4)
  var buf bytes.Buffer
  var res string
  for i:=0; i<len(goodStr); i++ {
    firstLetter := string(goodStr[i])
    for j:=0; j<len(alph); j++ {
      if (string(alph[j][0])==firstLetter) {
        buf.WriteString(alph[j])
        
      }
      
    }
    res = buf.String()
  }
  return res
}
