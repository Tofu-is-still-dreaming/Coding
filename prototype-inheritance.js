  //참고로 class-3 다음강의가 이거다.
  //객체 끼리의 상속은 JS만의 특징이다.
let superObj = {superVal : 'super'}
  // let subObj = {subVal : 'sub'}
console.log(superObj);
  // console.log(subObj.subVal);
  // console.log(subObj.superVal);

  // __proto__를 이용해서 객체끼리도 상속 받을수 있다는걸 알수있다. 프로토는 이미 많이 쓰이고 있지만 공식인정(표준화)은 못받은상태인 그런상태...
  // subObj.__proto__ = superObj;
  // console.log(subObj.superVal);

let subObj = Object.create(superObj);
console.log(subObj.superVal);
  // __proto__와 똑같이 작동하는 표준화된 정석적인 방법이다. 상속받을 객체선언 = 객체생성(모객체) 이런느낌... 


  // 상속받는놈이 부모객체의 프로퍼티?키값을 원하면 바꿔서 받을순 있지만 그 부모객체의 프로퍼티 자체를 바꿀순 없다.
subObj.superVal = 'sub';
console.log(superObj.superVal);
console.log(subObj.superVal);

// ------------------------------------------------------------

let kim = {
  name : 'kim',
  first:30, second:20,
  sum:function(){
    return this.first + this.second
  } 
}
// let lee = {
//   name : 'lee',
//   first:10, second:10,
//   avg:function(){
//     return (this.first+this.second)/2;
//   }
// }
// lee.__proto__ = kim;
let lee = Object.create(kim);
  lee.name = 'lee',
  lee.first = 10,
  this.second = 10, //여기서 this는 kim을 가르킨다... 그러니 정상적으로 lee객체에서 뭔가 가져오려면 여기서 this말고 lee로 똑바로 써야함.
  lee.avg = function(){
    return (this.first+lee.second)/2; //여기서 this는 lee를 가르킴ㅎㅎ
  }

console.log(kim.sum());
console.log(lee.sum());
console.log(lee.avg());

//여기서 프로토로 lee를 kim의 자식으로 상속하지 않았으면 두번째 콘솔로그는 작동하지 않았을거임 왜냐면 lee객체 속성값에 sum이 없으니까.
//그리고 kim에겐 없지만 lee에는 있는 avg메서드를 실행가능함.
//객체상속의 이런 특징들을 이용해서 중복은 피하고, 효율적인 코드를 만들수 있음.