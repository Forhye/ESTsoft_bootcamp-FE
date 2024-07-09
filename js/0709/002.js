//Math 객체를 이용한 연산

//원주율
console.log(`Math.PI : ${Math.PI}`);

// 숫자를 버림, 반올림, 올림
console.log(`Math.floor : ${Math.floor(4.7)}`);
console.log(`Math.round : ${Math.round(4.7)}`);
console.log(`Math.round : ${Math.round(4.3)}`);
console.log(`Math.ceil : ${Math.ceil(4.3)}`);

//정수부만 가져옴 truncation
console.log(`Math.trunc: ${Math.trunc(4.7)}`); //4
console.log(`Math.trunc: ${Math.trunc(-1.5)}`); //-1
console.log(`toFixed: ${(-1.6).toFixed(0)}`); // 지정한 자리수 다음에서 반올림이 된다

//제곱과 제곱근
console.log("----Math.pow()"); // 제곱
console.log(`Math.pow(): ${Math.pow(2, 3)}`);
console.log(`2 ** 3: ${2 ** 3}`);

console.log(`Math.sqrt(): ${Math.sqrt(16)}`); //16의 제곱근
console.log(`25 ** 0.5: ${25 ** 0.5}`);

//절대값
console.log(`Math.abs: ${Math.abs(-5)}`);
console.log(`Math.abs: ${Math.abs(4)}`);

//랜덤숫자
console.log(`Math.random : ${Math.random()}`);
//0부터 1 사이의 실수
console.log(`Math.random 정수로 나타내기 : ${Math.floor(Math.random() * 10)}`); //0~9까지 구하고 floor로 소수점 1의 자리부터 다 버린다 그럼 로그는 정수로 찍힘
console.log(`Math.random 정수로 나타내기 : ${Math.floor(Math.random() * 11)}`); //0~10까지
console.log(
  `Math.random 정수로 나타내고 시작 숫자 정하기: ${Math.floor(
    Math.random() * 19 + 2
  )}`
); //2~20까지

// 가장 큰 값, 가장 작은 값
console.log(`Math.max : ${Math.max(10, 20, 30, 40, 10)}`);
console.log(`Math.min : ${Math.min(10, 20, 30, 40, 10)}`);
