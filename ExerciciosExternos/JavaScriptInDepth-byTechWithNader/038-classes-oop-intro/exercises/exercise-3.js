/*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemy (Flying Alien)?

    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?

    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/

class Player{
   constructor(){
      this.position = 0
   }

   moveLeft(){
      this.position --;
   }
   moveRight(){
      this.position ++;
   }

   shoot(){

   }
}

class Alien{
   constructor(positionX, positionY){
      this.positionX = positionX;
      this.positionY = positionY;
   }

   moveSideways(){
   }

   moveDownway(){
   }

}