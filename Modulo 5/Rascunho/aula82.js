// const nomes = ['Pedro', 'João', 'Carlos', 'Marcos', 'Letho'];
// const removidos = nomes.splice(-3,2);
// console.log(nomes, removidos);


// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = a1.concat(a2);
// const a4 = [...a1, ...a2, [7, 8, 9], ...[7, 8, 9]];
// console.log(a3);
// console.log(a4);



// // FILTER (não modifica o array original)
//
// const numeros = [5, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// function callbackFilter(valor, indice, array){
//     if (valor > 10) return true;                                //A função filter exige q vc retorne um booleano
//     else return false;
//
//     //A função poderia ser reduzida pra "return valor > 10 ;", já que ela iria retornar se a condição (valor > 10 é verdadeira ou falsa)
// }
// const numerosFiltrados = numeros.filter(callbackFilter);        //Passa uma função de callback
// console.log(numerosFiltrados);
//
// const numerosFiltrados2 = numeros.filter(valor => valor > 10);  //Versão reduzida com função anonima e arroy function
// console.log(numerosFiltrados2);
//
//
// const pessoas = [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade: 55},
//     {nome: 'Leticia', idade: 19},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Wallace', idade: 47},
// ]
//
// const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length > 6);   //obj seria o "valor" q tava no exemplo anterior. O nome é arbitrário
// console.log(pessoasNomeGrande);
// console.log('=====================');
// const pessoasMais50 = pessoas.filter(obj => obj.idade > 50);
// console.log(pessoasMais50);



// //MAP 
// 
// const numeros = [5, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosDobro = numeros.map(valor => valor*2);
// console.log(numerosDobro);
// 
// const numerosTriplo = numeros.map(function(valor){
//     return `${valor} * 3 = ${valor * 3}`;                   //Dá pra ir brincando com o return tbm
// });
// console.log(numerosTriplo);



// // Reduce
//
// const numeros = [5, 50, 1, 2, 3, 5, 8, 80, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array){
//     if (valor % 2 === 0) acumulador.push(valor);
//     console.log(acumulador, valor);
//     return acumulador;
// }, []);
//
// console.log('=====-=======')
// console.log(total);


// ForEach (funciona pra iterar arrays)
const numeros2 = [5, 50, 1, 2, 3];
numeros2.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});