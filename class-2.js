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
    // avg(){
    //   return (this.age + this.height + this.weight)/3;
    // }
    // 필요하다면 이렇게 코드를 추가해서 넣으면 되지만 위 class를 라이브러리에서 갖고온다던가 다른사람이 짠 코드를 건드려야 하거나 그게 아니더라도
    // 드문 경우지만 이렇게 코드를 직접 넣어주는게 불편한,불필요한 상황이 있을수도 있다. 그럴때 상속을 이용한다.

    //     1.상속이란, a라는 클래스를 만들었는데, a와 같은 기능을 기반으로 새로운 기능을 추가한 b라는 클래스를 만들고 싶을 때, b클래스에 a에 기능을 모두 다 옮겨 적지 않고, class b(새로 만드는 클래스명) extends a(베이스 클래스) {b에만 새로 추가하고 싶은 기능} 라는 문법을 사용하여 만드는 것을 뜻합니다.
    // 2.상속이 없을 때 불편한 점은, a 클래스를 기반으로 b,c..클래스를 만들 때 기반이 되는 클래스의 기능을 모두 옮겨 적는 중복이 발생하며, 부모 클래스를 수정하면 자식 클래스 모두 수정을 해야하는 번거로움, 즉 유지보수가 어렵다.
    // 3.상속받는 자식 클래스를 구현하는 방법은, class b(새로 만드는 클래스명) extends a(베이스 클래스) {b에만 새로 추가하고 싶은 기능} 라는 문법을 사용하여 만듭니다.
  }  
  class PersonPlus extends Person{
    avg(){
      return (this.age + this.height + this.weight)/2;
    }
  }
  // 상속

  let p1 = new PersonPlus("jack", 30, 183, 80)
    console.log(p1);
    console.log(p1.sum());
    console.log(p1.avg());
