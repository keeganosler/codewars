package main

/*determines if it is possible to form a triangle with three given side lengths using the triangle inequality principle */

import (
	"fmt"

)

func main() {
	fmt.Println(isTrianglePossible(3,4,5))
	fmt.Println(isTrianglePossible(10,4,5))
}

func isTrianglePossible (a int, b int, c int) bool {
	var isPossible bool
	var ab = a + b
	var ac = a + c
	var bc = b + c
	if (ab > c && ac > b && bc > a) {
		isPossible = true
	} else {
		isPossible = false
	}
	return isPossible
}

