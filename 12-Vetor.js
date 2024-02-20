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

dinos.shift() // remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1) // remove o elemento a partir do indice 1, contando 1
console.table(dinos);

