// console.log("------------------------------------------------");
// console.log("------------------ATIVIDADE 06------------------");
// console.log("------------------------------------------------");
// console.log("");

// var paisA = 100003; // aumenta 3% ao ano
// var paisB = 300004; // aumenta 1.5% ao ano
// var ano = 0;

// while (paisA < paisB) {
//   ano++;
//   paisA *= 1.03;
//   paisB *= 1.015;
// }
// console.log(`A populaçao do pais A (${Math.round(paisA)}) irá passar a população do pais B (${Math.round(paisB)}) em ${ano} anos!`);

// console.log("------------------------------------------------");
// console.log("");
// console.log("------------------------------------------------");
// console.log("");

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = "X";
let jogadorO = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}
jogar(jogadorO);
jogar(jogadorO);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorX);
jogar(jogadorX);
jogar(jogadorO);
console.table(tabuleiro);
