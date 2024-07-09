// BigInt 큰 정수를 나타내는
// ES2020 실무에선 아직 사용안할 가능성이 있음
// BigInt와 숫자형은 다른 타입

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let bigNum1 = 123456n;
// 64비트보다 넘어가는 값을 표현하면 bigint로 정수형 표현만 가능
console.log(typeof bigNum1);
console.log(bigNum1);

// bigint 연산 빅인트와 숫자는 연산이 불가
// 숫자n 이 bigint
console.log(5n / 2n);
// console.log(5n / 2);
// TypeError: Cannot mix BigInt and other types, use explicit conversions
// 빅인트와 다른 숫자는 섞어서 사용할 수 없다
console.log(5n / BigInt(2));

//BigInt 변환 시 주의사항
console.log(BigInt(9007199254740992));
console.log(BigInt(9007199254740993));
console.log(BigInt(9007199254740994));
console.log(BigInt(9007199254740995));
//안전하지 않은 숫자로 쓰여진대로 출력되지 않음

console.log(BigInt("9007199254740992"));
console.log(BigInt("9007199254740993"));
console.log(BigInt("9007199254740994"));
console.log(BigInt("9007199254740995"));
//문자열로 안전하게 전달해야 숫자가 그대로 뜸
