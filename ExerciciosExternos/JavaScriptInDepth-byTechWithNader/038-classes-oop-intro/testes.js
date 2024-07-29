function Player(name, hp, mp, item){
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.item = item;
}

const hanSolo = new Player('Han Solo', 80, 20, ['blaster']);
const darthVader = new Player('Darth Vader', 250, 80, ['lightSaber']);


console.log(hanSolo);
console.log(darthVader);