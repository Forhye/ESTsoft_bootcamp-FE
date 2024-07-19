// 프로토타입 : 로봇의 속성을 이어받게 해주는 것

// 생성자가 계속 새로 함수를 만들어서 ????????????????????

Array.prototype.함수 = function () {};
// 모든 Array 객체에서 함수 라는 이름의 함수를 사용할 수 있게 되었다.

let Array = [1, 2, 3];
console.log(Array.함수); // undefined가 나옴 (아직 함수 기능을 넣지 않아서)
console.log(Array.함수2); // error

// - 객체는 태어날때 자동으로 prototype이라는 공간이 생긴다
// - 어떠한 객체가 태어날 때 함께 탄생하게되는 객체의 유전자
// - 실제 유전자처럼 내가 선택하거나 선언하지 않아도 객체에 포함되어 있다
// - 커스텀으로 내가 원하는 함수를 추가할 수 있다.