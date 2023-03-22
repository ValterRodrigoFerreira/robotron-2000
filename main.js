const controleAjuste = document.querySelectorAll(".controle-ajuste");
console.log(controleAjuste.length);

const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

somar.addEventListener("click", (evento) => {
  braco.value = parseInt(braco.value) + 1;
});

subtrair.addEventListener("click", (evento) => {
  braco.value = parseInt(braco.value) - 1;
});

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];
var pos = lista.indexOf("Vermelho");
lista.splice(pos, 1);
console.log(lista.length);

var listaMarcasCarros = [
  "Honda",
  "Fiat",
  "Subaro",
  "Mercedez",
  "Chevrolte",
  "Volkswagem",
];
console.log(listaMarcasCarros);
var retirar = listaMarcasCarros.indexOf("Subaro");
listaMarcasCarros.splice(retirar, 1);
console.log(listaMarcasCarros);
listaMarcasCarros.push("Subaro");
console.log(listaMarcasCarros);
listaMarcasCarros.unshift("Ferrari");
console.log(listaMarcasCarros);
listaMarcasCarros.shift();
console.log(listaMarcasCarros);
listaMarcasCarros.pop();
console.log(listaMarcasCarros);
listaMarcasCarros.unshift("Subaro");
console.log(listaMarcasCarros);
listaMarcasCarros.push("Ferrari");
console.log(listaMarcasCarros);
