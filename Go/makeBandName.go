package main

import (
	"fmt"

)

func main() {
	fmt.Println(makeBandName("dolphin"))
	fmt.Println(makeBandName("alaska"))
}

func makeBandName (str string) string {
	if(string(str[0]) == string(str[len(str)-1])){
		return "hello world"
	} else {
		return "yes"
	}
}
