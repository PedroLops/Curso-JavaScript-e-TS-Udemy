const makeTimeout = (ms) =>{
    const timeout = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('all done');
        }, ms);
    });
    return timeout;
};

console.log('Program starting...')

console.log(makeTimeout(1000));

makeTimeout(2000).then((valor)=>{
    console.log('.then:', valor);
});

const fetchStuff = async () =>{
    const resultado = await makeTimeout(1200);
    console.log('async:', resultado);
};

fetchStuff()

console.log('Progress complete')