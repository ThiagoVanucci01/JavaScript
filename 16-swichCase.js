//implementação de Condicional em menu
var menuSelecionado = "Home";

switch (menuSelecionado) {
  case "Home":
    console.log(`Voce clicou no link home`);
    break;
  case "Quem somos":
    console.log(`Voce clicou no link Quem somos`);
    break;
  case "Contato":
    console.log(`Voce clicou no link contato`);
    break;
  default:
    console.log(`Opção invalida`);
    break;
}
