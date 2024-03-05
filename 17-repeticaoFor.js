// // Laço de repetição FOR
// //escrever para o usuario 1000x "prestar mais atenção nas aulas"

// for (let i = 2; i <= 1000; i++) {
//   console.log(i);
// }

// //mostrando numeros impares dom if
// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// escreva todos os numeros de 1 a 20 com FOR
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

//escreva todos os numeros PARES entre 1 e 20 com FOR
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }
// for (let n = 2; n <= 20; n += 2) {
//   if (n % 2 == 0) console.log(n);
// }

//Dado um vetor com números 5,6,8,14,0,9,7,2
//Calcule e exiba a somatória de seus elementos utilizando FOR

//VAR = cria variavel global
//CONST = cria constante, nao muda
// LET = cria variavel funcional dentro de um grupo de codigos
// tudo que esta dentro de CHAVES é um codigos

// var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
// var soma = 0;

// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i];
// }
// console.log(`A soma dos elementos do array é: ${soma}`);

//Dado um vetor com numeros 5,6,8,14,0,9,7,2
//Multiplique todos os seus elementos por 3 utilizando o loop for
//Em seguida, mostre o novo vetor

let numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.table(numeros);
for (let p = 0; p < numeros.length; p++) {
  numeros[p] *= 3;
}

console.table(numeros);

//Dada a matriz 2x3, escrever para o usuario todos os seus elementos
//com as respectivas posições da matriz
// [8,4,1]
// [3,7,8]

var matriz = [
    [8, 4, 1],
    [3, 7, 8],
  ];
  console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) 
{
    for (let coluna = 0; coluna < matriz[0].length; coluna++)
    

  console.log(`Matriz[${linha},${coluna}] = ${matriz[linha][coluna]}`);
    
}