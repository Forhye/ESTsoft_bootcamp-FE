console.log("----label : break");
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break outer;
    }
    console.log(i, j);
  }
}

console.log("----lable : continue");
outer2: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      continue outer2; // 조건이 만족하면 다음으로 넘어간다
    }
    console.log(i, j);
  }
}

//  break -> finish
// continue -> skip
// 라벨 사용 최소화 -> 가독이 좋지 않음 주석을 추가해주거나 사용 최소화
// 파악하기 어려움
