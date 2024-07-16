// set

// 값에 바로 접근이 가능하다

let s = new Set("abcdeeeeeeeee");
console.log(s);
console.log(s.size);

// Set에 값을 추가하기
s.add("f");
console.log(s);

// Set을 순환하기
for (var variable of s) {
  console.log(variable);
}

// 값이 배열인 경우
let ss = new Set("abcdeeeeeeeee".split(""));
console.log("apple".split(""));
console.log(ss);

// Set의 값을 제거하기
ss.delete("b");

// Set의 값을 확인하기
console.log(ss.has("a"));

// Set의 모든 값을 제거하기
// ss.clear();
// console.log(ss);

// s [a,b,c,d,e,f]
// ss [a,c,d,e]
console.log(s.difference(ss)); // s에만 있는 값
console.log(s.intersection(ss)); // s와 ss에 둘다 있는 값 (교집합)
console.log(s.symmetricDifference(ss)); // s-ss, ss-s 대칭 차집합
console.log(s.union(ss)); // s와 ss에 있는 모든 값 합집합
console.log(s.isDisjointFrom(ss)); // s, ss 둘다 없는 값 false
console.log(s.isSubsetOf(ss)); // ss안에 s가 있는 값 false
console.log(s.isSupersetOf(ss)); // s안에 ss가 있는 값 true

let a = new Set("abc");
let b = new Set("cde");
// 교집합
let cro = [...a].filter((value) => b.has(value));
// 합집합
let union = new Set([...a].concat(...b));
// 차집합
let dif = [...a].filter((x) => !b.has(x));
