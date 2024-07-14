// 삼항 연산자

// (조건식) ? (조건식이 참일 때 실행할 코드) : (조건식이 거짓일 때 실행할 코드)

console.log("----삼항연산자");
//값으로 사용할 수 있음
const result = true ? console.log("true") : console.log("false");
console.log(result); // 콘솔로그는 반환값이 없기때문에 undefined+

false ? console.log("true") : console.log("false");

let num = 10;
const item = num > 5 ? "apple" : "banana";
const item2 = num > 20 ? "apple" : "banana";
console.log(item);
console.log(item2);
// if 문은 실행하는 문으로 변수의 값으로 줄 수 없기 때문에 표현식이 아니다.
// 삼항 연산자는 값으로 평가될 수 있기 때문에 표현식

console.log("----삼항연산자의 중첩");
let price = 5000;
// 6천보다 크면 : '비싸요'
// 3청보다 6천보다 작거나 같으면 : '적당해요'
// 3천 보다 작거나 같으면 : 저렴해요

let message = price > 6000 ? "비싸요" : price > 3000 ? "적당해요" : "저렴해요";

console.log(message);
// 중첩될수록 if문보다 가독성이 떨어짐

console.log("");
