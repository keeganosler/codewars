package main

/* squares each number up to a given n, then counts the number of times the digit d shows up in the list of squares */ 

import (
	"fmt"
)

func main() {
	fmt.Println(string(countDigits(10,1)))
}

func countDigits(n int, d int) int {
	var arr []int
	var count = 0
	for i:=1; i<n; i++ {
		k := i*i
		arr = append(arr, k)
	}
	for j:=0; j<len(arr); j++ {
		for m:=0; m<len(string(arr[j])); m++ {
			if(int(string(arr[j])[m]) == d) {
				count = count + 1
			}
		}
	}
	return count
}
