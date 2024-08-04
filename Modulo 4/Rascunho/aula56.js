// function teste(operador, acumulador, ...numeros){
//     console.log("numeros = ", numeros);
//     for(let numero of numeros){
//         if (operador == '+'){ acumulador += numero;}
//         if (operador == '-'){ acumulador -= numero;}
//         if (operador == '*'){ acumulador *= numero;}
//         if (operador == '/'){ acumulador /= numero;}
//     }
// }
// teste('+', 1, 3, 4, 7, 12, 543);


//FACTORY FUNCTIONS
//
// function criaPessoa(nome, sobrenome, idade){
//     const testeVarPriv = 'hallo';
//     return{
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade,
//         fala(){
//             console.log(`Oi, meu nome é ${nome} ${sobrenome}. Eu tenho ${idade} anos.`);
//         },
//
//         //Getter (a função passa a fingir que é um atributo)
//         get nomeCompleto(){
//             return this.nome + ' ' + this.sobrenome;
//         },
//
//         //Setter (vantagem: adicionar logica pra não quebrar o código sem querer, como deixar nome vazio)
//         set nomeCompleto(nomeNovo){
//             nomeNovo = nomeNovo.split(' ');
//             this.nome = nomeNovo.shift();
//             this.sobrenome = nomeNovo.join(' ');
//         },
//
//     }
// }
//
// const p1 = criaPessoa('Pedro', 'Lopes', 23);
// p1.fala();
// console.log(p1.nomeCompleto);           // Usando o get
//
// p1.nomeCompleto = 'Pedin Lop Rios';     // Usando o set
// console.log(p1.nomeCompleto);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log('==============');





// FUNÇÃO CONSTRUTORA
// Começa com letra maiúscula e usa (new) na hora de criar
//
// function Pessoa(nome, sobrenome){
//     const Id = 123;                 // Tá privado
//
//     this.nome = nome;               // Tá público (pq usou o this)
//     this.sobrenome = sobrenome;
//
//     this.falaArrow = () => {
//         console.log(`${this.nome} tá falando com vc. (arrow go brrrr)`);
//     }
//
//     this.fala = function(){
//         console.log(`${this.nome} tá falando com vc.`);
//     }
// }
//
// const p1 = new Pessoa('Pedro', 'Lopes');
// p1.fala();
// p1.falaArrow();



// // FUNÇÕES GERADORAS
// function* geradora1(){
//     console.log('teste a');
//     yield 'valor 1';
//     console.log('teste b');
//     yield 'valor 2';
//     console.log('teste c');
//     yield 'valor 3';
//     console.log('teste d');
//     return 'valor final';
// }

// let g1 = geradora1()

// // //TESTE CASO 1
// // console.log(g1.next());
// // console.log(g1.next());
// // console.log(g1.next());
// // console.log(g1.next());

// //TESTE CASO 2
// for (let valor of g1){
//     console.log(valor);
// }


// //Sem função geradora
// function gerarRandom(){
//     return Math.random();
// }
// for (let i = 1; i <=10; i++){
//     console.log(gerarRandom());
//}

// //Com função geradora
// function* gerarAleatorio(){
//     while (true){
//        yield Math.random(); 
//     }
// }

// const aleatorio = gerarAleatorio();
// let i = 1;
// while (true){
//     console.log(aleatorio.next())
//     i++;
//     if(i >= 10){
//         break;
//     }
    
// }

