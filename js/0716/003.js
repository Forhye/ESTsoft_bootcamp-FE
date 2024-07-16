// 문제 : 회사 게시판에는 총 6개의 게시물이 있고, 각각의 게시물에 게시자 데이터를 뽑은 것이 '회사게시판 변수이다.'
회사게시판 = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (인원이 유일해야 합니다.)
const set = new Set(회사게시판); // Set으로 중복 값을 없애주고
console.log(`게시물을 작성한 사람 : ${set.size} 명`); // Set의 사이즈(길이)를 출력한다

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of set) {
  // 위에 new Set 해준 값 [이호준, 김은하, 이준근]을 가져옴
  console.log(i, 회사게시판.filter((e) => e === i).length);
  // i에 차례대로 회사게시판 배열의 순서대로 이름을 넣어주고,
  // filter구문으로 넘어가 e와 i가 같으면 새로운 배열을 만들어낸다.
  // 같은 이름이 중첩되면 그 배열의 length를 출력해준다.
}

// 자습시간에 해보기
// const map = new Map();
// for (const i of 회사게시판) {
//     m.set();

// }

// console.log(`이름 : ${m.keys()}, 작성 횟수 : ${m.values()}`);

// 회사게시판 = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];
let map = new Map();
for (const name of 회사게시판) {
  console.log(map.get(name), map);
  map.set(name, (map.get(name) || 0) + 1);
}

// 위 코드 설명
map.set("이호준", (map.get("이호준") || 0) + 1);
// => map.set('이호준', 1) 왜 값이 없지?
map.set("이호준", (map.get("이호준") || 0) + 1);
// => map.set('이호준', 2)
map.set("이호준", (map.get("이호준") || 0) + 1);
// => map.set('이호준', 3)
map.set("김은하", (map.get("김은하") || 0) + 1);
// => map.set('김은하', 1)
