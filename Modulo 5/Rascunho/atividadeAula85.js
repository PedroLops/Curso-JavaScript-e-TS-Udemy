// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id" em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasStringMap = pessoas.map(obj => obj.nome);

const pessoasSemNome = pessoas.map(function(obj){
    delete obj.nome;
    return obj;
});

const pessoasId = pessoas.map(function(obj, indice){
    obj.id = (indice * 10);          //Vai mexer no objeto original
    return obj;
});

const pessoasId2 = pessoas.map(function(obj, indice){
    const newObj = {...obj};        //Vai criar uma cópia do objeto com or est operator, pra n mexer no original
    newObj.id = indice;
    return newObj;
});


console.log(pessoasStringMap);
console.log(pessoasSemNome);
console.log(pessoasId);
console.log(pessoasId2);