function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function clickBtn(evento){
        evento.preventDefault();
        const inpPeso = form.querySelector('#peso');
        const inpAltura = form.querySelector('#altura');

        validaInput(inpPeso, inpAltura)
    }

    function validaInput(inpPeso, inpAltura){
        if (!isNaN(inpPeso.value)){
            peso = inpPeso.value  
            if (!isNaN(inpAltura.value)){
                altura = inpAltura.value;
                imc = calcularImc(peso, altura);
                exibirResult(imc);
            } else {
                resultado.classList.add('corErro');
                resultado.innerHTML = 'Erro: altura inválida';
                console.log('erro');
            }
        } else {
            resultado.classList.add('corErro');
            resultado.innerHTML = 'Erro: peso inválido';
            console.log('erro');
        }
    }

    function calcularImc(peso, altura){
        return peso/altura**2;
    }

    function exibirResult(imc){
        resultado.classList.remove('corErro');
        resultado.classList.add('corResultado');
        
        if (imc < 18.5){
            resultado.innerHTML = `Seu ICM é ${imc.toFixed(1)} (Abaixo do peso)`;
        } else if (imc < 25){
            resultado.innerHTML = `Seu ICM é ${imc.toFixed(1)} (Peso Normal)`;
        } else if (imc < 30){
            resultado.innerHTML = `Seu ICM é ${imc.toFixed(1)} (Sobrepeso)`;
        } else if (imc < 35) {
            resultado.innerHTML = `Seu ICM é ${imc.toFixed(1)} (Obesidade grau 1)`;
        } else if (imc < 40) {
            resultado.innerHTML = `Seu ICM é ${imc.toFixed(1)} (Obesidade grau 2)`;
        } else {
            resultado.innerHTML = `Seu ICM é ${imc.toFixed(1)} (Obesidade grau 3)`;
        }
    }


    form.addEventListener('submit', clickBtn);
}

meuEscopo();