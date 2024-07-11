// 배열의 요소를 추가하거나 삭제
const arr = [1, 2, 3];

// push 뒤에 추가
// 마지막 요소 다음으로 들어온다
arr.push(4);
console.log(arr);

// pop 뒤에서 삭제
arr.pop();
console.log(arr);

arr.unshift(5); // 길이값을 반환
console.log(arr);

// push & pop
console.log("--- push & pop ---");
const length = arr.push(40); // 길이값을 반환
console.log(arr);
console.log("length", length);
arr.push(50, 60, 70); // 여러개의 요소도 추가가 가능
console.log(arr);

const element = arr.pop(); // 마지막 요소을 반환
console.log(arr);
console.log("element", element); // 40

console.log("--- unshift & shift ---");
arr.unshift(50); // 길이값을 반환
console.log(arr);
arr.shift(); // 첫번째 요소를 반환
console.log(arr);

// splice
// splice(시작, 개수, 내용);
// splice(시작, 개수); -> 내용이 없으므로 (없음)으로 변경, 즉 삭제가 된다.
console.log("--- splice ---");
const arr2 = [1, 2, 3];
arr2.splice(1, 0, 4, 5, 6); // 추가
console.log(arr2); // [1, 4, 5, 6, 2, 3]

// 5, 6을 삭제
arr2.splice(2, 2);
console.log(arr2); // [1, 4, 2, 3]

// 변경
arr2.splice(3, 1, 5, 8);
console.log(arr2); // [1, 4, 2, 5, 8]

// slice
console.log("--- slice ---");
const fruits = ["사과", "바나나", "체리", "블루베리", "두리안"];
console.log(fruits.slice(1, 3));
console.log(fruits.slice(3));

const fruits2 = fruits.slice(); // 배열 전체를 복사할 수 있다.
fruits2[0] = "딸기";
console.log("fruits:", fruits);
console.log("fruits2:", fruits2);

console.log("--- sort ---");
fruits.sort();
console.log(fruits); // 유니코드 -> 사전식

const numbers = [1, 5, 2, 4];
numbers.sort();
console.log(numbers);

const numbers2 = [5, 100, 27, 36];
numbers2.sort();
console.log(numbers2);

// 숫자를 오름차순
numbers2.sort(function (a, b) {
  return a - b;
});
console.log(numbers2);

// 숫자를 내림차순
numbers2.sort(function (a, b) {
  return b - a;
});
console.log(numbers2);

console.log("--- indexOf ---");
const arr3 = [1, 2, 3, 1, 2, 3, 4];
console.log(arr3.indexOf(2));
console.log(arr3.indexOf(5));
console.log(arr3.indexOf(2, 3));
console.log(arr3.indexOf(1, 1));

console.log("--- includes ---");
console.log(arr3.includes(3));
console.log(arr3.includes(5));

console.log("--- forEach ---");
const fruits3 = ["참외", "키위", "감귤"];
// const result = [];
const resultArr = fruits3.forEach(function (item, index) {
  // console.log(item, index);
  fruits3[index] = item + "💗";
  // result.push(item + "💗");
});

// const result = [];
// const resultPlus = fruits3.forEach((item, index) => {
//   result.push(item + "<3");
// });

console.log(fruits3);
// console.log(result);
// console.log("resultArr-> ", resultArr);

console.log("--- map ---");
const arr4 = [10, 20, 30];
const newArr = arr4.map(function (item, index) {
  console.log(item, index);
  return item * index;
});
console.log(newArr);
console.log(arr4);

console.log("----filter");
const arr5 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 1, 5];
const filterArr = arr5.filter(function (item, index) {
  return item % 2 === 0; //2로 나눴을 때 0이 남을때 (짝수)
  // return item % 2 === 1; //2로 나눴을 때 1이 남을때 (홀수)
});
console.log(filterArr);

console.log("----reduce");
const arr6 = [1, 2, 3, 4, "hello"];
const reduceRes = arr6.reduce(function (a, c) {
  // a : accumulator : 누적값/c : currentValue 현재값
  // 이전 계산값(a), 배열의 값이 차례대로 들어감
  return a + c;
}, 0); //초기값

console.log(reduceRes);

// 1. a=0, c=1 = 1
// 2. a=1, c=2 = 3
// 3. a=3, c=3 = 6
// 4. a=6, c=4 = 10
// 5. a=10, c=5 = 15
// for문보다 reduce가 연산속도가 빠르다
// 코드가 간결해진다
// 초기값이 생략되었을 때 a가 배열의 첫번째 요소가 되고 c가 두번째 요소가 된다.
// 초기값 0을 설정해주는 것이 안전하다
// 빈배열에서는 오류가 발생한다
// 빈배열에 초기값 0을 설정해주면 결과는 0으로 나온다.

console.log("----join"); // split의 반대 개ㅣ능
//요소 중간에 string을 넣어 합친다
const arr7 = ["hello", "world", "weniv"];
console.log(arr7.join(" "));
console.log(arr7.join("-"));

console.log("----concat"); // 배열을 복사하거나 연결할때
//여러개의 배열을 연결해서 새로운 배열로 반환
const arr8 = [1, 2, 3];
const arr9 = [4, 5, 6];

// 배열은 풀어서, 값은 요소로 넣는다.
// 원본 배열은 수정되지 않는다.
const concatRes = arr8.concat(arr9, 7, 8, [10]);
console.log(concatRes);
console.log(arr8);
console.log(arr9);

const copyArr = arr8.concat();
copyArr[0] = 10; //원본이 바뀌지 않음
console.log("copy : ", copyArr);
console.log("origin : ", arr8);

const arr10 = [0, 1, [2, 3]];
const copyArr2 = arr10.concat();
copyArr2[2][0] = 20; //원본이 바뀜(얕은 복사)
console.log("copy : ", copyArr2);
console.log("origin : ", arr10);

console.log("----forof");
//요소 하나하나를 순회한다
//반복 가능한 객체의 순회를 위해 만들어진 기능
//매번 반복마다 다른요소의 값이 변수로 지정된다
const arr11 = [1, 2, 3, 4];
for (const iterator of arr11) {
  console.log(iterator);
}

const fruits10 = ["사과", "바나나", "오렌지"];

for (let fruit of fruits10) {
  console.log(fruit);
}
