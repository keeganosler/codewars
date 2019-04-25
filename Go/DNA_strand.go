package main

import "fmt"

func main() {
   for i, c := range "ATTA" {
       fmt.Println(i, string(c))
   }
}
