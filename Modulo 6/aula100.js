// function criaPessoa(nome, sobrenome){
//     const pessoaPrototype = {
//         falar(){
//             console.log(`${this.nome} está falando`);
//         },
//         comer(){
//             console.log(`${this.nome} está comendo`);
//         },
//         beber(){
//             console.log(`${this.nome} está bebendo`);
//         },
//     };

//     return Object.create(pessoaPrototype, {
//         nome: {
//             value: nome,
//             //enumerable: true,  // Torna a propriedade enumerável
//         },
//         sobrenome: {
//             value: sobrenome,
//             //enumerable: true,  // Torna a propriedade enumerável
//         }
//     });
// }




//Outro jeito de lidar com "herança" é não fazendo herança nenhuma.
/*
Composing é uma alternativa não hierarquizada. 
Dá mais flexibilidade pra mudança no código. Em vez de uma pirâmide,
só vai "importando" os bloquinhos de codigo dentro do objeto que precisar
*/

const falar = {                                                 // Objeto falar
    falar(){                                                    // Função falar()
        console.log(`${this.nome} está falando`);
    }
};
const comer = {                                                 
    comer(){                                                    
        console.log(`${this.nome} está comendo`);
    }
};
const beber = {                                                 
    beber(){                                                    
        console.log(`${this.nome} está bebendo`);
    }
};

//const pessoaPrototype = {...falar, ...comer, ...beber};           //Usando rest operator

// Ou: usando Object assign
const pessoaPrototype = Object.assign({}, falar, comer, beber);
//Object.assing aqui tá: Object.assing({criando um objeto vazio}, passando, atributos, e funcções, pra, ele);

function criaPessoa(nome, sobrenome){
    /*
    Object.create tá criando um objeto usando o pessoaPrototype de molde.
    No pessoaPrototype estamos usando o Object.assign pra passar os métodos e aq estamos passando os atributos
    */
    return Object.create(pessoaPrototype, {
        nome: {value: nome, enumerable: true},
        sobrenome: {value: sobrenome, enumerable: true}
    });
}


const p1 = criaPessoa('Pedro', 'Lopes');
console.log(p1);
p1.falar();

