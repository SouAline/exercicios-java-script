let hours = new Date()
//horario.setHours(6)
window.alert(hours.getHours())
if (hours.getHours() >= 8 && hours.getHours() <= 12) {
    window.alert("Good morning")
} else if (hours.getHours() >= 13 && hours.getHours() <= 18) {
    window.alert("Good afternoon")

} else {
    window.alert("Good Night")
}