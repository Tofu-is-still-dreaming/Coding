function Person(name, first, second, third){
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

Person.prototype.sum = function(){
  return 'modified : ' + (this.first + this.second + this.third);
}

  let p1 = new Person('jack', 10, 10, 30);
  let p2 = new Person('and', 30, 30, 30);
  p2.sum = function(){
    return 'this : ' + (this.first + this.second + this.third);
  }
  // 수정하고 싶으면 p2처럼 하면 된다.
  let p3 = new Person('bean', 100, 150);
  console.log(p1.name);
  console.log(p2.sum());
  console.log(p3.sum());

//   1. 프로토타입의 의미란?
// : 객체들이 공통으로 사용하는 속성값이다.

// 2.프로토타입이 없을 떄의 비효율적인 점은 무엇인가? 
// :객체를 생성할 떄마다 같은 동작을 하는 중복적인 메소드가 메모리에 계속 생긴다. => 성능 저하, 메모리 낭비 생김.

// 3. 프로토타입을 사용하면 좋은 점은 무엇인가?
// 객체들이 공통으로 사용하는 속성값을 정의해서 객체가 생성할때 마다 같은 속성 값을 만드는 과정을 생략해, 성능 향상과 메모리를 효율적으로 이용할 수 있게 해준다.

// 문법
// : 생성자 함수명.prototype.함수명 =  function(){  } 로 한번만 정의.

// 보충 설명
// : 프로토타입은 객체를 정의하는 시점이 아닌, 자신이 필요한 시점에서 정의 할 수 있기때문에 메모리의 이점이 있다. 또한 프로토타입은 생성된 모든 객체가 공통으로 사용할 수 있고 재정의가 가능하기 떄문에 커스터마이징이 가능하다.