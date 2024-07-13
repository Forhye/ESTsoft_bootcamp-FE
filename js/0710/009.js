// console.log("b" + "a" + +"a" + "a").toLowerCase();

// 불리언 형 변환

console.log("----불리언 형 변환");
console.log("1. Boolean 함수");
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("false"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

console.log("2. !! 논리 부정 연산자 2번 사용 (연산자를 이용한 형변환)");
console.log(!!35);
console.log(!!"hello");
console.log(!!"");
console.log(!!null);
console.log(!!undefined);

console.log("string : ", String(undefined));
console.log("number : ", Number(undefined));
console.log("boolean : ", Boolean(undefined));
