// do while
// 수업 놓침 교안보고 복습 꼼꼼히 하기
let num = 0;
while (num < 0) {
  console.log(num);
  num++;
} // falsy한 값이어서 아예 실행되지 않음

//do while문
do {
  console.log(num);
  num += 1;
} while (num < 0); // 0으로 한번이라도 실행이 됨

// let num = 12;
// do {
//   console.log(num);
//   num++;
// } while (num < 11);
// {
//   //최소 한 번의 실행을 보장한다
// }

// let inpNum;
// do {
//   inpNum = window.prompt("숫자를 입력하세요");
// } while (inpNum === "" || isNaN(inpNum));
// // inpNum이 빈문자열 이거나 숫자가 아닌 경우 프롬프트창을 띄운다

// console.log(`입력된 숫자는 ${inpNum}`);
// // 숫자를 입력하기 전까지 계속 반복된다

// // do while

// let num = 12;
// do {
//   console.log(num);
//   num++;
// } while (num < 11);
// // 최소 한 번의 실행을 보장한다.

// let inpNum;
// let count = 0;
// do {
//   inpNum = window.prompt("숫자를 입력하세요");
//   count++;
// } while (inpNum === "" || isNaN(inpNum));

// if (inpNum !== null) {
//   console.log(`입력된 숫자는 ${inpNum}`);
// }
