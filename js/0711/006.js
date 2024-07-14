// while

// while (조건식) {
//실행할 코드
// }

let num = 0;
while (num < 11) {
  console.log(num);
  num++;
}

// 구국단
console.log("----while 문을 이용한 이중 반복문");

let i = 2;
while (i <= 9) {
  console.log(`----${i}단`);
  i++;

  let j = 1;
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
}
// 증감문 또는 반복문을 종료하는 탈출구문(break) 구문이 없으면 무한루프에 빠진다
