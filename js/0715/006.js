// 클로저

// 함수가 끝나고 x가 살아있으면서 휘발되지 않고
// 다른 곳에 참조되지 않게 하는 방법'
// 내부함수가 외부함수의 환경을 기억한다

// innerFunc을 만들어주는 함수
function outerFunc() {
  let x = 10;
  // 내부함수 innerFunc
  function innerFunc(y) {
    x += y;
    return x;
  }
  return innerFunc;
}
// 결과값으로 outerFunc의 innerFunc을 반환
const func = outerFunc();

// x에 접근할 수 있는 방법은 func() 뿐이다.
// 또는

const func2 = outerFunc();
func2(10);

// 이렇게 하면 다른 공간으로 할당되어 새로 계산한다

// innerFunc 는 바로 접근이 불가능하다.
// 함수가 실행되어야 접근이 가능하다

function 제곱(x) {
  function 승수(y) {
    return y ** x;
  }
  return 승수;
}

var 제곱2 = 제곱(2);
// y ** 2 가된다.
var 제곱3 = 제곱(3);
// y ** 3 이된다.

//같지만 간소화한 코드
function 제곱(x) {
  return function (y) {
    return y ** x;
  };
}

var 제곱2 = 제곱(2);
var 제곱3 = 제곱(3);

제곱2(10);
제곱3(10);

console.log(제곱2(10)); // 100
console.log(제곱3(10)); // 1000

const x = 100;
function a() {
  const x = 1;
  b();
}

function b() {
  console.log(x);
}

a(); // 100
b(); // 100

// 비교대상

const xx = 100;

function a() {
  const xx = 1;
  function b() {
    console.log(xx);
  }
  b();
}

a();
