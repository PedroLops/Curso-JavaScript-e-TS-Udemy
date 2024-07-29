/*
    Let's see how a "Factory" class/function might work

    1. Create a class called "EnemyFactory"

    2. Make the following work to produce the output shown:

    const factory = new EnemyFactory();
    const flying = factory.generateFlyingEnemy("batman");
    flying.fly(); // batman can fly!

    const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
    swimming.swim(); // aquaman can swim!

    * What is the difference between these two? When might you
      even use this? Where are the property keys of each of these:
      - EnemyFactory
      - factory
      - factory.__proto__
      - flying.__proto__
      - swimming.__proto__
*/


class EnemyFactory{
  generateFlyingEnemy(nome){
    class FlyingEnemy{
      constructor(nome){
        this.nome = nome;
      }

      fly(){
        console.log(`${this.nome} pode voar`);
      }
    }
    return new FlyingEnemy(nome);
  }

  generateSwimingEnemy(nome){
    class SwimingEnemy{
      constructor(nome){
        this.nome = nome;
      }

      swim(){
        console.log(`${this.nome} está nadando`);
      }
    }
    return new SwimingEnemy(nome);
  }

}


const factory = new EnemyFactory();
const flying = factory.generateFlyingEnemy('Batman');
flying.fly();

const swimming = factory.generateSwimingEnemy('Aquaman');
swimming.swim();
