const userInput8 = require("readline-sync")

const inputString : string = userInput8.question("Qual a string a ser invertida ?")

function reverseString (inputString : string) {
    let reversedString = inputString.split("").reverse().join("");
    console.log(reversedString)
}

reverseString(inputString)