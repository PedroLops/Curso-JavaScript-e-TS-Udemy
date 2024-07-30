/*
    1. Create a loop that loops 10 times starting at 1
    2. On each loop iteration, print out the loop number
    3. On loop number 5, throw an Error Object with the message "Boom!"
    
    4. Catch the error and console.error the loop number
    5. Make sure the loop goes all the way to 10
*/


for (let i = 1; i <= 10; i++){
    if (i === 5){
        try{
            throw new Error('Boom!');
        } catch(erro){
            console.error(i, erro);
        }
    }
    console.log(i);
}