// symbol

let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1);
console.log(sym2);

let sym3 = Symbol("name");
let sym4 = Symbol("name");
console.log(sym3 === sym4);
// 매번 새로운 식별자를 만듬
// 객체에서 사용

const pw = Symbol("password");
const hye = {
  name: "jihye",
  [pw]: "1234",
};
console.log(hye);

//symbol로 작성한 값은 순회할때 접근하지 않도록 할 수 있다
