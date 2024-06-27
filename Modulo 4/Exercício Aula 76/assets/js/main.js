function criaCalculadora(){
    return{
        display: document.querySelector('.display'),

        inicia: function(){
            this.cliqueBtn();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', function(e){
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            }.bind(this));
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0,-1);
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);                    //  FALHA ABSURDA DE SEGURANÇA (o "eval" faz o navegador executar o código JS da variável (sucetível a injections))
                if(!conta && conta != 0){
                    alert('Conta inválida!')
                    return;
                } else{
                    this.display.value = conta;
                }
            } catch(e){
                alert('Conta inválida!')
                return;
            }
        },

        cliqueBtn(){
            document.addEventListener('click', function(e){         //Escutando clique do mouse
                const el = e.target;                                //Salvando alvo do clique numa variável, para poder comparar qual botão clicou

                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);              //Mandando o innerText do botão como falor para a função
                } else if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                } else if(el.classList.contains('btn-del')){
                    this.apagaUm();
                } else if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }


                this.display.focus();                                 // fix erro de ENTER repetir último botão clicado
            }.bind(this));                                            // o ".bind(this)" tá fazendo o JS não pegar um outro objeto para ser o 'this'. Sem isso o objeto sairía de Calculadora para Doccument, nessa função
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }



    };
}

const calculadora = criaCalculadora();
calculadora.inicia();