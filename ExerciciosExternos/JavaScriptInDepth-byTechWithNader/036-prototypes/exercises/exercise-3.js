/*
    1. Create a new Object and assign it to a variable
       called "store". Give it the following value:
       { name: null, stock: [
        { name: 'candy', quantity: 100 },
        { name: 'fruit', quantity: 7 },
        { name: 'toys', quantity: 23 }] }

    2. Create another new Object called "myStore" and assign
       it to an empty Object. Then, set it's name to:
       "My Wonderful Store"
    3. Set the prototype of "myStore" to be "store"

    4. Create another new Object called "yourStore" and assign
       it to an empty  Object. Then, set it's name to:
       "Not My Wonderful Store"
    5. Set the prototype of "yourStore" to be "store"

    6. Modify the quantity of fruit in "myStore" to be 300
    7. Log out the name and stock from "myStore"
    8. Log out the name and stock from "yourStore"

    9. What is happening and Why?
*/


/*
const store = {
   name: null, stock: [
      { name: 'candy', quantity: 100 },
      { name: 'fruit', quantity: 7 },
      { name: 'toys', quantity: 23 }
   ]
};

const myStore = {};
myStore.name = 'Minha loja foda';            //console.log(myStore);
Object.setPrototypeOf(myStore, store);

const yourStore = {};
yourStore.name = 'Sua loja paia';
Object.setPrototypeOf(yourStore, myStore);

myStore.stock[1].quantity = 300;
console.log(myStore, myStore.stock);
console.log(yourStore, yourStore.stock);
*/



function Loja(){
   this.nome = null;
   this.stock = [
      { name: 'candy', quantity: 100 },
      { name: 'fruit', quantity: 7 },
      { name: 'toys', quantity: 23 }
   ];
}

const minhaLoja = new Loja();
console.log(Object.getOwnPropertyNames(minhaLoja));
minhaLoja.nome = 'Minha new Loja';

const suaLoja = new Loja();
suaLoja.nome = 'Sua new Loja';

minhaLoja.stock[1].quantity = 300;
console.log(minhaLoja.nome, minhaLoja.stock);
console.log(suaLoja.nome, suaLoja.stock);

