/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/*const usuario = {
cartas: [],
pontos: 0

}    

const computador = {
   cartas: [],
   pontos: 0
   
   } 

function iniciaJogo(){
   console.log("Bem vindo ao jogo BlackJack!")
   if(confirm("Quer iniciar um jogo ?")) {
      for (i=0; i<2; i++){
         const novaCarta = comprarCarta()
         usuario.cartas[i] = novaCarta.texto
         usuario.pontos = usuario.pontos + novaCarta.valor
      }
      for (i=0; i<2; i++){
         const novaCarta = comprarCarta()
         computador.cartas[i] = novaCarta.texto
         computador.pontos = computador.pontos + novaCarta.valor
      }
   } else {
      console.log("Até a próxima !")
      
   }

return usuario, computador
}  
iniciaJogo() 
console.log(`Usuário - cartas: ${usuario.cartas}  - pontuação ${usuario.pontos}`)
console.log(`Computador - cartas: ${computador.cartas}  - pontuação ${computador.pontos}`)
if (usuario.pontos > computador.pontos && usuario.pontos <= 21 )
console.log(`O usuário ganhou !`)
else if (usuario.pontos == computador.pontos)
console.log(`Empate !`)
else
console.log(`O computador ganhou !`)*/