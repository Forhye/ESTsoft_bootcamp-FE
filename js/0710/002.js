// 객체 메서드

// 객체 프로퍼티 키, 밸류, 키밸류 쌍을 가져오는 기능
const user = {
  name: "hye",
  job: "FE",
  hello() {
    console.log("hello world");
  },
};
console.log(Object.keys(user)); // key를 배열로 반환
console.log(Object.values(user)); //value를 배열로 반환
console.log(Object.entries(user)); //프로퍼티([키,밸류])를 배열로 반환

//Object : js에 기능을 위해 내장되어 있는 객체

console.log("----hasOwnProperty");
// in과 같은 역할
// 객체의 프로퍼티 키가 있는지 없는지를 판단
// 객체가 "어떤 프로퍼티"를 가지고 있는지 알려준다
console.log(user.hasOwnProperty("name"));
// 객체 user에 "name"이 있니?
console.log(user.hasOwnProperty("company"));
// 객체 user에 "company"가 있니? -> false
// 상속받은 프로퍼티는 찾지 못한다.

console.log("----for in");
// 항상 순서를 보장하지 않는다.
for (const key in user) {
  console.log(key); // 작성한 프로퍼티의 키값들을 순회한다
  console.log(key, user[key]);
}
