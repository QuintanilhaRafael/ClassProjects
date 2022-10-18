const userInput6 = require("readline-sync")

const firstNumber = Number(userInput6.question("Qual o primeiro numero?"))
const secondNumber = Number(userInput6.question("Qual o segundo numero?"))

const allMathOperations = (
    firstNumber : number,
    secondNumber: number) : void => {
        console.log(`O valor da soma dos numeros e de: ${firstNumber + secondNumber}`)
        console.log(`O valor da subtracao dos numeros e de: ${firstNumber - secondNumber}`)
        console.log(`O valor da multiplicacao dos numeros e de: ${firstNumber * secondNumber}`)
        if (firstNumber > secondNumber) {
            console.log(`O primeiro e maior que o segundo.`)
        } else if (firstNumber < secondNumber) {
            console.log("O segundo é maior que o primeiro.")
        } else {
            console.log("Os numeros sao iguais")
        }

}
console.log(typeof(firstNumber))
allMathOperations(firstNumber, secondNumber)