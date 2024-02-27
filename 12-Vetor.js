// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros);
// console.log(numeros[2]);

// numeros [2] = 6
// console.log(numeros)
// console.log(numeros[2])

var dinos = ["Tiranossauro Rex", "estegossauro", "Anquilossauro"]; // array
console.log(dinos); //Restorna todos itens do array
console.log(dinos[0]); // Retorna o primeiro indice do array
console.log("");
console.table(dinos); // cria tabela com os itens do array
console.log("O vetor tem", dinos.length, "elementos!"); //mostrando quants de itens no array

//adicionando elementos ao vetor existentes
dinos.push("Brontossauro"); // arrau.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("tricerátops"); //array.push adiciona um item no inicio do vetor
console.table(dinos);

//alterando elementos com base no indice (posição)
dinos[3] = "titanossauro";
console.table(dinos);

//obtendo um elemento com base em seu indice
console.log("Primeira posição:", dinos[0]); //retorna um elemento especifico
console.log("Segundo posição;", dinos[1]);
console.log("item da posição 20:", dinos[19]); //retorna indefinido

//removendo elementos

dinos.pop(); //remove o ultimo elemento do vetor
console.table(dinos);

dinos.shift(); // remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1); // remove o elemento a partir do indice 1, contando 1
console.table(dinos);

console.log("");
console.log("-----------------Continuação Aula-----------------");
console.log("");

var dinos = [
  "tricerátops",
  "Tiranossauro Rex",
  "estegossauro",
  "Brontossauro",
  "ictiossauro",
  "pterodáctilo",
  "espinossauro",
];
console.table(dinos);

var elementoProcurado = "Brontossauro";
var posição = dinos.indexOf(elementoProcurado); //retorna o valor/posição do indice na tabela
console.log("O " + elementoProcurado + " está no indice " + posição);

var elementoProcurado = "espinossauro";
var posição = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no indice " + posição);

var elementoProcurado = "tricerátops";
var posição = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no indice " + posição);

//criando copia de array
var copia1 = dinos.slice(); //.slice faz uma copia real do item do vetor
console.log("Vetor copia 1");
console.log(copia1);

var copia2 = dinos.slice(1, 3); //.slice(1, 3) determino onde começa e onde termina a copia
console.log("Veto copia 2");
console.table(copia2);
