/*
    1. Log out all the properties within the Object
       prototype. (Only it's own properties)

    2. Log out all the properties within the Array
       prototype. (Only it's own properties)

    3. Log out all the properties within the Array
       prototype's prototype.

    4. Does this make sense? Why?
*/

//MEU MÉTODO
// const obj = {}
// const array = []
// console.log(Object.getOwnPropertyNames(obj.__proto__));
// console.log(Object.getOwnPropertyNames(array.__proto__));
// console.log(Object.getOwnPropertyNames(array.__proto__.__proto__));


//MÉTODO DO PROF (mais ou menos)
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype.__proto__));
//console.log(Object.getOwnPropertyNames([].__proto__.__proto__));