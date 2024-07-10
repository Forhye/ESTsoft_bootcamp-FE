//비교 연산
console.log("----비교연산");
//결과는 항상 boolean(true, false) 로 나옴

// 크기를 비교하는 대소관계 연산자
// "10"로 넣어줘도 숫자로 형변환이 일어난다.
let x = 20;
let y = 10;

console.log("x > y", x > y);
console.log("x < y", x < y);

let z = 20;
console.log("x >= z", x >= z);
console.log("x <= z", x <= z);

// 피연산자가 모두 문자열 일때만 문자열로 비교한다
console.log("100" < "2"); // true 사전식으로 비교하기 때문에
console.log("100" < 2); // flase 하나라도 숫자면 비교가 안됨

console.log("hello" < 2); // NaN < 2
console.log(2 < "hello"); // 2 < NaN
console.log(NaN < NaN);
// NaN은 모든 비교 연산에 있어서 false를 반환한다.
// NaN == NaN, NaN === NaN 모두 false
// y = 20n 일때 얘는 수자형으로 형변환을 해서 비교하게됨
// 20n은 20을 가진 빅인트 형
// 20은 20을 가진 숫자형

console.log("--- 동등/부등");
let num1 = 30;
let num2 = 20;

// == 동등연산자는 타입변환이 발생 (자동형변환)
console.log(num1 == 30);
console.log(num1 == "30"); // 숫자로 형변환

console.log(num1 == 30n);
console.log(num1 == "30n"); // 빅인트로 인식하지 않고
console.log(+"30n"); // 문자열로 인식해서 NaN이 나옴
console.log(num1 == num2); // 값이 다를 경우 false

// != 부등 연산자
console.log("!= 부등 연산자");
console.log(num1 != num2);
console.log(num1 != "30"); // 30 != 30 -> false
console.log(num1 != 30n);

console.log("----자동 형변환");
console.log(+false);
console.log(+true);

console.log(+"234");
console.log(+"hello");
console.log(+""); // 빈문자열 0

console.log(+null); // 0
console.log(+undefined); // NaN

console.log("----다른형 비교");
console.log("" == false);
console.log("hello" == true); // NaN == true -> false
console.log("hello" == NaN); // NaN은 모두 false

console.log("isNaN", isNaN("hello"));
console.log("Number.isNaN", Number.isNaN("hello"));

console.log(null == undefined); // ture가 나오게 설계되어 있음
// null == null, null == undefined, undefined == undefined
// 본인과 서로가 아니면 false
console.log(null == "");

console.log("----객체의 비교"); // 주소값을 비교
const obj1 = { a: "1", b: "2" };
const obj2 = { a: "1", b: "2" };
const obj3 = obj1;

console.log(obj1 == obj2);
console.log(obj1 == obj3);
console.log([] == []); // false - 빈배열, 각각 다른 주소 다른 값을 가지고 있기 때문에, 값 자체에는 주소가 있다
console.log([]);

console.log("----객체 vs 원시 타입 비교");
console.log([1, 2] == "1,2"); // 객체를 원시타입에 맞춰서 변환한다.
console.log([] == 0);

console.log("---- ===일치 !==불일치");
// 타입 변환이 없고, 값과 타입을 모두 비교해서 반환
// 엄격한 비교가 필요할 때 사용
// 자동형변환으로 의도하지 않은 결과값이 나올 수 있으니
// 동등형보다는 일치형 비교를 써주는게 좋다
let num3 = 30;
let num4 = 40;

console.log(num3 === 30); //값과 타입을 비교
console.log(num3 === "30"); //타입이 다르기 때문에
console.log(num3 === 30n); //num3은 숫자, 30n은 BigInt

console.log("----불일치");
console.log(num3 !== 30); // false
console.log(num3 !== "30"); // true
console.log(num3 !== 30n); // true
console.log(num3 !== num4); // true

const obj4 = [1, 2, 3, 4];
const obj5 = [1, 2, 3, 4];
const obj6 = obj4;

console.log(obj4 === obj5); //false
console.log(obj4 === obj6); //true

console.log("");
console.log("");
