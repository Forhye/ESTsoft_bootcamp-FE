//ES2020에 도입된 연산

console.log("----nullish (??)");
//or 연산과 비슷한 기능 -> 첫번째로 오는 ture
// ?? nullish -> 첫번째로 오는 undefined이나 null이 아닌 값
// 기본값을 설정할 때 많이 사용
console.log(null ?? null ?? null);
console.log(null ?? null ?? undefined);
// 마지막까지 연산이 된다. null이나 undefined가 아닌 값을 찾아간다
console.log(null ?? "weniv" ?? undefined);

const a = null;
const b = 23;
console.log(a ?? b);
console.log(b ?? a);

// let name = window.prompt("이름을 입력해주세요");
// name = name ?? "사용자";
// console.log("이름 : ", name);

console.log("----옵셔널 체이닝 (?.)");

const user = {
  name: "hye",
  adress: {
    city: "jeju",
  },
  number: {
    location: "seoul",
  },
  hello() {
    // 반환값이 없는 함수
    console.log("hello world");
  },
};
console.log(user.number); //
console.log(user.number.location);
// 언디파인드.location 언디파인드에서 로케이션을 가져올 수 없다.
console.log(user && user.number && user.number.location);
console.log(user?.number?.location);
// user(앞에 있는 코드)가 null이나 언디파인드가 아니면
// 다음 값을 계산한다
// 위의 log에서는 user는 null이라는 값이 있어서 user.number가 되고
// user.number=null 에 location이 있느냐 접근했지만
// 없어서 앞의 값인 null의 출력값 undefined이 출력됨
// user = null 이어도 undefined로 출력됨
// 값들이 유효한지 유효성 검사에도 사용함

console.log(user.hello?.());
// 메서드가 호출되어서 29번째줄 콘솔로그가 실행됨
// hello 함수는 반환값이 없기 때문에 undefined가 출력됨

console.log("----옵셔널과 널리쉬를 함께 사용");
console.log(user?.number?.location ?? "기본값");
//number의 값이 있기때문에 user.number.location의 값을 출력함
