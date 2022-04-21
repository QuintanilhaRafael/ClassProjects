// Exercícios de interpretação
/*  
1-
a. undefined
b. null
c. 3,4,5,6,7,8,9,10,11,12,13
d. 3
e. 3,19,5,6,7,8,9,10,11,12,13
f. 9

2-
SUBI NUM ôNIBUS EM MIRROCOS 27

*/

// Exercícios de escrita de código

// 1-

let nome = prompt("Qual seu nome ?")
let email = prompt("Qual seu email ?")
  console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// 2-
let array = ["Picanha", "Queijo", "Pão", "Nhoque", "Queijo de novo"]
let array2 = array
  console.log(`Essas são as minhas comidas preferidas:`)
    for (a = 0; a< array.length; a++){                           // Fiquei com preguiça de colocar um bando de <br> =X
      console.log(array[a])
}

array2[1] = prompt("Digite sua comida favorita.")
  console.log(`Essas são as minhas comidas preferidas:`)
    for (a = 0; a< array2.length; a++){                           
      console.log(array2[a])
}

// 3-
let listaDeTarefas = []
for (i = 0; i<3; i++){
  listaDeTarefas[i] = prompt("Digite uma tarefa.")
}

console.log(listaDeTarefas)

let indice = Number(prompt("digite um item a ser removido."))
listaDeTarefas.splice(indice-1, 1)

console.log(listaDeTarefas)


// Desafio.

// 1- 
let texto = prompt("Digite um texto.")
console.log(texto.split(" "))

// 2- 
let newArray = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    console.log(newArray.indexOf("Abacaxi"), newArray.length)







