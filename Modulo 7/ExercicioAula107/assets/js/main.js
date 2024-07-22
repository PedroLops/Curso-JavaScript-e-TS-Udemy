/*
NOME - SOBRENOME - CPF - USUÁRIO

Nenhum campo pode estar vazio
Usuário só poderá contar letras e/ou números
Usuário precisa ter entre 3 e 12 caracteres
Senha precisa ter entre 6 e 12 caracteres
*/

class ValidaFormulario{
    constructor(){
        this.formulario = document.getElementById('formulario');
        this.eventos()
    };

    eventos(){
        this.formulario.addEventListener('submit', evento => {           // Arrow function pra o "this" continuar sendo o "valida"
            this.handleSubmit(evento);                                   // O nome "handleSubmit" é mto usado no react.
        });
    };

    handleSubmit(evento){
        evento.preventDefault();
        const camposValidos = this.camposSaoValidos();                    // Botando numa variável pra poder retornar true ou false e fazer laço condicional lá na frente
        const senhasValidas = this.senhasSaoValidas();

        console.log(camposValidos, senhasValidas);
        if(camposValidos && senhasValidas){
            alert('Usuário cadastrado com sucesso');
            this.formulario.submit();
        }
    }

    camposSaoValidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;       // Pega o elemento HTML que tá imediatamente anterior ao elemento q estamos tratando em "campo". Nesse caso, vai pegar o "label"
            if (!campo.value){                                          // Verifica se campo.value é "falsy" (ou seja, vai apontar se não tiver nada escrito no campo)
                // O "campo" já tem a informação de qual campo estamos falando. O segundo argumento é a "msg" a ser passada pra função criaErro. O "label" foi capturado nas linhas acima
                this.criaErro(campo, `O campo "${label}" não pode estar em branco`);
                valid = false;
                console.log('Valid1 = false');
            };

            if(campo.id === 'inputCpf'){
                if(!this.validaCPF(campo)) valid = false;
                
            };
    
            if(campo.id === 'inputUsuario'){
                if(!this.validaUsuario(campo)) valid = false;
            };            
        };
        console.log('valid do CAMPOS', valid);
        return valid;
    };

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);                        // Insere elemento "anterend", ou seja, depois que o elemento "campo" terminar. O elemento a ser inserido é a "div"
    };

    validaCPF(campo){
        const cpf = new ValidaCpf(campo.value);
        if(!cpf.chamaValidacao()){
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        return true;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Usuário não precisa ter entre 3 e 12 caracteres');
            valid = false;
        }

        if(!usuario.match(/[a-zA-z0-9]+$/g)){         // RegEx pra aceitar n quantidade de letras e números
            this.criaErro(campo, 'Nome de usuário só pode contar letras e/ou números');
            valid = false;
        }
        return true;
    }

    senhasSaoValidas(){
        let valid = true;
        const senha1 = this.formulario.querySelector('#inputSenha');
        const senha2 = this.formulario.querySelector('#inputConfirmarSenha');
        
        if (senha1.value !== senha2.value){
            valid = false;
            this.criaErro(senha1, 'As senhas precisam ser iguais');
            this.criaErro(senha2, 'As senhas precisam ser iguais');
        };

        if(senha1.value.length < 6 || senha1.value.length > 12){
            valid = false;
            this.criaErro(senha1, 'A senha precisa ter entre 6 e 12 caracteres');
            this.criaErro(senha2, 'A senha precisa ter entre 6 e 12 caracteres');
        }

        return valid;
    }





};

const valida = new ValidaFormulario();















// OLD
//
// document.getElementById("formulario").addEventListener('submit', function(evento){
//     evento.preventDefault();
//
//     nomeInput = document.getElementById('inputNome');
//     nomeTxt = nomeInput.value;
//     sobrenomeInput = document.getElementById('inputSobrenome');
//     sobrenomeTxt = sobrenomeInput.value;
//     cpfInput = document.getElementById('inputCpf');
//     cpfTxt = cpfInput.value;
//     usuarioInput = document.getElementById('inputUsuario');
//     usuarioTxt = usuarioInput.value;
//
//  
//     checarVazio();
//
//     function checarVazio(){
//         if (nomeTxt == false || sobrenomeTxt == false || cpfTxt == false || usuarioTxt == false ){
//                 alert('Todos os campos devem estar prenchidos');
//                 console.log('ALERTA')
//             }
//     }
// });







