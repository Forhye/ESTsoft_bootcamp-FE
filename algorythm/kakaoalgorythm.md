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
