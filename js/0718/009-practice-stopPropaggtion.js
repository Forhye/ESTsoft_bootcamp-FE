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

$todoBtn.addEventListener("click", function () {
  let newP = document.createElement("p");
  let newBtn = document.createElement("button");
  let createIndex = document.createElement("span");

  newBtn.innerText = "삭제";
  newBtn.className = "delBtn";

  newP.setAttribute("listNum", index); // index를 listNum에 넣는다

  createIndex.className = "index";
  createIndex.innerText = `${index}`;

  newP.appendChild(createIndex);
  newP.innerText = $input.value;
  newP.appendChild(newBtn);
  $mokdata.appendChild(newP);
});

$mokdata.addEventListener("click", function (e) {
  if (e.target.nodeName === "P") {
    alert(e.target.innerText.slice(0, -2));
    // e.target.texContent.replace(btn.textContent, "") // innerText로는 안됨
    // trim() 공백을 없애줌
    // trim은 사용자로부터 받은 값을 뭔갈 검증(벨리데이션)하거나 확인해야할 때 꼭 써주기
  } else if (e.target.nodeName === "BUTTON") {
    let getIndex = e.target.parentNode.getAttribute("listNum");
    confirm("정말 삭제하시겠습니까?")
      ? (e.target.parentNode.remove(),
        alert("삭제되었습니다."),
        updateIndex(getIndex))
      : alert("취소되었습니다.");
  }
});

// 6번을 삭제 했을 때 num = 6

function updateIndex(num) {
  // 전체 p의 갯수를 다시 구한다
  let $p = document.querySelectorAll(".mokdata p");
  $p.forEach((item) => {
    let index = parseInt(item.getAttribute("listNum"));
    if (index > num) {
      item.querySelector();
      const newIndex = index - 1;
      item.setAttribute("listNum", newIndex);
      console.log(typeof index);
      console.log(newIndex);
    }
  });
}

// 삭제되었을 때.
// 삭제된 타겟의 P의 형제 다음 요소를 불러오고 (다음 요소 이후는 변하지 않음)
// P의 형제요소의 index를 찾아서 -1을 해준다

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
