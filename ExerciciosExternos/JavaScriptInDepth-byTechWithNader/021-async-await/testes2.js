const makeTimeout = (ms) =>{
    const timeout = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('all done');
        }, ms);
    });
    return timeout;
};

console.log('Program starting...')

const fetchData = async () =>{
    console.log('Fetching first set of data...');
    const resultado1 = makeTimeout(1500);
    console.log('Fetching second set of data...');
    const resultado2 = makeTimeout(900);
    const resultadosFinais = await Promise.all([resultado1, resultado2]);
    console.log('Done fetching data...', resultadosFinais);

    console.log('Progress complete')
}
fetchData();

