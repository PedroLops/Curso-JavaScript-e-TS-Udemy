




function esperaAi(msg, tempo){
        return new Promise((resolve, reject) =>{
            if(typeof msg !== 'string') reject('Erro: valor de msg nã é uma String');
            setTimeout(() => { 
                resolve(msg); 
            }, tempo);
        });

    
}

esperaAi('msg 1', 1000);
esperaAi('msg 2', 3000);
esperaAi('msg 3', 500);

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
        console.log(e);
    });
