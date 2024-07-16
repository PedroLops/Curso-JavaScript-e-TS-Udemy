// function Pessoa(nome){
//     this.nome = nome;
// }

// Pessoa.prototype.fala = function(){
//     console.log(`${this.nome} disse "oi"`);
// };

// const pedro = new Pessoa('Pedro');
// const larissa = new Pessoa('Larissa');
// pedro.fala();
// larissa.fala();



const alex = {
    nome: 'alex',
    amigo:{
        nome: 'carla',
        fala: function(...args){
            console.log(args);
            console.log(`Oi, meu nome é ${this.nome}`);
        }
    }
}

alex.amigo.fala.call(alex, 'outros', 'argumentos', 'opicionais');
const testeBindA1 = alex.amigo.fala.bind({nome: 'teste A1'});
alex.amigo.fala();
testeBindA1();
testeBindA1.call(alex); 