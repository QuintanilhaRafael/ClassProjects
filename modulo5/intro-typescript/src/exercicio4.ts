const userInput4 = require("readline-sync")

const num1 = Number(userInput4.question("Primeiro numero."))
const num2 = Number(userInput4.question("Segundo numero."))

function comparaDoisNumeros(
    num1 : number,
    num2 : number) : number {

    let maiorNumero : number;
    let menorNumero : number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca : number = maiorNumero - menorNumero;
  
    return diferenca 
  }

  console.log(`Diferenca: ${comparaDoisNumeros(num1, num2)}`)