// DOM

// 요소제어
// document.createElement("div")
// => const div = document.createElement("div")
// 자바스크립트 객체에만 생성했다 아직 화면에 넣지 않았다
// document.body.appendChild(div)
// 해줘야 div가 body에 추가됨X 위치합니다.
// div는 객체에 만들어져있고 위치만 바꾸는거라 추가가 아니다.
// 옮기는게 재사용
// document.innerText("아") 하면 div안에 아 가 들어감

// 버튼을 누르면 구구단 2단이 li에 출력하는 코드
const myBtn = document.querySelector("button");
const myUl = document.querySelector("ul");

myBtn.addEventListener("click", function () {
  for (let i = 1; i < 10; i++) {
    const myLi = document.createElement("li");
    myLi.innerText = `2 * ${i} = ${2 * i}`;
    myUl.appendChild(myLi);
  }
});

// const $button = document.querySelector("button");
// const $ul = document.querySelector("ul");

// $button.addEventListener("click", () => {
//   const liArr = [];
//   for (let i = 1; i <= 9; i++) {
//     liArr.push(`<li>2 * ${i} = ${2 * i}</li>`);
//   }
//   $ul.innerHTML = liArr.join("");
// });

let i = 1;
myBtn.addEventListener("click", function () {
  const j = i % 9 === 0 ? 9 : i % 9;
  const myLi = document.createElement("li");
  myLi.innerHTML = "2 * " + j + " = " + 2 * j;
  myUl.appendChild(myLi);
  i++;
});
