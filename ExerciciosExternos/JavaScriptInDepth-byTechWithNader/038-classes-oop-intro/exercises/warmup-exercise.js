/*
    1. Create a class called "Animal"

    2. Allow us to pass in 2 properties/fields to the
       Animal constructor which get set to the instance:
       - type (String)
       - name (String)

    3. Create two instances of the Animal class of your
       choice passing in different "type" and "name" for each

    4. Print out both animal instances

    5. Change the "name" of one of your animals and print it
       out again.

    *HINT: "this" will refer to the instance inside the class
*/


class Animal{
   constructor(type, name){
      this.type = type;
      this.name = name;
   }
}

const dog1 = new Animal('Cachorro', 'Aegon');
const cat1 = new Animal('Gato', 'Letho');

console.log(dog1);
console.log(cat1);

dog1.name = 'Fi do Capeta';
console.log(dog1);
console.log(cat1);