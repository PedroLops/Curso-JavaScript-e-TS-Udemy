// const data = new Date();
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth());
// console.log('ano', data.getFullYear());
// console.log('hora', data.getHours());
// console.log('min', data.getMinutes());
// console.log('seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('dia sem', data.getDay());
// console.log(Date.now())



// const teste = 1
// console.log(teste)
// function funcao(){
//     console.log(teste + '-DENTRO');
// }
// funcao();



// for (let i = 0; i <= 5; i++){
//     console.log(i);
// }


// const elementos = [
//     {tag: 'p', texto: 'Frase 1'},
//     {tag: 'div', texto: 'Frase 2'},
//     {tag: 'footer', texto: 'Frase 3'},
//     {tag: 'section', texto: 'Frase 4'}
// ]
//
// for (let item in elementos){
//     for (let chave in elementos[item]){
//         console.log(chave, elementos[item][chave]);
//     }
// }
//
// for (let valor of elementos){
//     console.log(valor);
// }
//
// let i = 0;
// while (i < elementos.length){
//     console.log(elementos[i]);
//     i++;
// }


// function random(min, max){
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }
//
// const min = 0;
// const max = 3;
//
// let rand;
// while(rand !== 2){
//     rand = random(min, max);
//     console.log(rand);
// }


// let i = 0;
// while (i <= 20){
//     console.log(i);
//     if (i === 5){ i++; continue;}
//     if (i == 15) { break; }
//     i++;
// }




function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR');
}

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 3200);

setTimeout(function(){
    console.log('Isso aqui aparece dps de n milisegundos')
}, 5000);


