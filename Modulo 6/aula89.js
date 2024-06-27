const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 32
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
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
};

//Arrow function não é adequada pra essa situação, pq ela não pega o "this" do contexto da função, em vez disso, tenta pegar um contexto global (que nesse caso nem sequer tá definido)
pessoa1.cumprimentarArrow = (seuNome, nome) => console.log(`Oi, ${seuNome}, meu nome é ${this.nome}`);
pessoa1.cumprimentar = function(seuNome){
    console.log(`Oi, ${seuNome}, meu nome é ${this.nome}`);
};


pessoa1.falarNome();
pessoa1.cumprimentarArrow('Pedro');
pessoa1.cumprimentar('Pedro');


