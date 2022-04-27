/* 

1- 
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo"
horario: "14h"

2-
a) 
nome: 'Juca' idade: '3' raca: 'SRD'
nome: 'Juba' idade: '3' raca: 'SRD'
nome: 'Jubo' idade: '3' raca: 'SRD'

b)
Copia o conteúdo do objeto e o espelha dentro do novo.

3-
a)
false
undefined
b)
Pois altura não é uma chave (propriedade) declarada no objeto pessoa.

*/

//1-
//a)

let nome = prompt("digite seu nome")
function receber(apelidos) {
    apelidos = []
    for (i = 0; i < 3; i++) {
        apelidos[i] = prompt("Digite um apelido.")
    }
    return apelidos
}
const pessoas = {
    nome: nome,
    apelidos: receber()
}
function impressor(objeto) {
    return objeto
}

console.log(`Eu sou ${impressor(pessoas.nome)}, mas pode me chamar de: ${impressor(pessoas.apelidos[0])}, ${impressor(pessoas.apelidos[1])} ou ${impressor(pessoas.apelidos[2])}.`)

//b)

const pessoasNova = {
    ...pessoas,
    apelidos: receber()

}

console.log(`Eu sou ${impressor(pessoasNova.nome)}, mas pode me chamar de: ${impressor(pessoasNova.apelidos[0])}, ${impressor(pessoasNova.apelidos[1])} ou ${impressor(pessoasNova.apelidos[2])}.`)

//2-

const objeto1 = {
    nome: "Rafael",
    idade: 29,
    profissao: "Estudante"
}

const objeto2 = {
    nome: "Ronaldo",
    idade: 63,
    profissao: "Professor"
}

function retorno(objeto1, objeto2) {
    return [objeto1, objeto2]

}
console.log(retorno(objeto1.nome, objeto2.nome))
console.log(retorno(objeto1.nome.length, objeto2.nome.length))
console.log(retorno(objeto1.idade, objeto2.idade))
console.log(retorno(objeto1.profissao, objeto2.profissao))
console.log(retorno(objeto1.profissao.length, objeto2.profissao.length))

//3-
let carrinho = []

const fruta1 = {
    nome: "ameixa",
    disponibilidade: true
}
const fruta2 = {
    nome: "banana",
    disponibilidade: true
}
const fruta3 = {
    nome: "maçã",
    disponibilidade: true
}
function sacolao(fruta) {
    carrinho.push(fruta)
    return fruta
}
sacolao(fruta1)
sacolao(fruta2)
sacolao(fruta3)

console.log(carrinho)

//desafios
//1)
function cadastro(nome, idade, profissao){
   nome = prompt("digite seu nome.")
   idade = Number(prompt("digite sua idade."))
   profissao = prompt("digite sua profissão.")
   const pessoa = {
    nome: nome,
    idade: idade,
    profissao: profissao
    
}
   console.log(pessoa)
   console.log(typeof pessoa)
}
cadastro()

//2)
filme1 = {
    nome: "Corpo Fechado",
    anoDeLancamento: 2000
}
filme2 = {
    nome: "Dinossauro",
    anoDeLancamento: 2000
}
function teste(teste1, teste2){
    teste1 = filme1.anoDeLancamento < filme2.anoDeLancamento
  teste2 = filme1.anoDeLancamento == filme2.anoDeLancamento
  
  console.log(`O primeiro filme foi lançado antes do segundo? ${teste1}`)
  console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${teste2}`)

 }
 teste()

 

 //3)
 function controle(fruta){
    fruta.disponibilidade = !fruta.disponibilidade

return fruta.disponibilidade

 }
 controle(fruta2)



