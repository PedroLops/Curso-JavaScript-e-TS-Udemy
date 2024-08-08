/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
    2. Import "fs" from "fs/promises" which is built-in to NodeJS
       (Doesn't need an NPM install)

    3. Go to "wallhaven.cc" and find a wallpaper you like. Visit the
       wallpaper's page and right click the wallpaper and "open image
       in new tab" to you have just the image in a tab. The URL should
       end with .png or .jpg.
       Eg: https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png
    4. Use fetch to get this image, and parse it correctly. Then,
       use "fs" to write a file to your filesystem with the actual
       image itself so you can open it after you run the script.
       Note that these functions in fs return Promises.

    * This is purposefully challenging and will require lots of
      Googling to see how to parse the image and save it using Node.
*/

import fs from "fs/promises";

const request = async() =>{
   try{
      const response = await fetch('https://w.wallhaven.cc/full/6k/wallhaven-6kg2y6.jpg');      
      if (!response.ok){
         throw new Error('Deu erro, pvt: ', response.status);
      }
      
      const arBuffer = await response.arrayBuffer();
      console.log(arBuffer);
      fs.writeFile('./ExerciciosExternos/JavaScriptInDepth-byTechWithNader/032-fetch-api/exercises/imagem.jpg', Buffer.from(arBuffer));
      console.log('passei aq')
     


   } catch(error){
      console.error(error);
   }
}

request();
