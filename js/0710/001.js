// 객체
// 배열은 인덱스로 접근했었다
// 객체는 직접 키와 값을 정해서 접근해야 한다

// const obj = {} // 중괄호로 생성

// const obj = { name: "hye", company: "weniv" }; //key : value
// key => 문자열, symbol
// value => 자바스크립트에서 사용한 모든 값이 올수 있다 - 문자열, 숫자, symbol, 함수(메서드)

const obj = {
  name: "hye",
  company: "weniv",
  sayHello: function () {
    console.log("Hello world!");
  },
};

//sayHello: function () { // sayHello() {} 으로도 사용(최신문법)
//    console.log("Hello world!");}

//일관적인 autoboxing
//메서드 : 객체가 가지고 있는 함수 -일반 함수와 구분하기 위해서 메서드라고 이르믕ㄹ 붙였다

console.log(obj["name"]);
console.log(obj["company"]);
// [""] 접근방법 : 어떤 값도 상관없이 문자열일 때 인식이 가능
console.log(obj.name);
// .으로 접근하는 방법 - 점표기법 : key값이 변수명 작성 규칙 만족할때만 가능

// const obj2 = {
//     name: "hye",
//     company: "weniv",
//     "c-worker" : ["la", "wa"],
//   };

//   console.log(obj2["c-worker"]);
//   console.log(obj2.c-worker); // 오류 : 변수명 작성규칙을 만족하지 않아서 오류 -(하이픈을 써서)
//   console.log(obj2.c); //undefined

//메서드 실행방법
obj["sayHello"]();
obj.sayHello();

console.log(obj[name]); // 변수로 동작하기 때문에 undefined로 출력

const key = "name";
console.log(obj[key]); // 변수로 인식 - 25번째 줄 코드랑 똑같이 출력됨

// 프로퍼티 변경
obj["name"] = "han";
console.log(obj);

// 프로퍼티 추가
// 순서가 보장되어 있지 않아서
// 입력한 순서대로 들어간다는 보장이 없다
obj["job"] = "FE";
console.log(obj);

// 프로퍼티(키:값) 삭제
delete obj["job"];
console.log(obj);

// 키 말고도 값으로 삭제할 수 있나
// => 프로퍼티를 모두 돌면서 (1) 값이 일치할때 (2) 키를 삭제한다

//프로퍼티 값이 있는지 확인
//includes랑 비슷한 역할
console.log("company" in obj);
console.log("job" in obj);
