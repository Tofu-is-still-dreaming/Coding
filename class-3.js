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
  class PersonPlus extends Person{
    constructor(name, age, height, weight, power, money){
      super(name, age, height, weight); //이 한줄로 위 Person모객체에서 필요하지만 중복되는 속성값들을 모두 가져옴.
      this.power = power;
      this.money = money;
    }
    sum(){
      return (super.sum() + this.power + this.money);
    }
    avg(){
      return (this.age + this.height + this.weight +  this.power + this.money)/5;
    }
  }

    // super()는 부모 class의 생성자(constructor)를 불러오고 자식클래스에서
    // 기능을 추가함으로서 중복을 없앤다.
    // super 부모 class자체를 가리킴으로서 super.method()를 하면 부모객체의 
    // 메소드를 사용할 수 있게 된다

    // 슈퍼라는 기능이 없으면, 자식클래스에서 부모클래스의 속성과 기능에 추가적인 무언가를 넣어 활용때 
    // 다시 부모클래스의 코드를 사용해야하는 중복이 발생할 것이다.

    // =>super을 사용함으로서 자식클래스가 부모의 요소들을 받아오고, 거기서 필요한 부분만
    //    추가로 더 코딩하여 중복을 제거할 수 있다.
  
  let p1 = new PersonPlus("jack", 30, 183, 80, 500, 1000)
    console.log(p1);
    console.log(p1.sum());
    console.log(p1.avg());
