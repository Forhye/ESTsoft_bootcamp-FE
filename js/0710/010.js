// 조건문

console.log("----if");

// if (조건식) {
// 조건식이 만족했을 때 실행할 코드
// }

//점수에 따라서 칭찬메세지를 출력
let score = 100;
if (score > 80) {
  console.log("잘했습니다");
}
// score = 60; // 조건에 만족하지 않기 때문에 false -> 출력되지 않음

if (true) console.log("중괄호를 생략할 수 있다");
//코드가 한줄일때만 중괄호를 생략할 수 있다.
//다른 코드와의 가독성이 좋지 않아서 중괄호를 써주는걸 권장

score = 60;
if (score > 80) {
  // 조건식이 ture일때
  console.log("80점 이상입니다.");
} else {
  // 조건식이 false일때
  console.log("좀 더 노력해보세요");
}

console.log("---- 조건이 여러개 일때");
//80 이상이면 참 잘했어요
//60 이상이면 잘했어요
//그 외는 노력하세요

let score2 = 100;
if (score2 > 80) {
  console.log("참 잘했어요");
} else {
  if (score2 > 60) {
    console.log("good");
  } else {
    console.log("노력하세요");
  }
}

console.log("----else if");
if (score2 > 80) {
  console.log("참 잘했어요");
} else if (score2 > 60) {
  console.log("good");
} else if (score2 > 40) {
  console.log("잘했어요");
} else {
  console.log("노력하세요");
}

score = 20;
if (score > 80) {
  console.log("80점이 넘었습니다");
} else if (score > 60) {
  console.log("60점이 넘었습니다");
} else {
  console.log("좀 더 화이팅하세요!");
}
// 좁은 조건의 순서를 먼저 적는다.
// 조건이 만족하지 않았을 때만 다음 조건으로 넘어간다
