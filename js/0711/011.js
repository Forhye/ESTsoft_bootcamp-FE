// 함수의 매개변수와 인자
// num1, num2 -> 매개변수(parameter) :함수 안에서 사용할 수 있는 변수
function sum(num1, num2) {
  return num1 + num2;
}
sum(2, 3);
// 2, 3 인자(argument)

// 파선아실 : 파라미터는 선언, 아규먼트는 실행

// 매개변수와 인자의 특징
console.log("----특징");
function sumNumbs(a, b, c) {
  console.log(`${a} + ${b} + ${c}`);
  return a + b + c;
}
console.log(sumNumbs(10, 20, 30, 40));
// 매개변수보다 인자가 많아도 오류가 나지 않음
console.log(sumNumbs(10, 20));
// 인자가 매개변수보다 적으면 남은 매개변수를 undefined로 처리 -> NaN으로 처리
console.log(sumNumbs(0, undefined, 0)); // undefined -> 기본값
console.log(sumNumbs(null, 0, 0)); // null -> null;
// 값이 전달되지 않았거나, undefined -> 기본값

// obj = {name : "hati"} 면 새로운 주소를 가진 값이 obj에 들어감
// obj.c = 3 은 객체 프로퍼티를 추가함

console.log("--- 원시 call ---");
let number = 10;
function test(num) {
  num = num + 10;
  console.log("function", num);
}
test(number);
console.log(number);

console.log("--- 객체 call ---");
const object = { a: 1, b: 2 };
function test2(obj) {
  obj.c = 3; // 객체가 수정됨
  obj = { name: "hati" }; // 다른 객체를 할당함
  console.log("function", obj);
}
test2(object);
console.log(object);
