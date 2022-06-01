```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let cont = 0
  resposta2 = `O número ${numeroEscolhido} aparece ${cont}x`
  for (i=0; i<arrayDeNumeros.length; i++ ) {
    if (arrayDeNumeros[i] === numeroEscolhido) {
      cont++
    }
  }
  if(cont === 0){
    return `Número não encontrado`
  } else {
    return `O número ${numeroEscolhido} aparece ${cont}x`
  }
}