const makeTimeout = (ms) =>{
    const timeout = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //resolve('all done');
            reject('deu merda');
        }, ms);
    });
    return timeout;
};

console.log('Program starting...')


const useData = async ()=>{
    try{
        console.log('Fetching some data...')
        const resultado = await makeTimeout(1000);
        console.log(resultado);
    } catch(erro){
        console.error(erro);
    }
}

useData();