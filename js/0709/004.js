// 불리언타입
// 참과 거짓을 나타낸다
// 조건문, 반복문에서 나타난다

let bool1 = true;
let bool2 = false;

console.log(typeof bool1, typeof bool2);

// Truthy : Boolean으로 타입을 변환 했을 때, ture가 되는 값
// Falsy : Boolean으로 타입을 변환 했을 때, false가 되는 값
// 값을 형변환을 해보면 확인 할 수 있다.
// 앞에 !!
console.log("----truthy");
console.log(`True : ${!!true}`);
console.log(`55 : ${!!55}`);
console.log(`"hello" : ${!!"hello"}`);
console.log(`"배열" : ${!![]}`); //배열과 객체는 항상 ture

console.log("----falsy");
console.log(` false: ${!!false}`);
console.log(` 0: ${!!0}`); // 0은 flasy, 나머지 숫자는 truthy
console.log(`"" : ${!!""}`);
console.log(`null: ${!!null}`);
console.log(`undefined : ${!!undefined}`);
console.log(` NaN: ${!!NaN}`);
