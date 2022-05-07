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


    const usuario = {          //obj usuário.
      cartas: [],
      pontos: 0
   
   }
   
   const computador = {      //obj computador.
      cartas: [],
      pontos: 0
   
   }
   
   var resposta = true
   
   function iniciaJogo() {                     //função que pergunta se o usuário quer iniciar o jogo, randomizando 2 cartas para cada (usuário e pc) caso a resposta seja "ok". 
      alert("Bem vindo ao jogo BlackJack!")
      if (confirm("Quer iniciar um jogo ?")) {
         computador.pontos = 0
         usuario.pontos = 0
         usuario.cartas = []
         computador.cartas = []
         for (i = 0; i < 2; i++) {
            const novaCarta = comprarCarta()
            usuario.cartas[i] = novaCarta.texto
            usuario.pontos = usuario.pontos + novaCarta.valor
         }
         for (i = 0; i < 2; i++) {
            const novaCarta = comprarCarta()
            computador.cartas[i] = novaCarta.texto
            computador.pontos = computador.pontos + novaCarta.valor
         }
      } else {
         console.log("Até a próxima !")
   
      }
   
      return usuario, computador
   }
   
   function compraUsuario() {                      //função que compra uma nova carta para o usuário.
      const novaCarta = comprarCarta()
      usuario.cartas.push(novaCarta.texto)
      usuario.pontos = usuario.pontos + novaCarta.valor
   
      return usuario
   }
   
   function compraComputador() {                   //funcão que compra uma nova carta para o pc.
   
      const novaCarta = comprarCarta()
      computador.cartas.push(novaCarta.texto)
      computador.pontos = computador.pontos + novaCarta.valor
   
      return computador
   }
   
   function confirmacao() {                      //função que pergunta se o usuário gostaria de comprar mais uma carta ou não. *Retorna resposta em boolean.*
      if (confirm(
         `Suas cartas são ${usuario.cartas}. A carta revelada do computador é ${computador.cartas[0]}.` +
         "\n" +  
         "Deseja comprar mais uma carta?"
      )) {
         resposta = true
      } else
         resposta = false
      return resposta
   }
   
   //Para garantir que um dos jogadores não comece com duas cartas Ás.
      iniciaJogo()
   while ((usuario.cartas[0].includes('A') == true && usuario.cartas[1].includes('A') == true) || (computador.cartas[0].includes('A') == true && computador.cartas[1].includes('A') == true)) {
      iniciaJogo() 
   }                     
   
   while (resposta===true) {  //Laço do usuário: Momento que o usuário continua comprando as cartas até que decida parar ou passe de 21 pontos.
      confirmacao()          
      if (resposta===true) {   
         compraUsuario()   
      } 
      if (usuario.pontos > 21) {                //testa no laço se o usuário passa dos 21. Se passar = Pc ganha.
         alert(`Usuário - cartas: ${usuario.cartas}  - pontuação ${usuario.pontos}
   Computador - cartas: ${computador.cartas}  - pontuação ${computador.pontos}
   Computador Ganhou !`)
         break;
      }
   }
   
   
   if (usuario.pontos <= 21) {      //Laço do computador: Caso o usuário não tenha passado dos 21 pontos e tenha parado de comprar, computador começa a comprar.
      while (computador.pontos < usuario.pontos) {
         compraComputador()
      }
      if (computador.pontos == usuario.pontos) {                   //Caso pontos iguais = empate.
         alert(`Usuário - cartas: ${usuario.cartas}  - pontuação ${usuario.pontos}
   Computador - cartas: ${computador.cartas}  - pontuação ${computador.pontos}
   Empate !`)
      } else if (computador.pontos > 21) {               //Caso usuário <= 21 e Computador > 21  =  Usuário ganha.
         alert(`Usuário - cartas: ${usuario.cartas}  - pontuação ${usuario.pontos}
   Computador - cartas: ${computador.cartas}  - pontuação ${computador.pontos}
   Usuário Ganhou !`)
      } else {          //Else, os pontos do computador são maiores que do usuário mas ambos abaixo dos 21 e o pc ganha.
         alert(`Usuário - cartas: ${usuario.cartas}  - pontuação ${usuario.pontos}
   Computador - cartas: ${computador.cartas}  - pontuação ${computador.pontos}
   Computador Ganhou !`)
      }
   
   }









