// fetch('https://reqres.in/api/users/23')
// .then(res => {
//     if (res.ok){
//         console.log('ok')
//         return res.json();
//     } else { throw new Error}
// })
// .then(data => console.log(data))
// .catch(error => console.error('Deu ERRO'));



fetch('https://reqres.in/api/users')
.then(res => {
    if (res.ok){
        console.log('ok')
        return res.json();
    } else { throw new Error}
})
.then(data => console.log(data))
.catch(error => console.error('Deu ERRO'));