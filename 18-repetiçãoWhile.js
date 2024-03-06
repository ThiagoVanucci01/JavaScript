// let contador = 0;

// while (contador < 5) {
//   console.log(contador);
//   contador++;
// }
// console.log("---------------------------------")

// var x = 10;

// while (x > 10) {
//   console.log(`Entrei no laço while...`);
//   x = 11;
// }
// console.log(`terminei`);

// console.log("---------------------------------")

// //contagem regressiva
// let countdown = 5;

// while (countdown > 0) {
//   console.log(countdown);
//   countdown--;
// }
// console.log(`Lançamento`)

// console.log("---------------------------------")

// let limite = 500
// let fatura = 0
// while (fatura<=limite)
// {
//     let gasto = Math.random() *100
//     fatura += gasto
//     console.log(`gastei R$ ${gasto.toFixed(2)} --------- fatura: R$ ${fatura.toFixed(2)}`);
//     fatura>limite
//     && console.log('estourou limite do cartão') //dois && faz somente um IF, sem else

// }

// //recebendo Dados do usuario
// var imput = prompt(`infome um numero: `)

// //Jogo de cara e coroa - Melhor de 3
//repitição - 3
//Variavel cara e coroa -> aleatorio - 50%
//placar - vitorias e derrotas

var Rodada = 1;
var moeda = "";
var escolhaJogador = "";
var vitoria = 0;
var derrota = 0;

while (Rodada <= 3) {
  moeda = Math.random() >= 0.5 ? "Cara" : "Coroa";
  escolhaJogador = Math.random() >= 0.5 ? "Cara" : "Coroa";

  if (escolhaJogador == moeda) {
    console.log(`Parabéns, você ganhou!`);
    vitoria++;
    console.log(moeda);
  } else {
    console.log(`Que pena, você perdeu!`);
    derrota++;
    console.log(moeda);
  }

  Rodada++;
}

console.log(`-------------------------------`);
console.log(`            Placar             `);
console.log(`-------------------------------`);
console.log(`Vitórias: ${vitoria}`);
console.log(`Derrotas ${derrota}`);
