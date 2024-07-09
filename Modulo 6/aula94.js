// const objA = {
//     chaveA: 'A'
// };

// function Obj (chave){
//     this.chaveB = chave;
// }

// const objB = new Obj('B')
// Object.setPrototypeOf(objB, objA);
// console.log(objB.chaveA, objB.chaveB);
// console.log(Object.getPrototypeOf(objA));


function Produto(nome, preco){
    this.nome = nome;
    //this.preco = preco;

    Object.defineProperty(this, 'preco', {
        //writable: true,
        confugurable: true,
        enumerable: true,
        
        get: function(){
            return preco;
        },

        set: function(valorPreco){
            if (valorPreco >= 0){
                preco = valorPreco;
            } else {
                console.log("preço não pode ser menor que zero")
            }
        
        }
    });

}

Produto.prototype.darDesconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}


const caneca = new Produto('Caneca', 10);
console.log(`Caneca = ${caneca.preco}`);
caneca.darDesconto(10);
console.log(`Caneca com desconto = ${caneca.preco}`);
caneca.preco = 20;
console.log(`Caneca com desconto = ${caneca.preco}`);
caneca.preco = -5;
console.log(`Caneca com desconto = ${caneca.preco}`);

