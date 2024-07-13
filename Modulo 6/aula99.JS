//========= Superclasse =========
function Conta(agencia, conta, saldo){
    this.agencia =  agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor){
    if (this.saldo >= valor){
        this.saldo -= valor;
        console.log(`O valor de R$${valor} foi sacado com sucesso`);
    } else {
        console.log(`Não há saldo o suficiente nessa conta para realizar o saque de R$${valor}`);
        this.verSaldo();
    }
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    console.log(`O valor de R$${valor} foi depositado com sucesso`);
};

Conta.prototype.verSaldo = function(){
    console.log(`O saldo atual desta conta é de R$${this.saldo.toFixed(2)}`);
}


//========= Subclasse =========
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor){
    if (valor > this.limite){
        console.log(`O valor de R$${valor.toFixed(2)} excede o limite de saque de R$${this.limite.toFixed(2)}`);
    } else{
        this.saldo -= valor;
        console.log(`O valor de R$${valor} foi sacado com sucesso`);
    }
}


//=====================================  TESTES  =================================================//


const conta1 = new Conta('bb-c', '123', 600);
// conta1.verSaldo();
// conta1.depositar(200);
// conta1.sacar(1000);
// conta1.sacar(800);
// conta1.verSaldo();
// conta1.sacar(0.1);


const contaCorrente1 = new ContaCorrente('bb-cc', '123', 100, 100);
contaCorrente1.depositar(10);
contaCorrente1.verSaldo();
contaCorrente1.sacar(20);
contaCorrente1.verSaldo();
contaCorrente1.sacar(120);
contaCorrente1.sacar(100);
contaCorrente1.verSaldo();