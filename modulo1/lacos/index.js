/*
1- Incrimenta 5 vezes a variável valor. 10.

2- a)  19     b) console.log(lista.indexOf(numero))
21
23
25
27
30

3- *
**
***
****    
*/


//1-
let qtdAnimal = Number(prompt("Quantos bixos de estimação você tem ?"))
let nomesArray = []

function buscaNomes() {
    for (i = 0; i < qtdAnimal; i++) {
        nomesArray[i] = prompt(`Digite o nome do ${i + 1}° pet`)
    }
    return nomesArray
}
if (qtdAnimal <= 0) {
    console.log("Que pena! Você pode adotar um pet!")

} else {
    buscaNomes()
    console.log(nomesArray)
}

//2-
let arrayOriginal = [10, 20, 30, 40, 59]

function imprimeElementos() {
    for (let i of arrayOriginal) {
        console.log(i)
    }
}

function imprimeElementosDiv10() {
    for (let i of arrayOriginal) {
        console.log(i / 10)
    }
}

function imprimePares() {
    let arrayPar = []
    for (let i of arrayOriginal) {
        if (i % 2 == 0) {
            arrayPar.push(i)
        }
    }
    console.log(arrayPar)
}

function imprimeArrayEscroto() {
    let arrayEscroto = []
    for (i = 0; i < arrayOriginal.length; i++) {
        arrayEscroto[i] = `O elemento do índex ${i} é: ${arrayOriginal[i]}`
    }
    console.log(arrayEscroto)
}

imprimeElementos()
imprimeElementosDiv10()
imprimePares()
imprimeArrayEscroto()

//Desafios
//1-

function jogoDoAdivinho() {
    let primeiroNumero
    let segundoNumero
    let cont = 0
    if (confirm("Quer iniciar um jogo ?")) {
        console.log("Bora jogar !")
        primeiroNumero = Number(prompt("Digite um número"))
        while (segundoNumero != primeiroNumero) {
            cont++
            segundoNumero = Number(prompt("Tente Adivinhar o número"))
            if (segundoNumero < primeiroNumero) {
                console.log(`O número chutado foi: ${segundoNumero}
Errrrrrrrou, é maior`)
            } else if (segundoNumero > primeiroNumero) {
                console.log(`O número chutado foi: ${segundoNumero}
Errrrrrrrou, é menor`)

            } else if (segundoNumero == primeiroNumero) {
                console.log(`O número chutado foi: ${segundoNumero}
Acertou !! GGWP !!!
O número de tentativas foi: ${cont}`)
                break;
            }
        }


    } else {
        console.log("Até a próxima !")

    }
}

jogoDoAdivinho()

//2

function jogoDoAdivinhoVsPc() {
    let primeiroNumero
    let segundoNumero
    let cont = 0
    if (confirm("Quer iniciar um jogo ?")) {
        console.log("Bora jogar !")
        primeiroNumero = Math.floor(Math.random() * 100)+1
        while (segundoNumero != primeiroNumero) {
            cont++
            segundoNumero = Number(prompt("Tente Adivinhar o número"))
            if (segundoNumero < primeiroNumero) {
                console.log(`O número chutado foi: ${segundoNumero}
Errrrrrrrou, é maior`)
            } else if (segundoNumero > primeiroNumero) {
                console.log(`O número chutado foi: ${segundoNumero}
Errrrrrrrou, é menor`)

            } else if (segundoNumero == primeiroNumero) {
                console.log(`O número chutado foi: ${segundoNumero}
Acertou !! GGWP !!!
O número de tentativas foi: ${cont}`)
                break;
            }
        }


    } else {
        console.log("Até a próxima !")

    }
}

jogoDoAdivinhoVsPc()


