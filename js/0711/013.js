// 함수 선언하는 방법

// 1.함수 선언식
console.log("----함수 선언식");
function func1() {
  console.log("함수 선언식");
}

// 호이스팅이 일어남
// 호이스팅 : 스코프의 최상단으로 선언문만 끌어올리는 것
// 변수는 선언문만 올라갔지만 함수는 함수 자체 전부 다 호이스팅된다.

// 예기치 않은 결과가 나오는걸 방지하기 위해
// 함수를 변수에 할당 할 수 있다.
// 함수 표현식은 호이스팅 때문에 선언전에 사용할 수 없다.
// 함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다.

console.log("----함수 표현식");

let func2 = function () {
  //함수이름 생략 가능
  // 만약 func3 이름을 주더라도 이 안에서만 사용이 가능하다.
  // 외부에서는 func3 에 접근할 수 없음
  console.log("함수 표현식");
};
func2();

// 화살표 함수
console.log("----화살표 함수");
function sum(a, s) {
  return a + s;
}

// 이름이 없음
// 변수에 할당해서 사용해야 함
// 한줄이면 리턴문 생략 가능
const arrowFunc = (a, s) => a + s;
console.log(arrowFunc(1, 2));

const arrowFunc2 = (a) => 2 * a;
console.log(arrowFunc2(1));

// 메서드에서 콜백함수 많이 보게됨
// 함수의 인자로 다른 함수를 전달한다.
[1, 2, 3, 4, 5].map(function (item, index) {
  return item + index;
});
// 같은식
[1, 2, 3, 4, 5].map((item, index) => item + index);

console.log("----즉시실행함수");
(function () {
  console.log("함수를 바로 실행합니다.");
})();
// 선언과 동시에 실행하는 함수
// 이름을 작성하지 않는 경우가 많음
// 한번만 호출하고 재사용하지 않을때나
// 변수에 할당하여 사용

const iifeFunc = (function () {
  console.log("표현식으로 작성한 즉시 실행함수");
  let value = 0;
  return {
    increment: function () {
      value++;
    },
    print: function () {
      console.log(value);
    },
  };
})();
iifeFunc.increment();
iifeFunc.print();

// 단축평가를 이용한 반환값
function test() {
  return null || "b";
}
console.log(test());
