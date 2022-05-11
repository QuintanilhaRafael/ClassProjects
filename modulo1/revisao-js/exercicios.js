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
 for (i=0; i<tamanho; i++){
array2[i] = array.pop()
 } 
 return array2


}
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    //return array.sort(function(a, b){return a-b})

    var teste = false 
    while (!teste){
        teste = true
  for (i = 1; i < array.length; i+=1){
      if (array[i-1] > array[i]){
          teste = false
          var pocket = array[i-1]
          array[i-1] = array[i]
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
    for (i=0;i<array.length;i++){
        if (array[i]%2===0){
newArray.push(array[i])
        }
    }
    return newArray
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let newArray = array.filter((number)=>{
        if (number%2===0){
            return number
        }
    }).map((number)=>{
        return Math.pow(number, 2)
    })
    return newArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}