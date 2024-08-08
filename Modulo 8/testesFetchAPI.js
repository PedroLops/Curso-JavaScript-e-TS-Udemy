// fetch('https://reqres.in/api/users/23')
// .then(res => {
//     if (res.ok){
//         console.log('ok')
//         return res.json();
//     } else { throw new Error}
// })
// .then(data => console.log(data))
// .catch(error => console.error('Deu ERRO'));



// fetch('https://reqres.in/api/users')
// .then(res => {
//     if (res.ok){
//         console.log('ok')
//         return res.json();
//     } else { throw new Error}
// })
// .then(data => console.log(data))
// .catch(error => console.error('Deu ERRO'));


const teste2 = async()=>{
    const resposta = await fetch('https://reqres.in/api/users');
    const respostaJson = await resposta.json();
    console.log(respostaJson);
}


teste2();