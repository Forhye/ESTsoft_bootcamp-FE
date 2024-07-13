// 숫자형으로 변환
console.log("----숫자 형변환");
console.log("1. Number");
console.log(Number("102"));
console.log(Number("hello"));
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log("2. parseInt , parseFloat");

console.log("3. 단항 연산자 +");
console.log(+"102");
console.log(+"hello");
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);

console.log("4. 자동 형 변환 -> 곱하기(*1) 연산자");
// 더하기를 제외한 산술연산 -> 숫자형으로 변환
console.log("201" * 1);
console.log("hello" * 1);
console.log(true * 1);
console.log(false * 1);
console.log(null * 1);
console.log(undefined * 1);
