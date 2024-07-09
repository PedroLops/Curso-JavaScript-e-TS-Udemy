const produto = {nome: 'produto', preco: 1.8};
//const caneca = {...produto, nome: 'caneca',material: 'porcelana'};

const caneca = {
    ...produto, 
    nome: 'caneca',
    material: 'porcelana'
};

// console.log(produto);
// console.log(caneca);


//console.log(Object.getOwnPropertyDescriptors(caneca));
// console.log('Object.entries==========');
// console.log(Object.entries(produto));
// console.log('Object.keys==========');
// console.log(Object.keys(produto));
// console.log('Object.values==========');
// console.log(Object.values(produto));


for(let entry of Object.entries(caneca)){
    console.log(entry);
};