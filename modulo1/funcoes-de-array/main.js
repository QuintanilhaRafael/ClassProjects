// //exercio 4
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
//  ]

//  //callback
//  function filtrarPorCategoria(produto) {
//      return produto.categoria==="Limpeza"
//  }
//  //callback
//  function retornaApenasNome(produto) {
//      return produto.nome
//  }

// //-- Filtrar
// let produtosLimpeza=produtos.filter(filtrarPorCategoria)
// //remapeando pelo nome 
// produtosLimpeza=produtosLimpeza.map(retornaApenasNome)

// console.log(produtosLimpeza);

// //Exercicio 3
// let listaNumeros=[12,24,15,5,7,8,6,20,25]
// //calback
// function testaSeMaiorDez(valorAtual){
//     return valorAtual>10
// }
// function testaSePar(valorAtual){
//     return valorAtual%2===0
// }

// let maioreeQueDez=listaNumeros.filter(testaSeMaiorDez)
// let valoresPares=listaNumeros.filter(testaSePar)

// console.log(maioreeQueDez);
// console.log(valoresPares);

// //exercicio 2
// let numeros=[1,2,3,4,5,6,7,8]
// //callback ---> function mensagem(valorAtual,indice,array)
// function mensagem(valorAtual,indice,array){
//     return `O elemento ${indice} é ${valorAtual} e o array original é ${array}`
// }

// let resultante=numeros.map(mensagem)

// console.log(resultante);

//Exercicio 1
// function testaImpar(num,callback){
//     if (num%2!==0){
//         callback()
//     }
// }

// function imprimir(){
//     console.log("Sim é impar");
// }


// testaImpar(99,imprimir)





////////////////NOTAS DE AULA
// let numeros=[1,2,3,4,5,6,7,8]
// //função callback
// function dobro(valor){
//     return 2*valor
// }

// let nummerosDobrados=numeros.map(dobro)

// console.log(nummerosDobrados);


// function calcula(n1,n2,callback){
//      console.log(callback(n1,n2)); 
// }


// function soma(n1,n2){
//     return n1+n2
// }
// function subtrair(n1,n2){
//     return n1-n2
// }
// function multiplicar(n1,n2){
//     return n1*n2
// }

// calcula(3,5,multiplicar)

// //array
// const listaCarros = [
//     { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18000 },
//     { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12000 },
//     { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14000 },
//     { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20000 },
//     { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12000 },
//     { id: 6, modelo: 'Onix', marca: 'Chevrolet', preco: 25000 },
//     { id: 7, modelo: 'Palio', marca: 'Fiat', preco: 13000 },
//     { id: 8, modelo: 'Prisma', marca: 'Chevrolet', preco: 15000 },
//     { id: 9, modelo: 'Logan', marca: 'Renault', preco: 15000 }
//   ]
// //função callback
// function selecionaCarro(valorAtual){
//     return valorAtual.preco>14000
// } 
// //array filtrado
// let carrosSelecionados=listaCarros.filter(selecionaCarro)
// console.log(carrosSelecionados);




/*
1- Todos os objetos, indices e array inteiro três vezes.

2- Somente os nomes dos objetos em um array.

3- Vai retornar os objetos que tiverem apelido diferente de 'Chijo'.
*/

//1-

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const novoArrayA = pets.map((item) => {
    return item.nome
})
console.log(novoArrayA)

const novoArrayB = pets.filter((item) => {
    return item.raca === 'Salsicha'
})
console.log(novoArrayB)

const novoArrayC = pets.filter((item) => {
    return item.raca === 'Poodle'

}).map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})

console.log(novoArrayC)

 //2- 
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const arrayNovoA = produtos.map((item)=>{
     return item.nome
 })
 console.log(arrayNovoA)

 const arrayNovoB = produtos.map((item)=>{
     return {
         nome: item.nome,
         preco: item.preco
     }   
 })
 console.log(arrayNovoB)

 const arrayNovoC = produtos.filter((item)=>{
     return item.categoria === 'Bebidas'
 })
 console.log(arrayNovoC)

 const arrayNovoD = produtos.filter((item)=>{
     if (item.nome.includes('Ypê')){
         return item.nome
     }
 })
console.log(arrayNovoD)

const arrayNovoE = produtos.filter((item)=>{
    if (item.nome.includes('Ypê')){
        return item.nome
    }
}).map((item)=>{
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(arrayNovoE)


//Desafio
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const arrayDesafioA = pokemons.map((item)=>{
     return item.nome
 })
 console.log(arrayDesafioA.sort())

 const arrayDesafioB = pokemons.map((item)=>{
     return item.tipo
 })

 const arrayDesafioC = [...new Set(arrayDesafioB)]
 console.log(arrayDesafioC)
