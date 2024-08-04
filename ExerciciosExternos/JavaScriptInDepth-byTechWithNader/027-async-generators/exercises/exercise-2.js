/*
    1. Create an async Generator function that has a single
       parameter called "sentence". The function will loop through
       "sentence" letter by letter, and for each letter it will
       yield a Promise that resolves after 100ms that:
       - If the letter is a vowel (aeiou) then resolve with a "*"
       - Otherwise resolve with the letter, but uppercased

    2. Create the generator object by calling the function ^
       with a value of "Monkeys are the coolest animal!"

    3. Use a for-await-of loop to loop through the generator

    *There are MANY ways to check if a string has any of several letters
*/

async function* gerador(sentence){
   sentence = sentence.toUpperCase();
   console.log(sentence);
   for (letra of sentence){
      yield new Promise((resolve, resejct)=>{
         setTimeout(()=>{
            //(letra === '/[AEIOU]/') ? resolve('*') : resolve(letra)
            if (letra === 'A' ||
                letra === 'E' ||
                letra === 'I' ||
                letra === 'O' ||
                letra === 'U'
            ){
               resolve('*');
            } else { resolve(letra); }
         }, 100);
      });
   };
};

const objGerador = gerador('Monkeys are the coolest animal!');

async function chamaGerador(){
   for await (letra of objGerador){
      console.log(letra);
   }
}

chamaGerador();
