function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

    //Teste pra ver se tá passando o método de dentro do construtor como herança (mas n to conseguindo acessar nem criando um objeto Produto)
    function fala(){
        console.log('Teste herança metodo');
        return 'Teste herança metodo';
    };
};

Produto.prototype.aumento = function(valorAumento){
    this.preco += valorAumento;
};

Produto.prototype.desconto = function(porcentagem){
    this.preco = this.preco * (1 - porcentagem / 100);
};


//==========================================================================================
// Criando Camiseta
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);        //Faz a Camiseta herdar os atributos DENTRO DO CONSTRUTOR de Produto
    this.cor = cor;
}

//O Object.create() cria um objeto Camiseta "aos moldes" do objeto Produto (herdando de produto)
Camiseta.prototype = Object.create(Produto.prototype);
//Essa linha setta o construtor de volta pra Camiseta (a linha anterior fez o construtor Produto ser usado no lugar de Camiseta)
Camiseta.prototype.constructor = Camiseta;

const camiseta1 = new Camiseta('Regata', 20, 'Preta');
camiseta1.aumento(10);
console.log(camiseta1);

//Sobrescrevendo função aumento (herdada de produto) detro de Camiseta (especificando)
Camiseta.prototype.aumento = function (valorAumentoPerc){
    this.preco = this.preco * (1 + valorAumentoPerc / 100);
};
camiseta1.aumento(10);
console.log(camiseta1);



//==========================================================================================
// Criando Caneca

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        configurable: false,        //Sei lá pq. Ele botou assim pra n poder apagar nem sobrescrever essa função
        enumerable: true,

        get: function(){
            return estoque;
        },

        set: function(valorEstoque){
            estoque = valorEstoque;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const caneca1 = new Caneca('Café', 5, 'Vidro', 2);
console.log(caneca1, caneca1.estoque);
caneca1.estoque = 5;
console.log(caneca1, caneca1.estoque);














const p1 = new Produto('testeProduto', 100);
console.log(p1);
console.log(p1.fala);



