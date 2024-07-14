// for문 선택적 사용

// for(초기화식;조건식;증감식){}
// 각각 선택적으로 사용이 가능하다
// ; 으로 자리 구분 꼭 해줘야 한다

// 초기화식, 증감식 안쓰기
let i = 0;
for (; i < 5; ) {
  console.log(i);
  i++;
}

// 위와 같은 식
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 조건식을 생략해준 경우 무한루프에 빠지므로 반복문안에 탈출조건을 작성
for (let i = 0; ; i++) {
  console.log(i);

  if (i > 10) break;
}
