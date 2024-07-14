Object.prototype.fala =  function(){
    console.log('Salve- eh... quer dizer.... ooh-oho-ahh!');
}

const animal = {
    especie: 'macaco',
}

console.log(animal.__proto__);
console.log(Object.getPrototypeOf(animal));
console.log(Object.getOwnPropertyNames(animal.__proto__));
console.log(animal.fala());
