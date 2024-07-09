// undefined
// 언디파인드는 타입이 언디파인드이다
// 값이 할당되지 않았거나 정의도지 않은 변수에 접근할때 반환된다

let a;
console.log(a);
console.log(typeof a);

//변수가 선언되었는지 확인 할 수 있다
// if (b) {
//   console.log("b입니다");
// }
// 오류남

if (typeof b) {
  console.log("b입니다");
}
if (typeof b === "undefined") {
  console.log("b는 선언되지 않았습니다");
}
console.log(`typeof b : ${typeof b}`);
console.log(`typeof b : ${typeof typeof b}`);

//빈문자열은 ture로 평가되고
//"undefined" 는 문자열
//undefined는 타입
