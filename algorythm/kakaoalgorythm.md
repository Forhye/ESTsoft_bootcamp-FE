# 카카오 코딩 테스트 문제 풀이

1. 비밀지도 문제

- 링크 : https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
- 주제 : 비트연산, 논리연산

```js
n	    5
arr1	[9, 20, 28, 18, 11]
arr2	[30, 1, 21, 17, 28]

    01001 (9)
or  11110 (30)
---------
    11111 => "#####"

    10100 (20)
or  00001 (1)
---------
    10101 => "# # #"

    11100 (28)
or  10101 (21)
---------
    11101 => "### #"

["#####","# # #", "### #", "# ##", "#####"]
```

```js
// step1
function solution(n, arr1, arr2) {
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  for ([a, b] of zip(arr1, arr2)) {
    console.log(a, b);
  }
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

// step2
function solution(n, arr1, arr2) {
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  for ([a, b] of zip(arr1, arr2)) {
    console.log(a | b);
  }
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

// step3
function solution(n, arr1, arr2) {
  const result = [];
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  for ([a, b] of zip(arr1, arr2)) {
    result.push((a | b).toString(2));
  }
  return result;
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

// step4
function solution(n, arr1, arr2) {
  const result = [];
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  for ([a, b] of zip(arr1, arr2)) {
    result.push((a | b).toString(2).replace(/1/g, "#").replace(/0/g, " "));
  }
  return result;
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

// step5
function solution(n, arr1, arr2) {
  answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(
      (arr1[i] | arr2[i])
        .toString(2)
        .padStart(n, "0")
        .replace(/1/g, "#")
        .replace(/0/g, " ")
    );
  }
  return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
```

2. 다트게임 문제

- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17682

```js
// 1S2D3T
// 1^1 + 2^2 + 3^3
// 3S2T3T
// 3^1 + 2^3 + 3^3
// 1D2S#10S
// 1^2 + 2^1*(-1) + 10^1
// 1D2S10S*
// 1^2 + 2^1*2 + 10^1*2

"1D2S10S*".match(/(\d+)([SDT])([\*\#]?)/g);

for (let s of "1S2D3T") {
  console.log(s);
}

//////////////////////////////

const dart = "1D2S10S*";
const regex = /(\d+)([SDT])([\*\#]?)/g;
const dartResult = dart.match(regex);

dartResult;

//////////////////////////////

const dart = "1D2S10S*";
const regex = /(\d+)([SDT])([\*\#]?)/g;
const dartResult = [...dart.matchAll(regex)].map((match) => match.slice(1));

dartResult;

//////////////////////////////

// step1
// 5분 ~ 10분
testcase = [
  "1S2D*3T", // 37
  "1D2S#10S", // 9
  "1D2S0T", // 3
];

function solution(dartResult) {
  let answer = [];
  let temp = 0; // 각 단계의 결과를 계산
  let result = 0; // 전체 단계의 결과를 합산
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      // 10점을 고려하지 않음
      // 문자와 숫자 비교 가능
      temp = parseInt(dartResult[i]);
    } else if (dartResult[i] == "S") {
      answer.push(temp);
    } else if (dartResult[i] == "D") {
      answer.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      answer.push(temp ** 3);
    }
  }
  return answer;
}

for (let dart of testcase) {
  console.log(solution(dart));
}

// step2
testcase = [
  "1S2D*3T", // 37
  "1D2S#10S", // 9
  "1D2S0T", // 3
];

function solution(dartResult) {
  let answer = [];
  let temp = 0; // 각 단계의 결과를 계산
  let result = 0; // 전체 단계의 결과를 합산
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      // 10점을 고려하지 않음
      // 문자와 숫자 비교 가능
      temp = parseInt(dartResult[i]);
    } else if (dartResult[i] == "S") {
      answer.push(temp);
    } else if (dartResult[i] == "D") {
      answer.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      answer.push(temp ** 3);
    } else if (dartResult[i] == "*") {
      answer[answer.length - 1] *= 2; // 현재 점수를 2배
      if (answer.length > 1) {
        answer[answer.length - 2] *= 2; // 이전 점수를 2배
      }
    } else if (dartResult[i] == "#") {
      answer[answer.length - 1] *= -1;
    }
  }
  return answer.reduce((a, c) => a + c, 0);
}

for (let dart of testcase) {
  console.log(solution(dart));
}

// step3
testcase = [
  "1S2D*3T", // 37
  "1D2S#10S", // 9
  "1D2S0T", // 3
];

function solution(dartResult) {
  let answer = [];
  let temp = 0; // 각 단계의 결과를 계산
  let result = 0; // 전체 단계의 결과를 합산
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        // 다음 턴으로 넘어갑니다.
        // 다음 순회를 건너뛰게 한다.
        i++;
      } else {
        temp = parseInt(dartResult[i]);
      }
    } else if (dartResult[i] == "S") {
      answer.push(temp);
    } else if (dartResult[i] == "D") {
      answer.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      answer.push(temp ** 3);
    } else if (dartResult[i] == "*") {
      answer[answer.length - 1] *= 2; // 현재 점수를 2배
      if (answer.length > 1) {
        answer[answer.length - 2] *= 2; // 이전 점수를 2배
      }
    } else if (dartResult[i] == "#") {
      answer[answer.length - 1] *= -1;
    }
  }
  return answer.reduce((a, c) => a + c, 0);
}

for (let dart of testcase) {
  console.log(solution(dart));
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    i++;
  }
  console.log(i);
}

// 번외편
// 정답은 아닙니다. 정답을 만들려면 여기에 스타상과 아차상을 고려해야 합니다.
function solution(dartResult) {
  let 승수 = { S: 1, D: 2, T: 3 };
  let answer = dartResult.match(/([0-9]|10)([SDT])([\*\#]?)/g).map((item) => {
    return parseInt(item[0]) ** 승수[item[1]];
  });
  return answer.reduce((a, c) => a + c);
}

console.log(solution("1S2D3T"));
```
