class Extendable extends Array{
  multiply(){
    let arr = [];
    this.forEach(value => arr.push(value*2));
    return arr;
  }
}
let array = new Extendable();
array.push(1);
array.push(2);
array.push(3);
console.log(array.multiply());
