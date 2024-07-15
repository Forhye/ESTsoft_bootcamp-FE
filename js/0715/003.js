// 호이스팅

// 이렇게 함수선언 앞에 실행해도 호이스팅 때문에 잘 실행됨
sayHi(); // "Hello, lions!"
function sayHi() {
  console.log("Hello, lions!");
}

sayHello();
var sayHello = () => {
  console.log("Hello, lions!");
};
