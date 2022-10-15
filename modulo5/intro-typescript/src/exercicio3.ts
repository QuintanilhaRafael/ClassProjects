const userInput3 = require("readline-sync")
const ano = Number(userInput3.question("Qual e o ano a ser analizado?"))

function checaAnoBissexto(ano:number) : boolean {
    const cond1 : boolean = ano % 400 === 0
    const cond2 : boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }

 console.log(`R: ${checaAnoBissexto(ano)}`)