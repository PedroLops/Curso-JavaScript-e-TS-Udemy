// function testeArray(nome = 'NomePadrão'){
//     const aluno = ['pedro', 'joão', 'marcia', 'otávio'];
//     aluno.push(nome);
//     // console.log(aluno.slice(0,-1));
//     // console.log(aluno);
//     return aluno;
// }

// const teste = testeArray('PEDIN');
// console.log(teste);

// const teste2 = testeArray();
// console.log(teste2);



const pessoa1 = {
    nome : 'Pedro',
    sobrenome : 'Lopes',
    idade : '22',

    fala(){
        console.log(`Oi, meu nome é ${this.nome}`)
    }
};
pessoa1.fala()


function criaPessoa (nome, sobrenome, idade){
    return{
        nome : nome,
        sobrenome : sobrenome,
        idade : idade
    }
};
const pessoa2 = criaPessoa('Jonathan', 'Joestar', '18');
console.log(pessoa2)
console.log(pessoa2.sobrenome)






