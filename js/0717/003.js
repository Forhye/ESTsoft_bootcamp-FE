// DOM

// const $button = document.querySelector("button");

// $button.addEventListener("click", function () {
//   console.log("hello world");
// });

// 클래스 네임으로 제어하기
// const $li = document.querySelector("li.test");
// $button.addEventListener("click", function () {
//   $button.classList.toggle("blue");
//   $button.innerText = "test";
// });

const $button = document.querySelector("button");

$button.addEventListener("click", () => {
  $button.classList.add("blue"); // 클래스 blue 추가
  // $button.classList.toggle("blue") // 없으면 넣어주고, 있으면 제거
  // $button.classList.remove("blue") // 클래스 blue 제거
  // $button.classList.contains("blue") // 클래스 blue 있는지 확인
});
