function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    // Edita propriedades do objeto. Nesse caso foi pra proteger o valor estoque (deixa "privado" ?)
    Object.defineProperty(this, 'estoque', {
        enumerable: true,       // mostra a chave                      (sim ou não)
        //value: estoque,         // mostra o valor                    (qual valor) : DELETADO PQ N PODE USAR ISSO JUNTO COM SETTER
        writeble: false,        // pode alterar o valor                (sim ou não)
        configurable: false,     // pode deletar ou alterar atributos  (sim ou não)

        set: function(valor){
            estoque = valor;
        },

        get: function(){
            return estoque;
        }
    });

    //Mesma coisa de cima, mas pode fazer de várioas atributos ao mesmo tempo
    Object.defineProperties(this, {
        nome:{
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco:{
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

p1.estoque = 10;

console.log(p1.estoque);