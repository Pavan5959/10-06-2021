class Index{
  constructor(name){
    this._name = name;
    console.log(this.name)
  }
  get name(){
    return this._name.toUpperCase()
  }
  set name(name){
   if(name.length > 2)
   {
     this._name = name;
   }
   else
   {
     console.log('nothing');
   }
  }
}
let index = new Index('getters and setters');
console.log(index);
index.name = 'gs';
console.log(index.name);

index.name = 'gst';
console.log(index.name);
console.log(index._name);
