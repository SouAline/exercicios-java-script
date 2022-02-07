let words = window.prompt("Digite one letter")
var letters = ["a", "e", "i", "o", "u"]
if (letters.indexOf(words.toLowerCase()) == -1) {
    window.alert("The letter digitada é uma consoante")
} else {
    window.alert("The letter digitada é uma vogal")
}