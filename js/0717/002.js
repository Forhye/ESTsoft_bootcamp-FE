// DOM

// 이벤트 삽입 제어
// "click", "wheel", "mouseover"
const $button = document.querySelector("button");

$button.addEventListener("click", function () {
  console.log("hello world");
});

function sayHello() {
  console.log("hello world");
}
$button.addEventListener("click", sayHello); //()를 넣지 않음
// 클릭했을때 작동하는 콜백함수이기 때문에
// ()를 넣으면 이미 실행되기 때문에 클릭시 아무일도 일어나지 않음
