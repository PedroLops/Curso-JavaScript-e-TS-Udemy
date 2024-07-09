function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.falar = 'Oi';
Pessoa.prototype.falarNome = function(){return `Meu nome é ${this.nome} ${this.sobrenome}`;}

const p1 = new Pessoa('Pedro', 'Lopes');
console.log(p1.nomeCompleto());
console.log(p1.falar);
console.log(p1); 
console.log(p1.falarNome());