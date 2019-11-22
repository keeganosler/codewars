package kata
import "strings"

/* finds the shortest words in a set of stirngs */

func FindShortestWord (s string) int {
	shortestWord := len(s)
	for _, word := range strings.Split(s, " ") {
		if len(word) < shortestWord {
			shortestWord = len(word)
		}
	}
	return shortestWord
}
