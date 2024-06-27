function Calculadora(){
    this.display = document.querySelector(".display");

    this.inicia = () => {
        this.bntClique();
    };

    this.bntClique = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains("btn-num")) this.addNumDisplay(el);
            else if(el.classList.contains("btn-clear")) this.clearDisplay();
            else if(el.classList.contains("btn-eq")) this.calcular();
        });
    };

    this.addNumDisplay = el => this.display.value += el.innerText;

    this.clearDisplay = () => this.display.value = '';

    this.calcular = () => {
        let conta = [];

        //Preparando string pra usar o split
        aux = this.display.value;
        aux = aux.replace(/[+]/g, " + ");
        aux = aux.replace(/[-]/g, " - ");
        aux = aux.replace(/[*]/g, " * ");
        aux = aux.replace(/[/]/g, " / ");

        conta = aux.split(' ');
        console.log("array inicial:", conta);
        let resultado;

        //Primeiro número
        if (conta[0] != NaN) resultado = parseInt(conta[0]);

        let atual;
        let anterior;
        let proximo;
        for(let i = 1; i <= conta.length-1; i++){
            atual = conta[i];
            anterior = conta[i-1];
            proximo = conta[i+1];

            console.log("ATUAL", atual, atual.type);
            console.log("PROX", proximo, proximo.type);
            
            // Verifica operadores repetidos
            if (atual != NaN && proximo != NaN){
                alert("ERRO DE OPERADORES 1");
                return;
            } 
            
            switch(atual){
                case "+":
                    resultado += proximo;
                    break;
                case "-":
                    resultado -= proximo;
                    break;
                case "*":
                    resultado *= proximo;
                    break;
                case "/":
                    resultado /= proximo;
                    break;
                default:
                    alert("ERRO DE OPERADORES");
                    return;                       

            }
        }
    }

};


const calc1 = new Calculadora();
calc1.inicia();