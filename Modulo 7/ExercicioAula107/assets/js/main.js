/*
NOME - SOBRENOME - CPF - USUÁRIO

Nenhum campo pode estar vazio
Usuário só poderá contar letras e/ou números
Usuário precisa ter entre 3 e 12 caracteres
Senha precisa ter entre 6 e 12 caracteres
*/


document.getElementById("formulario").addEventListener('submit', function(evento){
    evento.preventDefault();

    nomeInput = document.getElementById('inputNome');
    nomeTxt = nomeInput.value;
    sobrenomeInput = document.getElementById('inputSobrenome');
    sobrenomeTxt = sobrenomeInput.value;
    cpfInput = document.getElementById('inputCpf');
    cpfTxt = cpfInput.value;
    usuarioInput = document.getElementById('inputUsuario');
    usuarioTxt = usuarioInput.value;

    
    checarVazio();

    function checarVazio(){
        if (nomeTxt == false || sobrenomeTxt == false || cpfTxt == false || usuarioTxt == false ){
                alert('Todos os campos devem estar prenchidos');
                console.log('ALERTA')
            }
    }

});







