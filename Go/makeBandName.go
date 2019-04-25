package main

import (
	"fmt"

)

func main() {
	makeBandName("dolphin")
}

func makeBandName (str string) string {
	fmt.Print(len(str))
	return "hello world"
}
