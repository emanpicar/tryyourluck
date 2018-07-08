package main

import(
	"fmt"
	"net/http"
	"log"
)

func main() {
	http.HandleFunc("/", index_handler)
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func index_handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "test web dev go")
}