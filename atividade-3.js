console.log("------------------------------------------------");
console.log("------------------ATIVIDADE 03------------------");
console.log("------------------------------------------------");
console.log("");

//criando o Array
var frutas = ["Banana", "Maça", "Pera", "Uva", "Morango"];
console.table(frutas);

//adicionar a tangerina no final
frutas.push("tangerina"); //adiciona o elemento no final
console.table(frutas);

//adicionar Goiaba no inicio
frutas.unshift("Goiaba"); //adiciona o elemento no inicio
console.table(frutas);

//mostrar indice 5
console.log("No indice 5 esta a fruta", frutas[5]); //exibe o conteudo do indice 5
console.log("");

//excluir Uva
frutas.splice(4, 1); //exclui o elemento do indice 4
console.table(frutas);

//copia de array
var copiaF = frutas.slice(2, 5);
console.table(copiaF);

console.log("");
console.log("------------------------------------------------");
console.log("");

//crie e imprima um vetor com 5 elementos numéricos
var numeros = [6, 5, 4, 3, 2];
console.table(numeros);

//imprima o 3 elemento do vetor
console.log("O 3° elemento desse vetor é " + numeros[2]);

//copia do vetor original
var copia = numeros.slice()
console.table(copia);

copia[0] = numeros[0] *2
copia[1] = numeros[1] *2
copia[2] = numeros[2] *2
copia[3] = numeros[3] *2
copia[4] = numeros[4] *2
console.table(copia);