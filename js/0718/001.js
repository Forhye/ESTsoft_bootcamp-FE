const btnFirst = document.querySelector(".btn-first");
//
// 이벤트가 실행될 때 event라는 매개변수에 객체를 넣는다.
// 실행하면 PointerEvent가 들어옴 target:button.btnFirst
btnFirst.addEventListener("click", (event) => {
  console.log(event);
});

// 이벤트 대상을 찾아갈때 위에서 아래로 내려가는 단계를 캡쳐링 단계
// 반대로 올라가는 단계는 버블링 단계
// 캡쳐링 이벤트 리스너를 실행시킨다
