let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}
console.log("---------------------------------")


var x = 10;

while (x > 10) {
  console.log(`Entrei no laço while...`);
  x = 11;
}
console.log(`terminei`);


console.log("---------------------------------")


//contagem regressiva
let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log(`Lançamento`)



console.log("---------------------------------")


let limite = 500
let fatura = 0
while (fatura<=limite)
{
    let gasto = Math.random() *100
    fatura += gasto
    console.log(`gastei R$ ${gasto.toFixed(2)} --------- fatura: R$ ${fatura.toFixed(2)}`);
    fatura>limite 
    && console.log('estourou limite do cartão') //dois && faz somente um IF, sem else

}