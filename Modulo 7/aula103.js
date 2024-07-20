const _velocidade = Symbol('vel');      //Valor privado

class Carro {
    constructor(nome){
        this.nome;
        this[_velocidade] = 0;
    };

    get velocidade(){
        return this[_velocidade];
    };

    set velocidade(valor){
        if (valor === NaN) return;
        if (valor <= 25 && valor >= 0){
            this[_velocidade] = valor;
        } else{
            console.log('Erro: velocidade incompatível com valores máximos ou mínimos');
            console.log('valor digitado = ', valor);
        }
    }

    acelerar(){
        if(this[_velocidade] < 20){
            this[_velocidade]++;
        }
    }

    freiar(){
        if(this[_velocidade] > 0){
            this[_velocidade]--;
        }
    }
}

const c1 = new Carro('Palio');
for(let i = 0; i <= 25; i++){
    //console.log(c1.velocidade);
    c1.acelerar();
}

// for(let i = 0; i <= 25; i++){
//     console.log(c1.velocidade);
//     c1.freiar();
// }

console.log(c1.velocidade);
console.log(c1);
console.log(c1.nome);
c1.velocidade = -2;
console.log(c1.velocidade);