console.log("------------------------------------------------");
console.log("------------------ATIVIDADE 05------------------");
console.log("------------------------------------------------");
console.log("");

//Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa e retorne sua idade
function idade(anoNascimento) {
  return 2024 - anoNascimento;
}
var nome = "Thiago";
console.log(`O ${nome} tem ${idade(2007)} anos`);

console.log("------------------------------------------------");
console.log("------------------------------------------------");

//crie um função que receba a quantidade de combus
//tivel de um carro e retorne quantos kms ele pode
//viajar com esse combustivel. Considere que o
//veiculo faz uma media de 12 Kms/Logicos

function carro(comb, Kms) {
  return comb * Kms;
}
var Km = 12;
var litros = 10;
console.log(
  `Um veiculo que roda ${Km} Kms/L com ${litros} litro ele rodaria ${carro(
    litros,
    Km
  )} Km`
);

console.log("------------------------------------------------");
console.log("------------------------------------------------");

var idade = 19;

function votar(idade) {
  if (idade >= 16) console.log("Com sua Idade Você ja pode votar");
  else console.log("Você nao tem idade para Votar");
}
votar(idade);

console.log("------------------------------------------------");
console.log("------------------------------------------------");

var idade3 = 10;
function votacao(idade3) {
  switch (true) {
    case idade3 < 16:
      console.log("você não pode votar");
      break;

    case idade3 < 16 && idade < 18:
      console.log("pode votar mas não é obrigatorio");
      break;

    default:
      console.log("você pode votar");
      break;
  }
}
votacao(17);
