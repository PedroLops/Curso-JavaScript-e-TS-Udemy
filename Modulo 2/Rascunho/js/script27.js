function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    const pessoas = []

    function criaPessoa(nome, sobrenome, peso, altura){
        return{
            nome,
            sobrenome,
            peso,
            altura
        };
    }

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value} - Peso: ${peso.value} - Altura: ${altura.value}</p>`
        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value));
        console.log(pessoas);

    }

    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();