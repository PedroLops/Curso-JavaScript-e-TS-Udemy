/*
    1. Log out "Program started"
    2. Throw an Error Object with the message "Uh oh!"
    3. At the end of the program log out "Program complete!"
    4. Run the program and watch it crash

    5. Create a try/catch block that console.error's out 
       the error message
    6. Run the program again and see the difference
*/

console.log('Program started');


try{
    throw erro = new Error('Uh oh!');
} catch {
    console.log(erro);
}
console.log('Program complete!');


console.log('========= agr com console.error ==========')

try{
    throw new Error('Uh oh (2)!');
} catch (erro2) {                                   // Nesse caso não precisa botar uma variavel quando criar o objeto Error, pq tá passando esse erro nos parametros do catch
    console.error(erro2);                    
}
console.error('Program complete!');