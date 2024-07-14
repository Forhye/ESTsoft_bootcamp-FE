// 반환값
// return 값;

function sum(a, b) {
  return a + b;
  console.log("return 문 뒤에 오는 코드!");
}
console.log(sum(2, 3));

function sub(a, b) {
  console.log(a - b);
}
console.log(sub(5, 2));

// return을 만나면 함수는 종료된다.
function sumNumb(a, b) {
  if (isNaN(a) || isNaN(b)) {
    // 함수X 실행구문
    console.log("숫자가 아닙니다!");
    return; // undefined 반환값이 없기 때문에
  }
  // a와 b는 숫자
  return a + b;
}
console.log(sumNumb(10, 20));
console.log(sumNumb("hello", 2));
