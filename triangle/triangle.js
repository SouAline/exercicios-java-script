let firstSide = parseInt(window.prompt("Enter a first side of triangle"))

let secondSide = parseInt(window.prompt("Enter second side of triangle"))

let thirdSide = parseInt(window.prompt("Enter third side of triangle"))

let result = firstSide + secondSide

if (firstSide + secondSide >= thirdSide && secondSide + thirdSide >= firstSide && firstSide + thirdSide >= secondSide) {

    if (firstSide == secondSide && secondSide == thirdSide) {
        window.alert("EQUILATERO Triangle.")
    } else if (firstSide == secondSide || secondSide == thirdSide || firstSide == thirdSide) {
        window.alert("ISÓSCELES Triangle.")
    } else {
        window.alert("ESCALENO Trangle.")
    }
} else {
    window.alert("It's not a triangle")
}