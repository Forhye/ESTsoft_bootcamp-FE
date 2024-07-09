// 객체 타입 - 배열
// 여러의 값을 하나의 값으로 묶어서

const arr = []; // 빈배열
const arr4 = [1, 2, 3, 4]; //요소를 갖는 배열

console.log(arr);
console.log(arr4);

// Array 생성자 함수
const arr3 = new Array(10, 20, 30);
console.log(arr3);

// 생성자 함수 주의 사항
const arr5 = new Array(5); //인자가 하나인데 숫자다 => 길이가 5인 배열
const arr7 = new Array([5]); //인자가 하나인데 숫자다 => 길이가 5인 배열
console.log(arr5);
console.log(arr7);
console.log(new Array(1));

const arr6 = new Array("a");
console.log(arr6);
