/* 1- 5 e 10 5 
   2- 10 10 10
   3- horasDia e salarioDia */

// (Questão 1)

let nome
let idade
console.log(typeof nome, typeof idade)   //A falta de declaração me retornou um undefined para ambos.

/////////////////

nome = prompt("Qual seu nome ?")
idade = prompt("Qual sua idade ?")
console.log(typeof nome, typeof idade)   //Os numeros dados informados pelo prompt deram ao typeof a possibilidade de identificar que nome é do tipo string e idade tipo number.

/////////////////

//let nome = prompt("Qual seu nome ?")
//let idade = prompt("Qual sua idade ?")
console.log("Olá", nome, ", você tem", idade, "anos")

// (Questão 2)

let primeiraPergunta = prompt("Você gosta de esportes ?")
let segundaPergunta = prompt("Você gosta de jogar no computador ?")
let terceiraPergunta = prompt("Você ama TI ?")
console.log("Você gosta de esportes ? - ", primeiraPergunta)
console.log("Você gosta de jogar no computador ? - ", segundaPergunta)
console.log("Você ama TI ? - ", terceiraPergunta)

// (Questão 3)

let a = 10
let b = 25
let c = a
a = b
b = c
console.log("O novo valor de a é:", a) 
console.log("O novo valor de b é:", b) 

// Desafio

//let a = prompt("Digite um número.")
//let b = prompt("Digite outro número.")
//let x = Number(a)+Number(b)
//let y = Number(a)*Number(b)
// console.log("O primeiro número somado ao segundo número resulta em:", x,".")
// console.log("O primeiro número multiplicado pelo segundo número resulta em:", y,".")
