//Operados Logicos
var manha = true;
var sono = true;
console.log("----------------------------");
console.log("Manha:", manha, "| Estou com sono?", sono);

console.log("Operador AND (E):", manha && sono); //comprarando se é de manha E estou com sono
console.log("Operador OR (OU):", manha || sono); //comparando se é de manha OU estou com sono

sono = false;
console.log("----------------------------");
console.log("Operador AND (E):", manha && sono); //comprarando se é de manha E estou com sono
console.log("Operador OR (OU):", manha || sono); //comparando se é de manha OU estou com sono

manha = false
console.log("----------------------------");
console.log("Operador AND (E):", manha && sono); //comprarando se é de manha E estou com sono
console.log("Operador OR (OU):", manha || sono); //comparando se é de manha OU estou com sono
