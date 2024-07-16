/*
    1. Create the following function:

    function Person(name, age, favouriteFood) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
    }

    2. Add the following to the Person prototype:
        Person.prototype.greet = function() {
            console.log(`${this.name} says hello!`);
        }

    2. Create a function called "SuperHero" that
       has the same 3 parameters as Person, but
       adds a fourth one called: "overpowered"

    3. Inside the "SuperHero" function, set up all the
       properties on to the "this" Object just like in
       Person, with the addition of "overpowered".

    5. Set the Prototype of "SuperHero" to be "Person"
       (This can be done in 2 ways)

    6. Create an instance of Person and SuperHero:
       const anya = new Person("Anya", 40, "Sour Keys")
       const batman = new SuperHero("Bruce", 55, "Steak", false)

    7. Log out the prototype chains of each of these Objects
    8. Can you call "greet" on batman? Why?
    9. What properties are on each Object? Why?

    BONUS: Did we just create Object Oriented Programming?
*/


function Person(name, age, favouriteFood) {
    this.name = name;
    this.age = age;
    this.favouriteFood = favouriteFood;
}

Person.prototype.greet = function(){
    console.log(`${this.name} disse "oi"!`);
}


function SuperHero(name, age, favouriteFood, superpower){
    //Person.call(this);
    this.name = name;
    this.age = age;
    this.favouriteFood = favouriteFood;
    this.superpower = superpower;
}

// Object.setPrototypeOf(SuperHero, Person)                     //Não funciona pq eles são Construtores, não Objetos
Object.setPrototypeOf(SuperHero.prototype, Person.prototype)    //Agr sim vc tá se referindo aso Objetos

const anya = new Person("Anya", 40, "Sour Keys")
const batman = new SuperHero("Bruce", 55, "Steak", false)

console.log(batman.__proto__);
console.log(batman);
console.log(anya);
anya.greet();
batman.greet();