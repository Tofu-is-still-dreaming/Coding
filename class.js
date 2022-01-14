  class Person{
    constructor(name, age, height, weight){
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
    sum(){
      return this.age + this.height + this.weight;
    }
  }  
  // Person.prototype.sum = function(){
  //   return this.age + this.height + this.weight;
  // }
  // 이렇게 해도 되지만 위처럼 class 안에 넣되 constructor 밖에 두고 짧게써도 앞으로 생성될 모든객체에 적용이 왼다.
  
  let p1 = new Person("jack", 30, 183, 80)
    console.log(p1);
    console.log(p1.sum())



  // let p1 = new Person('jack', 10, 10, 30);
  // let p2 = new Person('and', 30, 30, 30);
  // p2.sum = function(){
  //   return 'this : ' + (this.first + this.second + this.third);
  // }

  // let p3 = new Person('bean', 100, 150);
  // console.log(p1.name);
  // console.log(p2.sum());
  // console.log(p3.sum());
  // 이건 왜 주석처리 해놓은거지...?