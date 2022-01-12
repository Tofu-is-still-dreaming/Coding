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
  p1.sum = function(){
    return this.first + this.second + this.third;
  }   
  //     만약 생성된 놈들중 따로 수정을 해주고 싶은 놈이 있으면 이렇게 하면 되지만,
  //     수정해야 할 놈이 많으면 이런식의 p1,p2... 다 바꿔주는건 비효율적인 단점이다.
  //     그리고 생성자 안에 함수(메서드)가 들어있으면 아래 p1~p3...과 같은 객체들이 생성될때마다
  //     각각의 개체에 함수가 실행될거고 그 수가 엄청 많을떈 메모리를 엄청 잡아먹는 비효율을 가져온다. prototype-2로 가보자.
  let p2 = new Person('and', 30, 30, 30);
  p2.sum = function(){
    return 'modified ' + (this.first + this.second + this.third); //위 p1과 똑같이 바꿔줌.
  }
  let p3 = new Person('bean', 100, 150);
  console.log(p1.name);
  console.log(p2.sum());
  console.log(p3.sum());