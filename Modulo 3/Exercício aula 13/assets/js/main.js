function meuEscopo(){
    data = new Date();

    diaSemanaAux = data.getDay();
    diaSemana = textoSemana(diaSemanaAux);
    diaMes = data.getDate();
    mesAux = data.getMonth();
    mes = textoMes(mesAux);
    ano = data.getFullYear();
    hora = zeroEsquerda(data.getHours());
    min = zeroEsquerda(data.getMinutes());

    const texto = document.querySelector('.texto');
    texto.innerHTML = `${diaSemana}, ${diaMes} de ${mes} de ${ano} <br> ${hora}:${min}`;

    function textoSemana(diaSemanaAux){
        switch(diaSemanaAux){
            case 0:
                return 'domingo';
            case 1:
                return 'segunda-feira';
            case 2:
                return 'terça-feira';
            case 3:
                return 'quarta-feira';
            case 4:
                return 'quinta-feira';
            case 5:
                return 'sexta-feira';
            case 6:
                return 'sábado';
            default:
                return 'erro - dia da semana não encontrado';
        }   
    }

    function textoMes(mesAux){
        switch(mesAux){
            case 0:
                return 'janeiro';
            case 1:
                return 'fevereiro';
            case 2:
                return 'março';
            case 3:
                return 'abril';
            case 4:
                return 'maio';
            case 5:
                return 'junho';
            case 6:
                return 'julho';
            case 7:
                return 'agosto';
            case 8:
                return 'setembro';
            case 9:
                return 'outubro';
            case 10:
                return 'novembro';
            case 11:
                return 'dezembro';
            default:
                return 'erro - mês não encontrado'
        }
    }

    function zeroEsquerda(num){
        return formatado = num < 10 ? '0' + num : num
         
    }
}

meuEscopo();