// 셀렉트 박스를 클릭했을 때 ul이 보이고 다시 누르면 없어지는 toggle
// 셀렉트 박스 오른쪽 화살표가 클릭했을때 아래로, 위로 향한다
// 아래 과목을 클릭했을 대 과목이 맨상위 또는 바깥에 표시되게 하기

const $btn = document.querySelector(".btn-select");
$btn.addEventListener("click", function () {
  $btn.classList.toggle("on");
});

const $ul = document.querySelector("ul");
// li를 클릭했을때 버블링 단계가 일어나서 이벤트 전파가 된다.
const $p = document.querySelector("p");
$ul.addEventListener("click", function (e) {
  $btn.innerText = e.target.innerText;
  $btn.classList.toggle("on"); // li 텍스트를 클릭하면 셀렉트박스가 닫힌다
  $p.textContent = e.target.innerText;
  // console.log(e.target.innerText);
  // console.log($btn.innerText);
});
