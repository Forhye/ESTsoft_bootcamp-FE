// 연산

// 1. 산술연산
console.log("----산술연산");
// let x = 10;
// let y = 3;

// console.log("x + y = ", x + y);
// console.log("x - y = ", x - y);
// console.log("x * y = ", x * y);
// console.log("x / y = ", x / y);
// console.log("x % y = ", x % y);
// console.log("x ** y = ", x ** y);

// 1-2. 타입이 바뀌었을때
let x = 10;
// let y = "3";
let y = "hello";
//=> (자동형 변환) +(더하기)를 제외한 모든 연산이 연산을 할 수 있게 타입을 변경

console.log("x + y = ", x + y);
// 더하기 피연산자가 모두 숫자이면 숫자계산
// 피연산자가 하나이면 숫자형으로 변환 ex) log(+"hello"), log(+"4")
// 하나라도 문자가 있으면 문자열 연결 연산자가됨
console.log("x - y = ", x - y); // NaN
console.log("x * y = ", x * y); // NaN
console.log("x / y = ", x / y); // NaN
console.log("x % y = ", x % y); // NaN
console.log("x ** y = ", x ** y); // NaN

console.log("----산술할당연산");
// 산술 연산 + 할당 연산
let a = 10;
a += 20; // a=a+20
console.log("+=", a);

//a = a-5
a -= 5;
console.log("-=", a);

//a = a*2
a *= 2;
console.log("*=", a);

//a = a/5
a /= 5;
console.log("/=", a);

//a = a%4
a %= 4;
console.log("%=", a);

//a = a**3
a **= 3;
console.log("**=", a);

console.log("----증감연산자");
let num1 = 10;

// 연산자가 앞에 있으면 전위 / 뒤에 이쓰면 후위 증감 연산자
console.log("---- + 플러스");
console.log(num1++); // 10
console.log(num1); // 11
console.log(++num1); // 12
console.log(num1); // 12

console.log("---- - 마이너스");
console.log(num1--); // 12
console.log(num1); // 11
console.log(--num1); // 10
console.log(num1); // 10
