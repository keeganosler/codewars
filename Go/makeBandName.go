package main

/* if a word doesn't start and end with the same letter, name the band The (capitalized word)
   if it starts with and ends with the same letter, name the band word+word missing the first letter */

import (
	"fmt"
)
import s "strings"

func main() {
	fmt.Println(makeBandName("dolphin"))
	fmt.Println(makeBandName("alaska"))
}

func makeBandName (str string) string {
	var res string
	if(string(str[0]) != string(str[len(str)-1])){
		res = "The " + s.Replace(str, string(str[0]), s.ToUpper(string(str[0])), 1)
	} else {
		res = s.Replace(str, string(str[0]), s.ToUpper(string(str[0])), 1) + s.Replace(str, string(str[0]), "", 1)
	}
	return res
}
