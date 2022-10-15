const userInput = require("readline-sync")
const a = Number(userInput.question("Qual o valor de a?"))
const b = Number(userInput.question("Qual o valor de b?"))
const c = Number(userInput.question("Qual o valor de c?"))

function checaTriangulo(
    a: number,
    b: number,
    c: number) : string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}

console.log(`Esse triangulo é: ${checaTriangulo(a, b, c)}`)