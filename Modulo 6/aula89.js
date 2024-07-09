const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 23
};

//Dois jeitos de pegar o atributo do objeto, com notação de ponto e notação de colchete
console.log(pessoa1.nome);
console.log(pessoa1['sobrenome']);


//Assim dá pra escolher dinamicamente qual artibuto do objeto vc vai pegar
const chave = 'idade';
console.log(pessoa1[chave]);        


//Adicionando novos atributos no objeto
pessoa1.nacionalidade = 'brasileiro';       
console.log(pessoa1.nacionalidade);


// Adicionando novos métodos ao objeto
pessoa1.falarNome = function(){             
    return (`Meu nome é ${this.nome} ${this.sobrenome}`);
};

//Arrow function não é adequada pra essa situação, pq ela não pega o "this" do contexto da função, em vez disso, tenta pegar um contexto global (que nesse caso nem sequer tá definido)
pessoa1.cumprimentarArrow = (seuNome, nome) => (`Oi, ${seuNome}, meu nome é ${this.nome}`);
pessoa1.cumprimentar = function(seuNome){
    return (`Oi, ${seuNome}, meu nome é ${this.nome}`);
};


pessoa1.falarNome();
console.log(pessoa1.cumprimentarArrow('Pedro'));
console.log(pessoa1.cumprimentar('Pedro'));

pessoa1.getDataNascimento = function(){
    const ano = new Date().getFullYear();
    return ano - this.idade;
};

console.log('Nascimento:', pessoa1.getDataNascimento());
console.log('====================================================================');

//// Mostrando objeto pessoa1
// console.log('===================================================')
// for (let chave in pessoa1){
//     console.log(`${chave} : ${pessoa1[chave]}`);
// }


////////////////////////////////////////////////////////////////////////////////////////////
function criaPessoa(nome, sobrenome,){
    return{
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};

const p1 = criaPessoa('Pedro', 'Lopes');
console.log(p1.nomeCompleto);
console.log(p1);
