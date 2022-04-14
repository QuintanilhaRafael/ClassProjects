/*
1- a. false  (true && false) 
   b. false  (true && false && true)
   c. true   (true && (true || false))
   d. Boolean

2- Concatenação dos valores informados pelo usuário, já que o resultado dos prompts sempre é recebido como uma string e não foi convertido para Number (int, float, double, etc...).

3- let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/ 

// Questão 1

let idadeUsuario = prompt("Qual a sua idade ?")
let idadeAmigo = prompt("Qual a idade do seu amigue ?")
let comparaIdade = idadeUsuario > idadeAmigo
let diferencaIdade = Number(idadeUsuario-idadeAmigo)               //E a vontade de mandar um switch/case agora ... como faz ? kkkkkkk

console.log("Sua idade é maior do que a do seu amigo ? -", comparaIdade)
console.log(`Diferença entra as idades: ${diferencaIdade} anos.`)

// Questão 2
let numero = prompt("Digite um número par.")
let mod = Number(numero)%2
                                       //if (mod != 0)
console.log(mod)                       //console.log("Eu pedi um número par... T-T")
                                       //else
                                       //console.log("Arrasou, amigue !")   ---> acho que respondi a dois e a três. ^^

// Questão 3
let idadeAnos = prompt("Digite sua idade.")
let idadeMeses = Number(idadeAnos)*12
let idadeDias = Number(idadeAnos)*365
let idadeHoras = Number(idadeAnos)*8760

console.log(`Você tem ${idadeMeses} meses de vida.`)
console.log(`Você tem ${idadeDias} dias de vida.`)
console.log(`Você tem ${idadeHoras} horas de vida.`)       //parece que estou dando uma má noticia pro usuário. =X

// Questão 4
let firstNumber = prompt("Digite o primeiro número.")
let secondNumber = prompt("Digite o segundo número.")

let teste = firstNumber > secondNumber
console.log("O primeiro número é maior que o segundo ? -", teste)
teste = firstNumber == secondNumber
console.log("O primeiro número é igual que o segundo ? -", teste)
teste = firstNumber%secondNumber == 0
console.log("O primeiro número é divisível pelo segundo ? -", teste)
teste = secondNumber%firstNumber == 0
console.log("O segundo número é divisível pelo primeiro ? -", teste)



// DESAFIO !
// 1)
let celcius
let fahrenheit                       
let kelvin                           

 fahrenheit = 77
 kelvin = (fahrenheit - 32) * 5/9 + 273.15
 console.log(`${fahrenheit} F° são ${kelvin} K°`)
 celcius = 80
 fahrenheit = (celcius*(9/5)) + 32
 console.log(`${celcius} C° são ${fahrenheit} F°`)
 celcius = 30
 fahrenheit = (celcius*(9/5)) + 32
 kelvin = (fahrenheit - 32) * 5/9 + 273.15
 console.log(`${celcius} C° são ${fahrenheit} F° e ${kelvin} K°`)
 celcius = prompt("Insira a temperatura em graus Celcius")
 fahrenheit = (Number(celcius)*(9/5)) + 32
 kelvin = (fahrenheit - 32) * 5/9 + 273.15
 console.log(`${celcius} C° são ${fahrenheit} F° e ${kelvin} K°`)

 // 2)
 let quilowattConsumo
 let valorConsumo

 quilowattConsumo = 280
 valorConsumo = 280*0.05
 console.log(`O valor da conta referente ao consumo de ${quilowattConsumo} é de R$${valorConsumo}`)
 let valorDesconto = valorConsumo - valorConsumo*15/100
 console.log(`O valor da conta referente ao consumo de ${quilowattConsumo}, com desconto de 15%, é de R$${valorDesconto}`)
 
 // 3)
 let kg
 let lb
 let oz
 let mi
 let m 
 let ft 
 let l 
 let gal 
 let xic

 lb = 20
 kg = lb/2.205
 console.log(`${lb}lb equivalem a ${kg.toFixed(4)}kg`)
 oz = 10.5
 kg = oz/35.274
 console.log(`${oz}oz equivalem a ${kg.toFixed(4)}kg`)
 mi = 100
 m = mi*1609
 console.log(`${mi}mi equivalem a ${m}m`)
 ft = 50
 m = ft/3.281
 console.log(`${ft}ft equivalem a ${m.toFixed(4)}m`)
 gal = 103.56
 l = gal/0.26417
 console.log(`${gal}gal equivalem a ${l.toFixed(4)}l`)
 xic = 450
 l = xic/4
 console.log(`${xic}xic equivalem a ${l}l`)
 xic = prompt("Quantidade de xicaras a serem convertidas para litros ?")
 l = Number(xic)/4
 console.log(`${xic}xic equivalem a ${l}l`)
















