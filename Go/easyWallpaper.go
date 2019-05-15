package main

import (
    "fmt"
    "math"
    )

func main() {
   l := 4.0
   w := 3.5
   h := 3.0
   fmt.Println(easyWallpaper(l,w,h))
}

func easyWallpaper(l, w, h float64) float64 {
 walls := 2.0*l*h + 2.0*w*h
 roll := 0.52*10
 paper := walls/roll
 paper = paper + 0.15*paper
 return math.Ceil(paper)
}
