package main

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
		res = "yes"
	}
	return res
}
