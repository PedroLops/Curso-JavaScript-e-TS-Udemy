const paragrafos = document.querySelector(".container");
const parag = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);    //acessa o estilo css do site
const bgBody = estilosBody.backgroundColor;             //pega informação da uma parte do estilo css do site

for (i of parag){
    console.log(i);
    console.log(bgBody);
    i.style.backgroundColor = bgBody;   //manipula o style do i (no caso, a tag <p>)
    i.style.color = '#FFFFFF';          //manipula o style do i (no caso, a tag <p>)
}