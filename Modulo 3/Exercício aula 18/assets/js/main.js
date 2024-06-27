function meuEscopo(){
    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ]

    const container = document.querySelector('.container');
    const div = document.createElement('div');

    for (let i = 0; i < elementos.length; i++){
        const tagCriada = document.createElement(elementos[i].tag);
        tagCriada.innerHTML = elementos[i].texto;
        div.appendChild(tagCriada);
    }

    container.appendChild(div);


    // for (let item in elementos){
    //     for (let chave in elementos[item]){
    //         console.log(chave, elementos[item][chave]);
    //     }
    // }
}

meuEscopo();


