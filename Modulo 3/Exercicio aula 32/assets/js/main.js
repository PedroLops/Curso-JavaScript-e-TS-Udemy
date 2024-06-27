const inputNovaTarefa = document.querySelector('.inputNovaTarefa');
const btnAddTarefa = document.querySelector('.btnAddTarefa');
const listaTarefas = document.querySelector('.listaTarefas');
const btnApagar = document.querySelector('.btnApagar');

recuperaTarefasSalvas();

btnAddTarefa.addEventListener('click', addTarefa);

inputNovaTarefa.addEventListener('keypress', function(e){
    if (e.keyCode=== 13) addTarefa();
});



function addTarefa(){
    if(!inputNovaTarefa.value) return;
    criaLi(inputNovaTarefa.value);
    salvarTarefas();
}

function criaLi(textoInput, btnApagar){
    const li = document.createElement('li');
    li.innerText = textoInput;
    listaTarefas.appendChild(li, btnApagar);
    limpaInput();
    criarBtnApagar(li);
}

function limpaInput(){
    inputNovaTarefa.value = '';
}


function criarBtnApagar(li){
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'APAGAR';
    btnApagar.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.appendChild(btnApagar);
    btnApagar.setAttribute('class','btnApagar');
}
 
document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('btnApagar')) apagarItem(el);
});

function apagarItem(el){
    el.parentElement.remove();
    salvarTarefas();
}


function salvarTarefas(){
    const liTarefas = listaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('APAGAR', '');
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function recuperaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    for(let tarefa of listaDeTarefas){
        criaLi(tarefa);
    }
}