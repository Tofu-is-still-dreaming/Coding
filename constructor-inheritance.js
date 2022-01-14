function Person(name, first, second){
  this.name = name;
  this.first = first;
  this.second = second;
}
Person.prototype.sum = function(){
    return this.first + this.second;
  }


function PersonPlus(name, first, second, third){
  Person.call(this, name, first, second);
  this.third = third;
}
PersonPlus.prototype.__proto__ = Person.prototype; 
// PersonPlus.prototype = Object.create(Person.prototype);
// PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function(){
  return (this.first + this.second + this.third)/3;
}


let p1 = new PersonPlus('kim', 120, 240, 360)
console.log(p1);
console.log(p1.sum());
console.log(p1.avg());
console.log(p1.constructor);