class Person{
  constructor(name){
    this.name = name;
    console.log('just hello');
  }
  hello(){
    console.log(`hello this is ${this.name}`);
  }
}
let persson = new Person('HAHAH Person');
persson.hello();
