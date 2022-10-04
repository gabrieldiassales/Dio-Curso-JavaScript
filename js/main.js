// Comandos Básicos ----
const name = 'Gabriel Sales';
var currentYear = 2022;
var bornYear = 1985;

console.log('Idade: ' + (currentYear - bornYear));
console.log('Nome completo: ' + name.replace('Sales', 'Dias Sales'));
console.log('Nome Maiúsculo: ' + name.toUpperCase());
console.log('Nome Minúsculo: ' + name.toLowerCase());

//---- Arrays ----
var fruitList = ['Grape', 'Watermelon', 'Apple'];

console.log(fruitList);
console.log(fruitList.length);
fruitList.push('Banana');

console.log(fruitList);
console.log(fruitList.length);
console.log(fruitList.reverse());
console.log(fruitList.toString());
console.log(fruitList.join('-'));

//----- Dictionary -----
var fruit1 = {name: 'Apple', color: 'red'};
var fruit2 = {name: 'Grape', color: 'purple'};
var fruitListDictionary = [];

fruitListDictionary.push(fruit1);
fruitListDictionary.push(fruit2);
console.log(fruit2);
console.log(fruitListDictionary);

//----- Condicionais, laços de repetição e Date ------
var idade = prompt('Qual sua idade?');

if(idade < 18)
  console.log('Menor de idade!');
else
  console.log('Maior de idade!');

var carList = ['Palio', 'Gol', 'Uno', 'Fiesta'];

var count = 0;
while (count < carList.length){
  console.log(carList[count]);
  count++;
}

for (let index = 0; index < carList.length; index++) {
  console.log(carList[index]);  
}

var date = new Date();
console.log('Day: ' + date.getDay() + ' - Hora: ' + date.getHours() + ' - Minutos: ' + date.getMinutes());

//------- functions -----
function soma(n1, n2){
  return n1 + n2;
}

function clicar(){
  var n1 = document.getElementById('numero1').value;
  var n2 = document.getElementById('numero2').value;
  var result = soma(parseInt(n1), parseInt(n2));
  console.log(result);
  document.getElementById('resultado').innerHTML = 'A soma é: <b>' + result + '</b>';
}

function redirecionar(){
  //Nova Aba
  window.open('https://www.youtube.com/');

  //Redireciona na Aba Atual
  window.location.href = 'https://www.youtube.com/';
}

function entrar(elemento){
  elemento.innerHTML = 'Mouse em cima!';
}

function sair(elemento){
  elemento.innerHTML = 'Passe o mouse aqui!';
}

function load(){
  alert('Hello World!');
}

function change(elemento){
  console.log(elemento.value);
}