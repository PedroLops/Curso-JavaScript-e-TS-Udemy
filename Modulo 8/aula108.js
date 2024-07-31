function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject('Erro: valor de msg nã é uma String');
        setTimeout(() => { 
            resolve(msg); 
        }, tempo);
    });

    
}

// esperaAi('msg 1', 1000);
// esperaAi('msg 2', 3000);
// esperaAi('msg 3', 500);

esperaAi('teste1', 1000)
    .then(resposta =>{
        console.log(resposta);
        return esperaAi('teste2', 3000)
    })
    .then(resposta =>{
        console.log(resposta);
        return esperaAi('teste3', 500)
    }).then(resposta =>{
        console.log(resposta);
    })
    .catch(e =>{
        console.error(e);
    });


async function executar(){
    try{
        const fase1 = await esperaAi('Fase1', 1000);
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', 3000);
        console.log(fase2);
        const fase3 = await esperaAi('Fase3', 500);
        console.log(fase3);
    } catch(erro){
        console.error(erro);
    }    
}

executar();