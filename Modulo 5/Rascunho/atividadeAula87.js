
//Retorne a soma do dobro de todos os pares
const numeros = [5, 50, 1, 2, 3, 5, 8, 80, 7, 11, 15, 22, 27];

const pares = numeros.filter(function(valor){
    if (valor % 2 ===0) return valor;
});

const dobroPares = pares.map(valor => valor*2);

const somaDobroPares = dobroPares.reduce(function(acumulador, valor){
    acumulador += valor;
    return acumulador;
}, 0);

console.log(pares);
console.log(dobroPares);
console.log(somaDobroPares);