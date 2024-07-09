function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,

        // get (simples af)
        get: function(){
            return estoquePrivado;
        },

        // Usar set para validação do dado antes dele entrar na variável
        set: function(valor){
            if(typeof(valor) !== 'number') {
                throw new TypeError('Valor inválido. Insira um número');
                return;
            } else estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 8;
console.log(p1);
console.log(p1.estoque);


// Exercitando
function Pessoa(nome){
    this.nome = nome;
    let cpf = 'CPF não definido';

    Object.defineProperty(this, 'cpf', {
        enumerable: true,
        configurable: true,

        get: function(){
            return cpf;
        },

        set: function(valor){
            if(valor.length === 14){
                cpf = valor
            } else {
                throw new Error('CPF Inválido');
            }

        }
    });
}

const pe1 = new Pessoa('Pedro');
pe1.cpf= '038.266.675-57';
console.log(`Nome: ${pe1.nome} ---- CPF: ${pe1.cpf}`);