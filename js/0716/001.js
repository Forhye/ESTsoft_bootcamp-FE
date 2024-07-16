// 일렉트론
// 옵시디언
// 리액트 네이티브
// web.dev => 새로운 기능들 홈페이지
// 사용중인 객체 => 인스턴스
// 반복 가능하게 해주는 것 이터레이터
// 일반적으로 객체는 순회가 불가능하다

// arr -> includes
// obj -> hasOwnProperty
// map -> has
// map 객체 자료형
const m = new Map();

m.set("하나", 1);
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);

// 오브젝트에서 값 넣기
const ojb = { name: "kim", age: 20 };
const key = "ninckName";
ojb.nickName = "초원범";
ojb[true] = "초원범";

// Map의 값에 접근하기
console.log(m.get("하나"));
console.log(m.get(true));

// Map 객체에서 값이 있는지 확인하기.
m.has("하나");
m.has("없는거");

// 오브젝트에서 값이 있는지 확인하기.
const obj = {
  name: "kim",
  age: 20,
};
obj.hasOwnProperty("name");

// Map 객체에서 값 지우기
m.delete("하나");

// 오브젝트에서 값 지우기
delete obj.name;

// Map 길이 가져오기
m.size;

// 오브젝트 길이 가져오기 예시 하나만...
Object.keys(obj).length;

// m순회하기
for (const [key, value] of m) {
  console.log(key, value);
}
// typeof m[Symbol.iterator]// 순회 가능한지 이터러블한지 확인하기.

// 메서드체이닝
const m2 = new Map();

m2.set(1, "하나").set(2, "둘").set(3, "셋").set(4, "넷");

console.log(m2);
for (const [key, nalue] of m2) {
  console.log(key, nalue);
}

m2.delete(4);
console.log(m2);

const arr = [1, 2, 3, 4];

// 기존 배열 arr을 가지고 곱하기 2를 한 새로운 배열을 반환합니다
arr.map((item) => {
  return item * 2;
});

// 위 코드의 결과가 배열이기 때문에 또 .map을 할 수 있습니다.
// 아래처럼 하면 기존 배열인 [2, 4, 6, 8]에 -1을 한 새로운 배열이 나오는 거죠
arr
  .map((item) => {
    return item * 2;
  })
  .map((item) => {
    return item - 1;
  });

const newArr = arr
  .map((item) => {
    return item * 2;
  })
  .map((item) => {
    return item - 1;
  });
console.log(newArr);
