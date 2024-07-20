class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    };

    ligar(){
        if (this.ligado == false){
            this.ligado = true;
        } else {
            console.log('Dispositivo já está ligado');
        };
    }

    desligar(){
        if (this.ligado == true){
            this.ligado = false;
        } else {
            console.log('Dispositivo já está desligado');
        };
    }
}


const d1 = new DispositivoEletronico('celular');
console.log(d1);
d1.ligar();
console.log(d1);
d1.ligar();


class Smartphone extends DispositivoEletronico{
    constructor(nome, marca, modelo, memoria){
        super(nome);                //Chama o construtor da classe pai (e passa os parametros necessários)
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
    }
};

const s1 = new Smartphone('Poco X3 PRO', 'POCO', 'X3 PRO', '256gb');
console.log(s1);