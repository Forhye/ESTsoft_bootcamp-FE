// 1. P 태그를 클릭하면 p 태그의 컨텐츠를 출력하는 alert 창을 띄워주고
// 2. 삭제 버튼을 클릭하면 삭제할 것인지를 물어보는 confirm 창을 띄워주고, 확인을 누르면 P태그를 삭제합니다.

// p 태그를 가져온다
// p를 클릭한다
// p의 컨텐츠를 가져온다
// alert창을 띄운다
// alert창에 p의 컨텐츠를 넣어준다.
// 버튼(삭제) 어떻게 지우지?

const $todoBtn = document.getElementsByClassName("todoBtn")[0];
const $input = document.querySelector("input");
const $mokdata = document.querySelector(".mokdata");
let index = document.querySelectorAll(".mokdata p").length;
console.log(index);

$todoBtn.addEventListener("click", function () {
  let newP = document.createElement("p");
  let newBtn = document.createElement("button");

  newBtn.innerText = "삭제";
  newBtn.className = "delBtn";
  newP.innerText = `${++index}. ${$input.value}`;

  newP.appendChild(newBtn);
  $mokdata.appendChild(newP);
});

function indexSort() {
  document.querySelectorAll(".mokdata p");
}
indexSort();

$mokdata.addEventListener("click", function (e) {
  if (e.target.nodeName === "P") {
    alert(e.target.innerText.slice(0, -2));
  } else if (e.target.nodeName === "BUTTON") {
    confirm("정말 삭제하시겠습니까?")
      ? (e.target.parentNode.remove(), alert("삭제되었습니다."))
      : alert("취소되었습니다.");
  }
});

// // p태그를 순회하면서 클릭 이벤트 발생
// const allElement = $p.forEach((item) => {
//   item.addEventListener("click", function (e) {
//     // this.childNodes[1].remove(); // 아예 삭제 버튼이 사라짐
//     alert(e.target.innerText.slice(0, -2));
//     // console.log(e.target.innerText.slice(0, -2));
//   });
// });

// // 삭제버튼을 가져온다
// // 클릭하면 삭제할건지 컨펌창 띄운다
// // 삭제를 누르면 삭제되었습니다
// // p태그를 삭제한다
// // 취소를 누르면 삭제하지 않고 취소되었습니다 메세지 출력

// // 삭제버튼을 누르면 p태그 리스트가 삭제됩니다.
// $btn.addEventListener("click", function (e) {
//   e.stopPropagation();
//   if (confirm("정말 삭제하시겠습니까?")) {
//     e.target.parentNode.remove();
//     alert("삭제되었습니다");
//   } else {
//     alert("취소되었습니다.");
//   }
// });
