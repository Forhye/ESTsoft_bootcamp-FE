// preventDefault : 브라우저의 기본 이벤트 동작을 취소한다
// 이벤트 흐름(이벤트 전파) 자체를 막지 않음

window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  console.log(this);
  this.alert("해당 페이지에서는 오른쪽 클릭을 제한합니다.");
});
