let firstNote = parseFloat(window.prompt("Write your first note"))
let secondNote = parseFloat(window.prompt("Write your second note"))

let average = (firstNote + secondNote) / 2

if (average >= 7 && average < 10) {
    window.alert("Approved")
} else if (media < 7) {
    window.alert("Disaproved")
} else {
    window.alert("Approved with distinction")
}