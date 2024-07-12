//setTimeout -> 이 시간 지나고 실행해

const obj = {
  num: 1,
  func() {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};

console.log(this);

// 함수 안에 함수여서 window가 출력되는게 아니라
// window.setTimeout(함수) 안에 this가 있어서 window가 출력되는건가요?

// 메서드의 this는 호출한 객체
// 메서드가 아닌 일반 함수의 this는 window로 가버린다
// 화살표 함수는 선언된 곳의 객체

// 메서드 호출 : this => 메서드가 속한 객체
// 일반 함수 호출 : this => 전역 객체 (브라우저에서는 widow)
// 일부는 몇몇 메서드들은 내부구조에 따라서 아닐수도있다.
// 화살표 함수 : 외부 스코프 => this

obj.func();
