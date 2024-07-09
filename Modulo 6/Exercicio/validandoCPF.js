// 705.484.450-52           070.987.720-03

/*
Primeiro multiplica cada digito do CPF e soma resultados
7x   0x   5x   4x   8x   4x   4x   5x  0x
10    9    8    7    6    5    4    3   2
========================================================
70 +  0 + 40 + 28 + 48 + 20 + 16 + 15 + 0      total = 237


Depois pega primeiro dígito de validação pela formula:
11 - (total % 11) = 5               (primeiro dígito) -> se dígito > 9, então dígito = 0


Segunda multiplicação de cada digito do CPF e soma resultados
7x   0x   5x   4x   8x   4x   4x   5x  0x  5x  
11   10    9    8    7    6    5    4   3   2
================================================================
77 +  0 + 45 + 32 + 56 + 24 + 20 + 20 + 0 + 10      total = 284

11 - (total % 11) = 2               (segundo dígito)

*/


// Manipulação dos dados de entrada
let cpfParaValidar = '705.484.450-52';              //Input
let cpfNum = cpfParaValidar.replace(/\D/g, '');     //ReEx pra selecionar apenas números
validaTamanho(cpfNum);                              //Valida tamanho do CPF (evitar vulnerabilidade do zero a esquerda)
let cpf = cpfNum.slice(0,-2);                       //Deleta os últimos 2 números do CPF
let cpfArray = cpf.split('');                       //Divide a String num array contando uma letra em cada posição


// Chamando funções
digito1 = calculaDigito(cpfArray);
cpfArray.push(digito1);                             //empurrando números gerados no array
digito2 = calculaDigito(cpfArray);
cpfArray.push(digito2);                             //empurrando números gerados no array
cpfGerado = cpfArray.join("");                      //tranformando array em string (sem vírgulas)


// Verificação dos dígitos
comparaCpf(cpfGerado, cpfNum);


// Funções
function calculaDigito(cpf){
    total = calcularTotal(cpf);
    digito = 11 - (total % 11);

    if (digito > 9) return 0;
    return digito;
};


function calcularTotal(cpf){
    let contador = cpf.length;
    let i = 0;
    let total = 0;
    for(let mult = contador + 1; mult >= 2; mult--){
        total += cpf[i] * mult;
        i++;
    }
    return total;
}


function comparaCpf(cpfGerado, cpfNum){
    if (cpfGerado != cpfNum){
        throw new Error('========== CPF INVÁLIDO ==========');
    }
}

function validaTamanho(cpf){
    if (cpf.length === 11){
        console.log('Tudo certo');
    } else {
        throw new Error('========== CPF INVÁLIDO ==========');
    }
}








