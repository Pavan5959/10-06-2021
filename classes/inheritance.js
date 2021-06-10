class Person{
  constructor(name){
    this.name = name;
    console.log('just hello');
  }
  hello(){
    console.log(`hello this is ${this.name} adn my age is ${this.age}`);
  }
}

class People extends Person{
   constructor(age){
     super('source ');
     this.age = age;
   }
}

let people = new People(20);
people.hello();
