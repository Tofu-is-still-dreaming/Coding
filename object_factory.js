
// this에 대하여...

let kim = {
  Username : 'kim',
  first : 100,
  second : 300,
  sum : function(){
   return this.first + this.second;
  }
}
let lee = {
  Username : 'lee',
  first : 200,
  second : 500,
  sum : function(){
   return this.first + this.second;
  }
}
console.log('kim.sum()', kim.sum());
console.log(lee.sum());

// 그리고 생성자 함수 까지...

function Person(name, first, second, third){
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function(){
    return this.first + this.second + this.third;
  }
}
  let p1 = new Person('jack', 10, 10, 30);
  let p2 = new Person('and', 30, 30, 30);
  let p3 = new Person('bean', 100, 150);
  console.log(p1.sum());
  console.log(p1.name);
  console.log(p2.sum());
  console.log(p2.name);
  console.log(p3.sum());
  console.log(p3.name);