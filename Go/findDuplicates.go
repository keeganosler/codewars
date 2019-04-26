package main

import (
	"fmt"
)

func main() {
	fmt.Println(findDuplicates("abcde"))
	fmt.Println(findDuplicates("abccdd"))
	fmt.Println(findDuplicates("abcdc"))
	fmt.Println(findDuplicates("abcdcd"))
}

func findDuplicates(str string) int {
	var dupCount = 0
	var dupChar []byte
	for i:=0; i<len(str)-1; i++ {
	    for j:=i+1; j<len(str); j++ {
	        if(str[i] == str[j]) {
	            if(!contains(dupChar, str[i])) {
	                dupCount = dupCount + 1
				    dupChar = append(dupChar, str[i])
	            }
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
