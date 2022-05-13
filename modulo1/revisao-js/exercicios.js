// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    //return array.reverse()

    let tamanho = array.length
    let array2 = []
    for (i = 0; i < tamanho; i++) {
        array2[i] = array.pop()
    }
    return array2


}
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    //return array.sort(function(a, b){return a-b})

    var teste = false
    while (!teste) {
        teste = true
        for (i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                teste = false
                var pocket = array[i - 1]
                array[i - 1] = array[i]
                array[i] = pocket
            }
        }
    }
    return array
}



// EXERCÍCIO 04
function retornaNumerosPares(array) {
    /*
    let newArray = array.filter((number)=>{
        if (number%2===0){
            return number
        }
    })
    return newArray*/
    let newArray = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i])
        }
    }
    return newArray

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let newArray = array.filter((number) => {
        if (number % 2 === 0) {
            return number
        }
    }).map((number) => {
        return Math.pow(number, 2)
    })
    return newArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    var maiorNum = array.reduce((a, b) => {
        return Math.max(a, b)
    })
    return maiorNum
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 >= num2) {
        return {
            maiorNumero: num1,
            maiorDivisivelPorMenor: num1 % num2 == 0,
            diferenca: num1 - num2
        }
    } else {
        return {
            maiorNumero: num2,
            maiorDivisivelPorMenor: num2 % num1 == 0,
            diferenca: num2 - num1
        }
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = [...Array(n * 2).keys()]
    newArray = []
    for (i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray.push(i)
        }
    }
    return newArray
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return `Equilátero`
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
        return `Escaleno`
    } else {
        return `Isósceles`
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => { return a - b })
    let novoArray = [array[array.length - 2], array[1]]
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa, nome: 'ANÔNIMO'
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const listaPermitida = []
    for (let pessoa of pessoas) {
        if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5) {
            listaPermitida.push(pessoa)
        }
    }
    return listaPermitida
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const listaNegada = []
    for (let pessoa of pessoas) {
        if (pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura < 1.5) {
            listaNegada.push(pessoa)
        }
    }
    return listaNegada
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let divida = 0
    contas.forEach(conta => {
        for (i = 0; i < conta.compras.length; i++) {
            divida += conta.compras[i]
        }
        conta.compras = []
        conta.saldoTotal -= divida
        divida = 0
    })
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let novaOrdemNomes = consultas.sort((a, b) => { return a.nome.toLowerCase() > b.nome.toLowerCase() ? 1 : a.nome.toLowerCase() < b.nome.toLowerCase() ? -1 : 0 })
    return novaOrdemNomes
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const newConsultas = consultas.sort((a, b) => {
        a = a.dataDaConsulta.split('/')
        b = b.dataDaConsulta.split('/')
        return a[2] - b[2] || a[1] - b[1] || a[0] - b[0]
    })
    return newConsultas

}





/*.sort(function(a, b){
            var aa = a.split('/').reverse().join(),
                bb = b.split('/').reverse().join();
            return aa < bb ? -1 : (aa > bb ? 1 : 0);
        })*/