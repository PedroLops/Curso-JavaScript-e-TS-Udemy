// const num = Number(prompt('Digite um número'))
// const num2 = Number(prompt('Digite outro número'))
// const confirma = confirm('Sim ou Não?')
// document.body.innerHTML += `Vc marcou: ${confirma} -> ${num} + ${num2} = ${num + num2}`;

const num = Number(prompt('Digite um número'));

const raiz = num ** (1/2);
const inteiro = Number.isInteger(num);
const nan = Number.isNaN(num);
const cima = Math.ceil(num);
const baixo = Math.floor(num);
const dec = Number.parseFloat(num).toFixed(2);

const titulo = document.getElementById('titulo');
titulo.innerHTML = `Seu número foi ${num}`;

document.body.innerHTML += `Raiz quadrada: ${raiz}` + '<br/>';
document.body.innerHTML += `Inteiro: ${inteiro}` + '<br/>';
document.body.innerHTML += `É NaN: ${nan}` + '<br/>';
document.body.innerHTML += `Arredonda pra cima: ${cima}` + '<br/>';
document.body.innerHTML += `Arredonda pra baixo: ${baixo}` + '<br/>';
document.body.innerHTML += `Duas casas decimais: ${dec}` + '<br/>';