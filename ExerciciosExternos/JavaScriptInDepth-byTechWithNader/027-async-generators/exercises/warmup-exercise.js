/*
    1. Create an async Generator function that will yield
       a Promise that resolves after 1 second with a random
       number between 0-9 (integer and inclusive)

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)
*/


async function* gerador(){
   while (true) {
      yield new Promise((resolve, reject)=>{
         setTimeout(()=>{
            resolve(Math.floor(Math.random() * 10));
         },1000);
      });
   }
}


const objGer = gerador();

async function chamaGerador(){
   for await (const i of objGer){
      console.log(i);
   }
}


chamaGerador();