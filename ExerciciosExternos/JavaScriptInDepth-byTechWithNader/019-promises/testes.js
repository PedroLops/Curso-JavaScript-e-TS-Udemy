const Ficha = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log('olá');
        resolve('Recebendo sorvete');                   //Executa com o .then
        //reject('O sorvete acabou');                     //Executa com o .catch
    }, 1000);
});

Ficha
    .then((valorResultado) => {                             //Executa o "resolve"
        console.log(valorResultado);
        return 'Outro valor a ser usado no próximo .then'
    })
    .then((outroValor) =>{
        console.log(outroValor);
    })
    .then(testeFuncaoSomaPromessa(5,10))
    .catch((valorResultadoErro) =>{                        //Execulta o "reject"
        console.log('ERRO:', valorResultadoErro);
    })

console.log(Ficha);



function testeFuncaoSomaPromessa(a, b){
    setTimeout(()=>{
        console.log(`${a} + ${b} = ${a+b}`);
    }, 1500);
}