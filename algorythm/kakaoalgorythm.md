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

3. 오픈채팅방(19년)

- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42888?language=javascript

```js
{
    '아이디': '닉네임',
    '아이디': '닉네임',
    '아이디': '닉네임',
    '아이디': '닉네임'
    // 이렇게 관리해서 나중에 문자열 조합을 통해
    // 문제에서 원하는 결과물을 출력
}

// 위 데이터를 가지고

[
"Prodo님이 들어왔습니다.",
"Ryan님이 들어왔습니다.",
"Prodo님이 나갔습니다.",
"Prodo님이 들어왔습니다."
]


// step1
// 5분 ~ 10분
const record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record){
    let answer = [];
    let user = {};

    for (const i of record){
        let [상태, 아이디, 닉네임] = i.split(' ');
        answer.push([상태, 아이디, 닉네임]);
    }

    return answer;
}

solution(record)

// step2
const record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record){
    let answer = [];
    let user = {};

    for (const i of record){
        let [상태, 아이디, 닉네임] = i.split(' ');
        if (상태 === 'Enter') {
            user[아이디] = 닉네임;
            answer.push([아이디, '님이 들어왔습니다.']);
        } else if (상태 === 'Change') {
            user[아이디] = 닉네임;
        } else if (상태 === 'Leave') {
            answer.push([아이디, '님이 나갔습니다.']);
        }
    }

    answer = answer.map(([아이디, 상태]) => `${user[아이디]}${상태}`);

    return answer;
}

solution(record)
```

4. 실패율(19년)

- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

```js
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// 실패율 === 아직 클리어 못한 플레이어의 수 / 도달한 플레이어 수
// 전체 스테이지의 개수 N
// 스테이지의 번호가 담긴 배열 stages가 매개변수

// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다. (오름차순)

// N	stages                  	result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3, 4, 2, 1, 5]
// 4	[4, 4, 4, 4, 4]	            [4, 1, 2, 3]

// 스테이지에 도달한 사람의 수
// 1stage === 1
// 2stage === 3
// 3stage === 2
// 4stage === 1
// 5stage === 0

// 실패율
// 1stage === 1/8
// 2stage === 3/7 === 3/(8-1)
// 3stage === 2/4 === 2/(7-3)
// 4stage === 1/2 === 1/(4-2)
// 5stage === 0/1 === 0/(2-1)

// step1
// 도달한 사람만 구해봅니다.
function solution(N, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i < N + 1; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    실패율.push([도달한사람수]);
  }
  return 실패율;
}

// 분자를 다 구했습니다.
// 다음 스탭에서 분모를 구해야 합니다.
solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// step2
function solution(N, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i < N + 1; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    실패율.push([도달한사람수 / 유저수]);
    console.log(도달한사람수, 유저수);
    유저수 -= 도달한사람수;
  }
  return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// step3 정렬
function solution(N, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i < N + 1; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    실패율.push({
      stage: i,
      rate: 도달한사람수 / 유저수,
    });
    console.log(도달한사람수, 유저수);
    유저수 -= 도달한사람수;
  }
  실패율.sort((a, b) => b.rate - a.rate);

  return 실패율.map((data) => data.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
```
