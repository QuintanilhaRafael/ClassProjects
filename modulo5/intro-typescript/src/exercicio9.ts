const userInput9 = require("readline-sync")

const idade = Number(userInput9.question("Qual sua idade?"))
const ensinoMedio: string = userInput9.question("Possui ensino medio completo? Sim ou Nao")
const horasDisponiveis = Number(userInput9.question("Quantas horas semanais voce tem disponiveis para o curso?"))
const periodo: string = userInput9.question("Seu curso sera integral ou noturno?")

function labenuValidation(idade: number, ensinoMedio: string, horasDisponiveis: number, periodo: string): boolean {
    let horasReq: number
    if (periodo.toLowerCase() === "integral") {
        horasReq = 40
    } else if (periodo.toLowerCase() === "noturno") {
        horasReq = 20
    }
    if (horasReq === 40 || horasReq === 20) {
        return idade >= 18 && ensinoMedio.toLowerCase() === 'sim' && horasDisponiveis >= horasReq
    }
}
if (periodo.toLocaleLowerCase() === 'integral' || periodo.toLocaleLowerCase() === 'noturno') {
    console.log(labenuValidation(idade, ensinoMedio, horasDisponiveis, periodo))
} else {
    console.log("Por favor, escolha entre integral ou noturno")
}
