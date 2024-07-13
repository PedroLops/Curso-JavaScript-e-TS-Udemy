const num = [1, 2, 3, 4, 5];
const numDuplucado = num.map(duplicar);
function duplicar(elemento){
    return elemento * 2;
};
console.log(numDuplucado);


const datas = ["2024,01,24", "2001,01,04", "2018,02,10"];
const datasNovas = datas.map(dataDMA);
function dataDMA(elemento){
    const dataAux = elemento.split(',');
    return `${dataAux[2]}/${dataAux[1]}/${dataAux[0]}`;
}
console.log(datasNovas);
