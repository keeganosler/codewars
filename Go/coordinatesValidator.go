package main

/*determines if a set of latitiude and longitude coordinates are valid coordinates */

import (
	"fmt"
)

func main() {
	var testArr1 = []float64 {51.234, 122.345}
	var testArr2 = []float64 {51.234, 182.345}
	fmt.Println(coordValidator(testArr1))
	fmt.Println(coordValidator(testArr2))
}

func coordValidator(arr []float64) bool {
	if (arr[0] <= 90.0 && arr[0] >= 0.0 && arr[1] <=180.0 && arr[1] >= 0.0) {
		return true
	} else {
		return false
	}
}

