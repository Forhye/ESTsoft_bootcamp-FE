// 반복문 퀴즈
// forEach, &&써서 연습해보기

// 1. 1부터 100까지 짝수의 합을 구하는 반복문 코드

// 1-1) 반복문만 사용
// let evenSum = 0;
// for (let i = 2; i <= 100; i += 2) {
//   evenSum += i;
// }
// console.log(`반복문만 사용 짝수의 합 : ${evenSum}`);

let evenSum = 0;
for (i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}

console.log(`1부터 100까지 짝수의 합은 : ${evenSum}`);

// 1-2) 조건문도 사용
let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) sum += i;
  // i % 2 === 0 && (sum =+ i); //
}
console.log(`조건문도 사용한 1~100 짝수의 합 ${sum}`);

// 2. 반의 평균을 구하는 반복문 코드 (reduce 사용 X)
// 일단 다 더하고(반복문) 나누기

const score = [84, 92, 39, 55, 71];

let average = 0;
for (let i = 0; i < score.length; i++) {
  average += score[i];
}
console.log(`평균 : ${average / score.length}`);

let avg = 0;
for (i = 0; i < score.length; i++) {
  avg += score[i];
}
console.log(`평균은 ${avg / score.length}`);

let avgResult = score.reduce((a, c) => {
  return a + c;
});
console.log(avgResult / score.length);

let avgRes = 0;
score.forEach((item) => {
  return (avgRes += item);
});
console.log(avgRes / score.length);
