// 형 변환

console.log("----문자열 타입");
console.log("1. String()");
console.log(typeof String(23));
console.log(String(NaN));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

console.log("2. toString()");
console.log(false.toString());
// console.log(3.toString());//syntaxerror : Invalid or unepected token
// 3. 을 적으면 소수점으로 인식
console.log((3).toString()); //syntaxerror : Invalid or unepected token
// ()괄호로 묶어서 얘만 숫자야를 알려줘야함
console.log((2.3).toString); // 실수인 경우 메서드로 인식해서 오류X

//String은 뒤에 값을 넣고 (함수)
//toString은 앞에 값을 넣으며 진수를 지정할 수 있다. (메서드)
console.log((3).toString(2)); //3을 2진수로 변환
// console.log(null.toString()); // 오류
// console.log(undefined.toString()); // 오류

console.log("3. 자동 형 변환을 이용");
console.log(23 + "");
console.log(true + "");
console.log(typeof (null + ""));
console.log(typeof (undefined + ""));
