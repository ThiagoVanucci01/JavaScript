var anoNascimento = 2007;

if (anoNascimento > 2003) console.log(`A pessoa nasceu depois de 2003!`);

if (anoNascimento < 2003) console.log(`A pessoa nasceu antes de 2003!`);

if (anoNascimento == 2003) console.log(`A pessoa nasceu em 2003!`);

//Condicional simples if-else
var anoNascimento = 2002;
if (anoNascimento > 2000)
  // if = Se
  console.log(`A pessoa nasceu antes de 2000!`);
// = Senão
else console.log(`A pessoa nasceu antes de 2000!`);

//Condicional composto com if
const login = "admin"; //digitado pelo usuario
var senha = "123456"; //digitado pelo usuario
//--------------------------------------//
const loginUser = "admin"; //banco de dados
const senhaUser = "admin"; //banco de dados

if (login == loginUser && senha == senhaUser)
  // && significa E // || significa OU
  console.log(`Acesso permitido`);
else console.log(`Acesso negado!`);

//Função sinaleiro
//else = Senão // if = se
function sinaleiro(cor) {
  if (cor == "Vermelho") console.log("Pare");
  else if (cor == "Amarelo") console.log("Preste atenção");
  else if (cor == "Verde") console.log("Siga");
  else
    console.log(`Você informou cores diferentes de verde, amarelo ou vermelho`);
}
sinaleiro("Vermelho");

//desvio Condicional if com bloco de comandos
console.log("_____________------------_____________");
var idade = 18;

if (idade <= 18) {
  console.log("entrou no if");
  idade++;
  console.log("incrementavel a idade...");
  console.log(`A nova idade é ${idade}`);
  console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`terminei`);

console.log("_____________------------_____________");
// desvio Condicional if inline (ternario)
//     validação (algo == algo) ou (algo > alguma coisa)
//     ? (if)
//     termos de aceite do if (se for verdadeiro)
//     : (else)
//     se for falso
//     testeDeValidação == teste ? "bla bla" : ("ble ble")


var preço = 500
var resultado = preço <=100 ? "ta barato" : "Vish ta cara"

console.log(Resultado)