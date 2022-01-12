// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.floor(3.7));

let myMath = {
  PI : Math.PI,
  random : function(){
    return Math.random();
  }, 
  floor : function(val){
    return Math.floor(val);
  } 
}
console.log('myMath.PI', myMath.PI)
console.log('random()', myMath.random())
console.log('floor(4.9)', myMath.floor(4.9))