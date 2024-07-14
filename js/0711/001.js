// switch

// 사용 방법
// switch(표현식) {
//     case 값1:
//         // 값1에 대한 실행코드
//     case 값2:
//         // 값2에 대한 실행코드
//     //... 여러개 작성 가능
//     default:
//         //모든 케이스에 일치하지 않는 경우 실행할 코드
// }

let name = "hye";
switch (name) {
  case "hye":
    console.log("관리자입니다.");
  case "han":
    console.log("매니저입니다.");
  case "gar":
    console.log("사용자입니다.");
  default:
    console.log("일치하지 않습니다");
}

const today = new Day();
// new Date().getDay() => 요일 정보를 가져올 수 있다
// 0 일요일, 1 월요일, 2화요일, ... 6토요일
console.log("오늘은 : ", today.getDay());

switch (today.getDate()) {
  case 1:
    console.log("mooooooon");
    break;
  case 2:
    console.log("tue");
    break;
  case 3:
    console.log("wed");
    break;
  case 4:
    console.log("thr");
    break;
  case 5:
    console.log("fri");
    break;
  case 6:
    console.log("satsun");
    break;

  default:
    console.log("무슨 요일인지 모르겠습니다.");
}

// 일치하는 코드 이후 모두 출력함
// 조건식에 일치하면 즉시 종료 될 수 있도록 break를 넣어줘야함
// default 는 어차피 실행 후 더이상
