// 스코프

// 키워드(var, let, conse 같은)를 넣지 않고 선언하면 전역변수로 선언된다.
// 그래서 함수에서 만든 a변수가 사라지지않고 살아있다

// var는 함수스코프 내에서 살아있어서 함수가 종료되면 사라진다.

let z = 100;
function sum(x) {
  // x는 매개변수(parameter)이면서 지역변수(local val)
  let y = 50; // y는 지역변수
  z = z + y;
  return x + y;
}
console.log(sum(10)); // 10은 전달인자(argument)
console.log(x);
console.log(y);
console.log(z);

// x, y는 sum 함수가 아규먼트를 전달받고 실행된 후 종료되어 사라졌으므로
// 값을 찾을 수가 없다
// z는 sum 함수가 실행됐을 때 z+y 로 150으로 재할당이 되었다.

function test() {
  // 이렇게 키워드를 넣지 않고 선언하면 전역변수로 선언된다.
  a = 1;
}
test();
// 그래서 함수에서 만든 a변수가 사라지지 않고 살아있다~!
console.log(a);

var 변수 = 1; // 여기는 전역스코프
function testb() {
  // 여기는 함수스코프
  // var는 함수 스코프 내에서 살아있음 함수가 종료되면 사라진다.
  var b = 1;
}
testb();
console.log(b);

// 코드블럭 내에서 변수가 어떻게 사라지고 남아있는지 확인해보자.
{
  const a = 1;
  let b = 2;
  var c = 3;
}
console.log(a); // err
console.log(b); // err
console.log(c); // 3 -> 잘나옵니다 :)

if (true) {
  const a = 1;
  let b = 2;
  var c = 3;
}

console.log(a); // err
console.log(b); // err
console.log(c); // 3 -> 잘나옵니다 :)

for (var index = 0; index < 10; index++) {
  console.log(index);
}
console.log(index); // 반복에 사용된 10이 나와버린다...

for (let index = 0; index < 5; index++) {
  console.log(index);
}
console.log(index); // 5가 나오지않는다.
