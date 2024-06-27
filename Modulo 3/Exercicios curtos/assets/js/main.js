function exercicio1(){
    //Escreva uma função que recebe 2 números e retorne o maior deles

    function testeMaior(num1, num2){
        if (num1 > num2){
            return num1;
        } else { 
            return num2;
        }
    }

    function testeMaiorTern(num1, num2){      //Usando operador ternário
        return num1 > num2 ? num1 : num2; 
    }

    //Usando arrow function e operador ternário (deus me livre)
    const testeMaiorArrow = (num1, num2) => num1 > num2 ? num1 : num2;  

    const maiorNum = testeMaior(5, 20);
    const maiorNum2 = testeMaiorTern(5, 20);
    const maiorNum3 = testeMaiorArrow(5, 20);
    console.log(maiorNum, maiorNum2, maiorNum3);

}

function exercicio2(){
    function isPaisagem(altura, largura){
        if (altura < largura){
            return true;
        } else {
            return false;
        }
    }

    function isPaisagemTern(altura, largura){
        return altura < largura ? true : false;
    }

    const isPaisagemArrow = (altura, largura) => altura < largura ? true : false;

    const teste1 = isPaisagem(1280, 720);
    const teste2 = isPaisagemTern(1280, 720);
    const teste3 = isPaisagemArrow(1280, 720);

    console.log(teste1, teste2, teste3);

}

function exercicio3(){

    function testeFizzBuzz(num){
        if (isFizz(num)){
            if (isBuzz(num)){
                return 'FizzBuzz';
            } else {
                return 'Fizz';
            }
        } else {
            return (isBuzz(num)) ? 'Buzz' : num;
        }
    }

    function isFizz(num){
        return (num % 3 === 0) ? true : false;
    }

    function isBuzz(num){
        return (num % 5 === 0) ? true : false;
    }

    function isNum(num){
        if (!isNaN(num)){
            return testeFizzBuzz(num);
        } else {
            return 'Não é um número';
        }
    }

    function executar(num){ 
        const resultado = isNum(num); 
        return resultado;
    }

    console.log('a', executar('a'));
    for(let num = 0; num <= 100; num++){
        resultado = executar(num);
        console.log(num, resultado);
    }
    

}

function exercicio3v2(){
    //Versão mais simples, feita pelo professor

    function fizzBuzz(num){
        if (typeof(num) !== 'number') return num;
        if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
        if (num % 3 === 0) return 'Fizz';
        if (num % 5 === 0) return 'Buzz';
        return num;
    }

    console.log('a', fizzBuzz('a'));
    for (let i = 0; i <= 100; i++){
        console.log(i, fizzBuzz(i));
    }


}

//exercicio1();
//exercicio2();
exercicio3();
console.log('======================================================');
exercicio3v2();