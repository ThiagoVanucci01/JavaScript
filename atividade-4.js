console.log("------------------------------------------------");
console.log("------------------ATIVIDADE 04------------------");
console.log("------------------------------------------------");
console.log("");

var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
];
console.table(matriz);

console.log(
  "O valor da primeira diagonal é ",
  matriz[0][0],
  matriz[1][1],
  matriz[2][2]
);
console.log(
  "O valor da segundo diagonal é ",
  matriz[0][2],
  matriz[1][1],
  matriz[2][0]
);
console.log("");
console.log(
  "O valor da terceira diagonal é ",
  matriz[2][0],
  matriz[1][1],
  matriz[0][2]
);
console.log(
  "O valor da quarta diagonal é ",
  matriz[2][2],
  matriz[1][1],
  matriz[0][0]
);

console.log("------------------------------------------------");
console.log("");
console.log("------------------------------------------------");
console.log("");
var Dados = [
  "Thiago",
  16,
  "verde",
  "maça",
  "Alamenda Lourenço Avelino 3000, Sempre Verde, Jau-SP",
  "Bacon",
];

console.log("Olá", Dados[0] + "!", "Seja Bem vindo ao nosso sistema.");
console.log(
  "Seu endereço é ",
  Dados[4],
  ", e tem um Pet chamado ",
  Dados[5] + "!"
);
console.log(
  "Sua Idade é " + Dados[1],
  "e gosta muito da fruta " + Dados[3] + "!"
);
console.log("Sua cor favorita é " + Dados[2] + "!");
