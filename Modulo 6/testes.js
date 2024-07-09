let cpfParaValidar = '705.484.450-52';
let ultimosDigitos = cpfParaValidar.slice(-2);
let cpf = cpfParaValidar.slice(0,-2);       //Deleta os últimos 2 números do CPF
console.log(ultimosDigitos, '=====', cpf);