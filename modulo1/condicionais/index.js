/* 
1-
a) Testa se o número que o usuário informa tem resto ou não, informando que ele passou no teste caso o número seja par, ou que ele não passou caso seja ímpar.
b) Números pares.
c) Números ímpares.

2-
a) Comparar o imput do usuário com as frutas disponíveis e retornar o preço da mesma.
b) O preço da fruta Maçã é R$ 2.25
c) O preço da fruta Pêra é R$ 5

3-
a) Recebendo um número do usuário e se certificando de que o mesmo seja atribuído a variável como Number.
b) 1* Esse número passou no teste
Essa mensagem é secreta!!!
2* Error
c) Sim, já que a variável (mensagem) só é declaraca caso a condição do if seja satisfeita. O que não é com o imput menor ou igual a zero.
*/


//1-
let idade = Number(prompt("Digite sua idade."))
if (idade >= 18)
    console.log("Você pode dirigir")
else
    console.log("Você não pode dirigir")

//2-
let turno = prompt("Digite o turno que se encontra: M (matutino) ou V (Vespertino) ou N (Noturno). ")
if (turno === "M")
    console.log("Bom dia !")
else if (turno === "V")
    console.log("Boa tarde !")
else if (turno === "N")
    console.log("Boa noite !")
else
    console.log("Nenhum turno informado =(")

//3-
turno = prompt("Digite o turno que se encontra: M (matutino) ou V (Vespertino) ou N (Noturno). ")
switch (turno) {
    case "M":
        console.log("Bom dia !")
        break;
    case "V":
        console.log("Boa tarde !")
        break;
    case "N":
        console.log("Boa noite !")
        break;
    default:
        console.log("Nenhum turno informado =(")
}
//4- *desafio 1*
function pergunta(pergunta1, pergunta2, lanche) {
        pergunta1 = prompt("Qual o gênero do filme ?")
        pergunta2 = Number(prompt("Qual o preço do filme ?"))
    if (pergunta1 === "fantasia" && pergunta2 < 15){
        lanche = prompt("Qual o lanche top pro filmão ?")
        console.log("Bom filme !")
        console.log(`Aproveite o seu ${lanche}`)
    }        
    else
        console.log("Escolha outro filme :(")
}
pergunta()


//Desafio
//2-
function calculaPreco(nome, tipoDeJogo, etapaDoJogo, categoria, qtdIngressos){
nome = prompt("Qual seu nome ?")
tipoDeJogo = prompt("Qual o tipo de jogo ? (IN para internacional; e DO para doméstico)")
etapaDoJogo = prompt("Qual a etapa ? (SF para semi-final; DT para decisão de terceiro lugar; e FI para final)")
categoria = prompt("Qual a categoria do jogo ? (1, 2, 3 ou 4)")
qtdIngressos = Number(prompt("Quantos ingressos ?"))
console.log(`-- Dados da Compra --`)
console.log(`Nome do cliente: ${nome}`)
console.log(`Tipo de jogo: ${tipoDeJogo}`)
console.log(`Etapa do jogo: ${etapaDoJogo}`)
console.log(`Categoria: ${categoria}`)






}











