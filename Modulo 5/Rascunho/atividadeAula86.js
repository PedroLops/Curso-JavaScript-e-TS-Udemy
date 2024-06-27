const numeros = [5, 50, 1, 2, 3, 5, 8, 80, 7, 11, 15, 22, 27];


// Some valores do array (reduce)
const numSoma = numeros.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
}, 0);
console.log(`Soma = ${numSoma}`);



// Retorne array com valores pares (filter)
const numPar = numeros.filter(function (valor){
    if (valor % 2 ===0) return valor;
});
console.log(`Pares = ${numPar}`);


// Retorne array com dobro dos valores (map)
const numDobro = numeros.map(valor => valor*2);
console.log(`Dobro = ${numDobro}`);


//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 320},
    {nome: 'Wallace', idade: 47},
]

const maisVelha = pessoas.reduce(function(acumulador, obj){
    if (acumulador.idade > obj.idade) return acumulador;
    return obj;
}, []);

console.log('Pessoa mais velha =', maisVelha);




