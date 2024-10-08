/*
    1. Create the following Object and assign it to a variable
       named "book":
       {
        name: "Harry Potter",
        author: "J.K. Rowling",
        characters: {
            mainChars: ["Harry", "Ron", "Hermione"],
            list: function() {
                for (const char of this.mainChars) {
                    console.log(char)
                }
            }
        }
       }

    2. Call the list function on the book and explain the behaviour

    3. How would you make the "list" method temporarily (for one
       function call) log out this array instead:
       ["Draco", "Severus", "Voldemort"] ?

    HINT* What methods can we use on Functions to manipulate "this"?
*/


const book = {
    name: "Harry Potter",
    author: "J.K. Rowling",
    characters: {
        mainChars: ["Harry", "Ron", "Hermione"],
        list: function() {
            for (const char of this.mainChars) {
                console.log(char)
            }
        }
    }
};

const book2 = {
    name: "Harry Potter",
    author: "J.K. Rowling",
    characters: {
        mainChars: ["Draco", "Severus", "Voldemort"],
        list: function() {
            for (const char of this.mainChars) {
                console.log(char)
            }
        }
    }
};


book.characters.list();
console.log();
book.characters.list.call(book2.characters);
console.log();
book.characters.list.apply({mainChars: ["Draco", "Severus", "Voldemort"]});