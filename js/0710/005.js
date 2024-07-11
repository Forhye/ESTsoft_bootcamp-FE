// 논리 연산
// boolean - true, false

console.log("----논리곱 and (&&)");
// 피연산자 모두 ture 일때만 true를 뱉음
// 하나라도 false 일 경우 false
console.log(`true && true: `, true && true);
console.log(`true && false: `, true && false);
console.log(`false && true: `, false && true);
console.log(`false && false: `, false && false);

// 논리곱의 단축평가
let age = 20;
console.log(age > 5 && age < 25);
// age가 5보다 크고 age가 25보다 작나요? => true
console.log("licat" && "wade");
// 둘 다 비어있지 않은 문자형 이어서 truthy
// 모든 값이 트루라면 마지막 값을 반환한다.

//첫번째 비교에서 false가 나오면 종료한다 (뒤 연산자를 계산하지 않음)

console.log(age > 5 && false && age < 25); // false
console.log(age > 5 && "" && age < 25); // ""
// 첫번째로 falsy 한 값
console.log(age > 5 && age < 25 && "licat");
// 마지막 truty한 값

// 단축평가에 따라 조건을 출력하는
// let isLoggedIn = true;
// isLoggedIn && console.log("hello user"); // hello user 출력
let isLoggedIn = true;
const result = isLoggedIn && console.log("hello user"); // 아무것도 출력되지 않음
console.log(result); // 콘솔로그의 반환값은 undefined

const user = {
  name: "hye",
  adress: {
    city: "jeju",
  },
};
console.log(user.number); // undefined
// console.log(user.number.location);
console.log(user.number && user.number.location);

console.log("----논리합 or (||)");
// 하나라도 true면 true
// 둘다 false 여야 false
console.log(`true || true : ${true || true}`);
console.log(`true || false : ${true || false}`);
console.log(`false || true : ${false || true}`);
console.log(`false || false : ${false || false}`);

let age2 = 20;
console.log(age2 < 10 || age2 < 25); // true

// 논리합의 단축 평가
// 하나라도 트루시한 값이면 첫번째 비교 값을가져오면서 뒤의 값은 평가하지 않음
// 비어있는 문자열 false 값이 있는 문자열은 true
console.log("" || "licat" || NaN || null);
console.log("" || NaN || null);
//모든값이 falsy 하다면 마지막 펄시 값을 가져오게됨

// let name = window.prompt("이름을 입력해주세요");
// name = name || "사용자";
// console.log("이름 : ", name);
// 비어있지 않은 문자열이라면 트루시 -> 평가 종료 -> name에 할당
// 비어있는 문자열이라면 펄시 -> 평가 종료 -> "사용자"할당
// 아무것도 입력하지 않으면 null이 들어감 -> 이것도 falsy여서
// 결국 "사용자"가 할당됩

console.log("---- 논리부정 not (!)");
console.log(!true);
console.log(!false);

console.log(!23); //23은 트루시한 값

// 논리부정을 2번 사용해서 boolean 타입으로 변환할 수 있다.
// ! == !!!
console.log(!!23); //부정의 부정
console.log(!!"");
