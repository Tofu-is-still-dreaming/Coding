let kim = {name:'kim', first:100, second:300}
let lee = {name:'lee', first:150, second:350}
function sum(prefix){
  return prefix + (this.first + this.second);
}
  //함수sum은 위 어느객체에도 소속되어 있지않다. 이럴때 함수명.call(this를 쓸 객체이름) 이런식으로 쓸수있다... 비슷한건 apply라는 메서드도 있다.
  //prefix 매개변수도 보여주면서 함수에 매개변수가 있을때 어떤식으로 활용 할 수 있을지도 참고하라고 그냥 쓴거임.
console.log(sum.call(kim, 'This is...'));
console.log(sum.call(lee, 'Value is...'));
let kimSum = sum.bind(kim,'---->');
    //bind는 새로운 이름의 함수?객체?(kimSum)을 만들면서 this에게 무엇을 지칭할지 확실하게 고정시켜버린다. 그리고 ,뒤에 매개변수가 있어도 쓸수있다.
console.log(kimSum());

  //첨언 그냥 이런게 있다 정도로 알고 지나가자... 존재를 알고 있는것과 모르고 있는건 차이가 있다고 하시넹...
