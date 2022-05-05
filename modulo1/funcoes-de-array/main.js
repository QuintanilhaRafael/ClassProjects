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

const arrayNovoA = produtos.map((item) => {
    return item.nome
})
console.log(arrayNovoA)

const arrayNovoB = produtos.map((item) => {
    return {
        nome: item.nome,
        preço: (item.preco - (item.preco / 20)).toFixed(2)
    }
})
console.log(arrayNovoB)

const arrayNovoC = produtos.filter((item) => {
    return item.categoria === 'Bebidas'
})
console.log(arrayNovoC)

const arrayNovoD = produtos.filter((item) => {
    if (item.nome.includes('Ypê')) {
        return item.nome
    }
})
console.log(arrayNovoD)

const arrayNovoE = produtos.filter((item) => {
    if (item.nome.includes('Ypê')) {
        return item.nome
    }
}).map((item) => {
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

const arrayDesafioA = pokemons.map((item) => {
    return item.nome
})
console.log(arrayDesafioA.sort())

const arrayDesafioB = pokemons.map((item) => {
    return item.tipo
})

const arrayDesafioC = [...new Set(arrayDesafioB)]
console.log(arrayDesafioC)
