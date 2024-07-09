// 숫자형 메서드

console.log("----parseInt"); //Integer
//문자열 데이터 -> 숫자형
console.log(typeof parseInt("36"));
console.log(parseInt("36px")); //숫자만 뽑아낸다
console.log(parseInt("12.5px")); //소수점은 정수만 뽑아냄
console.log(parseInt("width: 25px")); //NaN
// 숫자로 시작할때만 값을 가져올 수 있다

console.log("----parseFloat"); //float
console.log(parseFloat("12.5px")); //실수 12.5를 가져옴
console.log(parseFloat("12.5.6px")); //실수 범위를 넘어서면 12.5만 출력
console.log(parseFloat("12.345.6px")); //.6px은 숫자가 아니기때문에 안가져옴

console.log("----inNaN, number.isNaN"); //NaN인지 확인할때 사용함
console.log(2 == 2); //NaN은 ==으로 확인할 수 없음
console.log(isNaN(23)); //false
console.log(isNaN(undefined)); //true
console.log(isNaN("2345")); //false
console.log(isNaN("hello")); //true
// isNan : 자동으로 숫자로 변환해서 확인. undefined는 숫자로 변환하면 NaN이 된다.

console.log(Number.isNaN(23)); //false
console.log(Number.isNaN(undefined)); //false
// 형변환이 일어나지 않음, 숫자형 NaN일 경우에만 true를 반환
console.log(Number.isNaN("2345")); //false
console.log(Number.isNaN("hello")); //false
console.log(Number.isNaN("hello" * 3)); //true
console.log(Number.isNaN(NaN * 3)); //= 위와 같은 식 true
console.log(Number.isNaN(NaN)); //true

console.log("----toFixed");
//소수점 (자리수를 잘라내면서 반올림을 한다)
const pi = 3.1415926;
console.log(pi.toFixed(2)); //3.14
console.log(pi.toFixed(10)); //3.1415926000 없는애는 0으로 처리
//padEnd(10,'0')으로 처리된것과 같음
console.log(typeof pi.toFixed(10)); //string
console.log(typeof pi.toFixed(0)); //3
console.log(pi.toFixed(0)); //3
//0이나 인자를 전달하지 않으면 정수부분만 가져옴
