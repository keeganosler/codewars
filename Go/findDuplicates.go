package main

import (
	"fmt"
)

func main() {
	fmt.Println(findDuplicates("abcde"))
	fmt.Println(findDuplicates("abccd"))
}

func findDuplicates(str string) int {
	var dupCount = 0
	var dupChar []byte
	for i:=0; i<len(str)-1; i++ {
		if(str[i] == str[i+1]) {
			if(!contains(dupChar, str[i])){
				dupCount = dupCount + 1
				dupChar = append(dupChar, str[i])
			}
		}
	}
	return dupCount
}

func contains(arr []byte, str byte) bool {
	for _, s := range arr {
		if (s == str) {
			return true
		}
	}
	return false
}
