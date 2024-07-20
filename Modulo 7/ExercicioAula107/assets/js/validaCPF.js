class ValidaCpf {
    constructor(cpfEnviado){
        this.cpf = cpfEnviado.replace(/\D/g, '')
    }

    chamaValidação(){
        if(!this.validaTamanho()) return false;
        if(!this.validaSequencia()) return false;

        this.cpfAnalise = this.deletaDigitoValidacao();
        this.cpfArray = this.converteCpfArray();
        this.addNumVerificador()
    
        if(!this.comparaCpf()) return false;
        console.log('CPF aceito');
    }

    validaTamanho() {
        if (this.cpf.length === 11) return true;
        else {
            console.log('ERRO: CPF inválido. Tamanho inválido')
            return false;
        }
    }

    validaSequencia(){
        if (this.cpf[0].repeat(this.cpf.length) === this.cpf){
            console.log('ERRO: CPF Inválido. Números em sequência');
            return false;
        } else return true;
    }

    deletaDigitoValidacao(){
        return this.cpf.slice(0, -2);
    }

    converteCpfArray(){
        return this.cpfAnalise.split('');
    }


    numVerificador(){
        let total = this.multiplicacao();
        let resultado = 11 - (total % 11);
        if(resultado > 9) return '0';
        else return resultado.toString();
    }

    multiplicacao(){
        let contador = this.cpfArray.length;
        let i = 0;
        let total = 0

        
        for(let multiplicador = contador + 1; multiplicador >=2; multiplicador--){ 
            total = total + multiplicador * this.cpfArray[i];
            i++;
            //console.log(`multiplicador = ${multiplicador}`)
            //console.log('total = ', total);
        }
        return total;
    }

    addNumVerificador(){
        this.cpfArray.push(this.numVerificador());
        this.cpfArray.push(this.numVerificador());
    }

    comparaCpf(){
        // console.log(this.cpfArray.join(''));
        // console.log(this.cpf);
        if(this.cpf === this.cpfArray.join('')) return true;
        else{
            console.log('ERRO: CPF Inválido. Números verificadores inválidos');
            return false;
        }
    }
}


const validaCpf = new ValidaCpf('070.987.720-03');
validaCpf.chamaValidação();





/*
===================== INSTRUÇÕES =====================
======= 705.484.450-52          070.987.720-03 =======


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


PS: Não pode sequência (ex: 111.111.111-11)
*/