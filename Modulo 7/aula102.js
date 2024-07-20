class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Pedro', 'Lopes');
console.log(p1);
p1.falar();

p1.nomeCompleto = 'Pedro Lopes Rios';
console.log(p1.nomeCompleto);
console.log(p1);


// Fazendo a mesma coisa, ams com prototype em vez de classe
function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`);
}

const p2 = new Pessoa2('Carlos', 'Marcos');
console.log(p2);
p2.falar();
console.log(p1.nomeCompleto);