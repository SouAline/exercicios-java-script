let firstNote = parseFloat(window.prompt("Write your first note"))
let secondNote = parseFloat(window.prompt("Write your second note"))

let average = (firstNote + secondNote) / 2
console.log(average)

if (average >= 7 && average < 10) {
    console.log("Approved")
} else if (media < 7) {
    console.log("Disaproved")
} else {
    console.log("Approved with distinction")
}