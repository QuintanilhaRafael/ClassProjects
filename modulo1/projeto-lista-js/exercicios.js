// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let largura = Number(prompt("Digite a largura do triângulo."))
  let altura = Number(prompt("Digite a altura do triângulo."))
  let area = largura * altura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Em que ano estamos ?"))
  let anoNascimento = Number(prompt("Em que ano você nasceu ?"))
  let idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  imc = peso / (Math.pow(altura, 2))
  return imc.toFixed(1)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual seu nome ?")
  let idade = prompt("Qual sua idade ?")
  let email = prompt("Qual seu e-mail ?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let frutas = [prompt("Digite uma fruta."), prompt("Digite outra fruta."), prompt("Digite mais uma fruta.")]
  console.log(frutas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let comparaStrings
  comparaStrings = string1.length == string2.length
  return comparaStrings


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiroIndex = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = primeiroIndex
  return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let comparaStringsLower
  comparaStringsLower = string1.toLowerCase() == string2.toLowerCase()
  return comparaStringsLower

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = prompt("Em que ano estamos ?")
  let anoNascimento = prompt("Qual seu ano de nascimento ?")
  let anoCarteirinha = prompt("Qual o ano de emissão da sua CNH ?")
  let idade = anoAtual - anoNascimento
  let tempoCarteirinha = anoAtual - anoCarteirinha
  let primeiroCaso = idade <= 20 && tempoCarteirinha >= 5
  let segundoCaso = idade >= 20 && idade <= 50 && tempoCarteirinha >= 10
  let terceiroCaso = idade > 50 && tempoCarteirinha > 15
  if (idade <= 20)
    console.log(primeiroCaso)
  else if (idade >= 20 && idade <= 50)
    console.log(segundoCaso)
  else if (idade > 50)
    console.log(terceiroCaso)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let primeiraCondicao = ano % 400 == 0
  let segundaCondicao = ano % 4 == 0 && ano % 100 != 0
  if (primeiraCondicao == true)
    return primeiraCondicao
  else return segundaCondicao




}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idade = prompt("Você tem mais de 18 anos?")
  let escolaridade = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  if (idade == "sim")
    idade = true
  else idade = false
  if (escolaridade == "sim")
    escolaridade = true
  else escolaridade = false
  if (disponibilidade == "sim")
    disponibilidade = true
  else disponibilidade = false
  console.log(idade && escolaridade && disponibilidade)




}