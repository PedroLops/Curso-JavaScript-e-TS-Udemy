/*
    1. Create an async Generator function that has a 50%
       chance of yielding either of the following Promises:
       - Resolve after 500ms with the value "Fast!"
       - Resolve after 3000ms with the value "Slow!"

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    *HINT: Math.random() is your friend
*/


async function* gerador(){
   while(true){
      const sorte = Math.random();
      yield new Promise((resolve, reject)=>{
         if (sorte > 0.5){
            setTimeout(()=>{
               resolve('fast!');
            }, 500);
         } else{
            setTimeout(()=>{
               resolve('slow!');
            }, 3000);
         };
      });
   };
};

const objGerador = gerador();

async function chamaGerador(){
   for await (const i of objGerador){
      console.log(i);
   }
}
chamaGerador();