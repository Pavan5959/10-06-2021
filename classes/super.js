class Person{
  constructor(name){
    this.name = name;
    console.log('just hello');
  }
  hello(){
    console.log(`hello this is ${this.name} and my age is ${this.age}`);
  }
}

class People extends Person{
   constructor(age){
     super('source ');
     this.age = age;
   }
   hello()
{
  console.log("hello");
}
   helloTwice(){
     super.hello();
     super.hello();
   }
}

let people = new People(20);
people.helloTwice();
