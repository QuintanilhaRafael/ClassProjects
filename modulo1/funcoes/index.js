/* Exercícios de interpretação
1)
a- 10 
   50
b- Nada.
2)
a- Um prompt pede ao usuário para que escreva um texto. 
Uma função é criada para transformar o texto em minúsculo e pesquisa se a palavra cenoura está contida no texto, retornando um boolean. 
Uma variável é criada para receber o resultado da funçao com o texto do usuário como parêmetro da mesma.
É escrito no console o resultado em boolean.

b- true para as três.
*/

//1)
//a-

let primeiraFuncao = function(){
console.log("Eu sou Rafael, tenho 29 anos, moro no Rio de Janeiro e sou estudante.")

}
console.log(primeiraFuncao())

//b-

let segundaFuncao = function(nome, idade, cidade, profissao){
    nome = prompt("Qual é seu nome ?")
    idade = prompt("Qual sua idade ?")
    cidade = prompt("Qual a cidade que vive ?")
    profissao = prompt("Qual é a sua profissão ?")
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    
    }
    console.log(segundaFuncao())

//2)
//a-
let terceiraFuncao = function(numero1, numero2){  
let resultado = numero1 + numero2
return resultado    
}
console.log(terceiraFuncao(2, 5))

//b-
let quartaFuncao = function(numero1, numero2){  
    let resultado = numero1 >= numero2
    return resultado    
    }
console.log(quartaFuncao(2, 5))    

//c-
let quintaFuncao = function(numero){  
    let resultado = numero % 2 == 0
    return resultado    
    }
console.log(quintaFuncao(2))    

//d-
let sextaFuncao = function(texto){  
    texto = prompt("digite uma frase.")
   let tamanho = texto.length
   let textoMaiusculo = texto.toUpperCase() 
    return `${tamanho} / ${textoMaiusculo}`
       
    }
console.log(sextaFuncao())   

//3)
let numero1 = Number(prompt("Digite o primeiro número."))
let numero2 = Number(prompt("Digite o primeiro número."))

let soma = function(numero1, nuemro2){
let resultado = numero1 + nuemro2
return resultado

}

let subtracao = function(numero1, nuemro2){
    let resultado = numero1 - nuemro2
    return resultado


}

let divisao = function(numero1, nuemro2){
    let resultado = numero1 / nuemro2
    return resultado


}

let multiplicacao = function(numero1, nuemro2){
    let resultado = numero1 * nuemro2
    return resultado


}

console.log(`Soma: ${soma(numero1, numero2)} Subtração: ${subtracao(numero1, numero2)} Divisão: ${divisao(numero1, numero2)} Multiplicação: ${multiplicacao(numero1, numero2)}`)

// Desafios
//1)
let funcaoDesafio = (parametro) =>{
console.log(parametro)

}

let funcaoDesafio2 = (numero1, numero2) =>{
let soma = numero1 + numero2
funcaoDesafio(soma)

}

console.log(funcaoDesafio2(2, 5))

//2)
let pitagoras = (cateto1, cateto2)=> {
let hipotenusa = Math.pow(cateto1, 2) + Math.pow(cateto2, 2)
return hipotenusa

}
console.log(pitagoras(2, 5))










