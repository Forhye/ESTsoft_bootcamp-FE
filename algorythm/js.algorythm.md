- 현재 repo 주소: https://github.com/paullabkorea/Algorithm-walk-with-wenivs
- 이력서 템플릿: https://paullabworkspace.notion.site/Figma-bfa32213fc244db9b31bb8486a479ee6?pvs=4

# 1. 자료구조와 알고리즘, 코딩테스트

- 자료구조(자료를 어떻게 담는가?): array, object, map, set, 싱글 링크드 리스트, 더블 링크드 리스트, 트리, 해쉬 등
- 알고리즘(문제를 어떻게 풀 것인가?): 애라토스테네스의 체, 그리디 알고리즘, 투 포인터, 슬라이딩 윈도우 등
- 자료구조 + 알고리즘 => 문제 풀이 능력을 보겠다! => 코딩테스트
- 추천 서적
  - 학문적 접근: The Art of Computer Programming(도널드 커누스)
  - 코딩테스트 접근: 파이썬 알고리즘 인터뷰(박상길)
  - 자바스크립트 코딩 테스트 책: 코딩 테스트 합격자 되기 - 자바스크립트 편
- 요즘은 ChatGPT가 이러한 책의 역할을 하고 있습니다. 그래서 https://100.jsalgo.co.kr/와 같은 곳에서 문제를 풀어보시면서 자료구조와 알고리즘을 설명해달라고 ChatGPT에게 요청하시면서 공부하시는 방법이 더 효율적입니다.

## 1.1 코테 전 준비사항

0. 회사와 경향 분석!
   - 코테 보는 회사와 회사 유형을 정리하세요.
   - [코딩테스트 경향 정리](https://paullabworkspace.notion.site/446d03bf38df42e19d9fedcf5ceaec61?pvs=4) 해두었습니다.
   - 분석 서비스를 통해 [출제 경향](https://algoview.co.kr/)도 한 번 정리하세요.
1. 플렛폼에 익숙해지자! (프로그래머스, 구름EDU 등)
   - 사용 가능 라이브러리 미리 확인 등
   - 대부분 numpy나 pandas가 사용 가능하지만 간혹가다 라이브러리 제한이 있는 곳도 있습니다. numpy는 python보다 대부분의 경우 속도가 빠릅니다. 크기에 따라 다르지만 100000개 이상의 배열의 연산의 경우 50배 이상의 성능을 보입니다. 순열과 조합은 itertools를 사용하시면 python 아주 쉽게 풀 수 있습니다.
2. 언어 선택(속도 : C++, 풀이 : Python)
   - 요즘은 Lv이 높은 경우가 아니면 속도 체크를 거의 하지 않는 추세입니다.
   - 다른 언어가 메인이셔도 Python 추천 드립니다. 코딩테스트만을 위해 Python을 새로 공부하시는 분들이 많습니다.
3. 코드 스니펫(트리, 검색, 최단경로(예를 들어 다익스트라), 직접 제작한 함수 등), Cheatsheet, A4 용지 준비
   - 코드 스니펫을 만들어둔 레파지토리 fork - [제주코딩베이스캠프](https://github.com/paullabkorea/programmersLv0)
   - 감독관이 없는 경우 [스니펫](https://github.com/paullabkorea/programmersLv0/blob/main/Solution.md)에서 Ctrl + F해서 문제를 풉니다.
   - 시험 전 스니펫을 만들지 말고 하루 한 문제씩(저도 매일 한 문제씩 풉니다.) 또는 버겁다면 일주일에 2 ~ 3문제.
4. 유용한 라이브러리 정리! (collections, itertools(순열, 조합), functools, re, bisect, math 등) - [제주코딩베이스캠프](https://www.youtube.com/channel/UC4GnvNKtuJ4cqWsYjxNxAEQ) 유튜브 채널 확인
   - 유용한 알고리즘 GitHub repo를 검색하고 fork를 떠두는 것도 좋습니다.
   - 면접질문 repo등 다양한 목적에 repo가 있습니다.
5. 기억해두자! 예외처리!
   - 예외처리와 테스트 케이스중 통과 못하는 케이스들은 문제를 많이 풀어보셔야 합니다.
   - 길이가 0이거나 0으로 나누거나 등
6. 속도개선
   - class로 구현
   - 메서드 대신 슬라이싱 구현(슬라이싱은 C로 구현되어 있어 메서드보다 통상 8배정도 빠릅니다.)하세요. 다만 공간복잡도가 상승할 수 있습니다. (리스트.reverse(), reversed(리스트), 리스트[::-1])
   - for문 대신 list comprehension을 사용하세요. 더 빠릅니다.
   - 재귀는 느립니다. 최후의 수단으로 사용하세요.
7. ChatGPT, Copilot 활용
   - 감독관이 없고 검색이 가능하다면 ChatGPT를 활용하세요.(ChatGPT가 활용 불가인 코테도 있습니다. 다만 활용 불가인데 검색이 가능할 경우 형평성 문제가 생겨요.)
   - ChatGPT 나오고 화이트보드 테스트가 많아졌습니다.

## 1.2 문제 유형과 출제 방식

- 5 ~ 6시간, 6 ~ 7문제
- 30분씩 4문제, 2시간씩 2문제
- 2 ~ 3시간, 3 ~ 5문제
- 30분씩 3 ~ 4문제, 변별력 1문제
- 단기 공부로 붙을 수 있는 코테와 붙기 힘든 코테 경향 정리
- 문제 유형 분석 관련 글
  - [문제 유형 분석](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS4385594264)
  - [언어 유불리 여부](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS9145550324&cate_cd=)
  - [코딩 테스트에 가장 많이 출제 되는 알고리즘](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS7793635735&cate_cd=)
    - 요구사항 구현 알고리즘(33%)
    - 그리디 알고리즘(20%)
    - 너비우선탐색, 깊이우선탐색(20%)
    - 정렬(8%)
    - 다이나믹 프로그래밍, 최단경로, 이진 탐색 등
- 전체 문제 유형
  - 알고리즘
    - 정렬
    - 이진 검색
    - 비트 연산
    - 슬라이딩 윈도우, 페이지 교체
    - 분할 정복
      - 그리디 알고리즘
      - 다이나믹 프로그래밍
  - 자료구조
    - 선형
      - 스택과 큐, 데크
      - 연결리스트, 해시 테이블
    - 비선형
      - 그래프(최단경로) - 다익스트라가 나오면 매우 어려운 문제
      - 트리
        - 힙
        - 트라이

## 간단한 코드 스니펫

```js
// js는 없는데 python에서 유용한 코드를 js 모듈화

// 1. 묶음
const zip = (a,b) => a.map((e,i) => [e,b[i]]);
// 제약조건: a가 map을 사용하기 위해 array여야 합니다.

// 2. 범위 안에 수 생성
const range = (start, end) => Array.from({length: end - start + 1}, (_, i) => start + i);

Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
Array.from({'one':10, 'two':20}, (v, i) => i); // [0, 1, 2, 3, 4]
Array.from({1, 2, 3});
Array.from([1, 2, 3]);
Array.from(new Set([1, 2, 3]));
Array.from(new Map([[1, 2], [3, 4]]));

Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
Array.from('hello', x => x + x); // ['hh', 'ee', 'll', 'll', 'oo']

// 3. 평평하게 만들기
const flatten = (arr) => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);

[1, [2, [3, [4]]]].flat(Infinity);

// 2. js에서 사용할 유용한 코드
Array(5).fill(0); // [0, 0, 0, 0, 0]
Array(5).fill(0).map((v, i) => i); // [0, 1, 2, 3, 4]
Array(5).fill(0).map((v, i) => i+1); // [1, 2, 3, 4, 5]
'.'.repeat(5)
'.'.repeat(5).split('.') // 권하진 않습니다.
Array.from('ab'.repeat(5))

Infinity
-Infinity

Math.ceil(1.1); // 올림
Math.floor(1.1); // 내림
Math.max(1, 2, 3, 4, 5);
Math.max([1, 2, 3, 4, 5]);
Math.max(...[1, 2, 3, 4, 5]); // 이렇게 종종 사용합니다.

parseInt('1234', 10); // 10진수 1234를 10진수로 변환
parseInt('1001', 2); // 2진수 1001을 10진수로 변환
parseInt('12aa34.abc'); // 12까지 변환, 안전합니다.

Math.floor(10 / 3);
~~(10 / 3) // 안전한 parseInt 연산을 사용하세요.
10 / 3 | 0 // 안전한 parseInt 연산을 사용하세요.
10 / 3 << 0 // 안전한 parseInt 연산을 사용하세요.

2 << 2 // 8
// step1 왼쪽에 있는 2를 2진수로 변환합니다. 10이 됩니다.
// step2 10을 왼쪽으로 2칸 이동합니다. 1000이 됩니다.
// step3 1000을 10진수로 변환합니다. 8이 됩니다.

5 << 3
// step1 왼쪽에 있는 5를 2진수로 변환합니다. 101이 됩니다.
// step2 101을 왼쪽으로 3칸 이동합니다. 101000이 됩니다.
// step3 101000을 10진수로 변환합니다. 40이 됩니다.

(1234.56789).toFixed(2); // 1234.57
(1234.56789).toFixed(0); // 1235
(1234.56789).toFixed(4); // 1234.5679
(1234.56789).toFixed(6); // 1234.567890

// match는 문자열에서 정규식을 사용할 수 있습니다.
'2345678910111213'.match(/1/g) // g는 global이에요. 전역에서 찾겠다는 것입니다. 앞에 슬러시와 뒤에 슬러시는 정규식을 사용할 때 사용합니다.
'2345678910111213'.match('1')
'2345678910111213'.match(/1/)
'2345678910111213'.match(/1/g)
'2345678910111213'.match(/1/g).length
'hello leehojun my name hojun'.match(/hojun/g).length
```

## 2진수, 8진수, 16진수, 10진수

## 워밍업 문제1

- 링크: https://codingdojang.com/scode/393

```js
// 이렇게 풀지 마세요 - 1
// xxx8:000 ~ 999개
// xx8x:000 ~ 999개
// x8xx:000 ~ 999개
// 8xxx:000 ~ 999개
// 중복 => 중복을 허락해야 합니다. 4000개가 답이 맞습니다.
// 이런식으로 풀이하는 것을 보려고 하는 문제가 아닙니다!

// 이렇게 풀지 마세요 - 2
// 이런 카운팅 하는 문제에 lv1문제는 대부분 문자열 문제입니다.
// [0, 0, 0, 0] ~ [9, 9, 9, 9] 반복을 돌며 풀지 마세요.

// 이렇게 풀지 마세요 - 3
count = 0;
for (let i of "12345678910111213") {
  console.log(i);
  if (i === "1") {
    count++;
  }
}
count;

// 최대한 내장 메서드를 이용해주세요.
// 효율적으로 풀 수 있는 방법을 찾아주세요.

"12345678910111213".match(/1/g).length;

Array(100)
  .fill(0)
  .map((_, i) => i);
```

## 워밍업 문제2

- 링크: https://codingdojang.com/scode/408

```js
const s = [1, 3, 4, 8, 13, 17, 20];

// 이렇게 풀지 마세요 - 1
let min = Infinity;
let index = 0;
for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i + 1] - s[i]);
  if (s[i + 1] - s[i] < min) {
    min = s[i + 1] - s[i];
    index = i;
  }
}

console.log(s[index], s[index + 1]);

// 최솟값: 최댓값을 먼저 저장해야합니다.
// 최댓값: 최솟값을 먼저 저장해야합니다.

////////////////

// 이렇게 풀면 간단합니다.
const s = [1, 3, 4, 8, 13, 17, 20];
const zip = (a, b) => a.map((e, i) => [e, b[i]]);
const pair = zip(s, s.slice(1));

// 이 상태에서 정렬을 하고 최솟값을 찾으면 됩니다.
pair.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
pair.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];

////////////////

const s = [1, 3, 4, 8, 13, 17, 20];
const zip = (a, b) => a.map((e, i) => [e, b[i]]);
const pair = zip(s, s.slice(1));
let min = Infinity;
let result = [];

for (let [i, j] of pair) {
  console.log(i, j);
  if (j - i < min) {
    min = j - i;
    result = [i, j];
  }
}

console.log(result);
```

## 워밍업 문제3

- 링크: https://100.jsalgo.co.kr/?page=4#

```js
function solution(data) {
  let result = 0;
  let temp = 1;
  data.forEach((v) => {
    v.match(/\d+/g);
    //\d 캐릭터 클래스(모든숫자와 일치)
    //\^ 문자와 일치 \w 영숫자
    result += parseInt(v.match(/\d+/g)[0]) * temp;
    temp++;
  });
  return result;
}
```

## 워밍업 문제4

- 문제이름 : 평균점수 카운팅
- 링크 :

```js
function solution(data) {
  let result = 0; // 80점 이상인 학생 수
  data.forEach((v) => {
    let mean = 0; // 각 학생의 평균
    v.forEach((i) => {
      mean += i;
    });
    mean /= v.length;
    if (mean >= 80) {
      result++;
    }
  });
  return result;
}

solution([
  [92, 85, 97],
  [30, 21, 60],
  [90, 99, 98],
  [0, 0, 0],
  [81, 80, 88],
]);
```

```js
function solution(data) {
  let avg;
  let result;

  result = data.filter((v) => {
    avg = v.reduce((a, c) => a + c, 0) / v.length;
    return avg >= 80;
  }).length;
  return result;
}

solution([
  [92, 85, 97],
  [30, 21, 60],
  [90, 99, 98],
  [0, 0, 0],
  [81, 80, 88, 20],
]);
```

## 워밍업 문제5

- 문제이름 : 비트치환문제
- 링크 : https://100.jsalgo.co.kr/?page=30#

```js
//  9.toString() => .을 소수점으로 인식하기 때문에 아래처럼 사용해야함
//  (9).toString()

// let a = 9;
// a.toString();

let a = 9;
a.toString(2); // a를 2진수로 계산

////////////////////////

function solution(data) {
  let result = "";
  for (let s of data.toString(2)) {
    console.log(s);
    if (s === "1") {
      result += "A";
    } else {
      result += "B";
    }
  }
  return result;
}

solution(9);

////////////////////////

function solution(data) {
  return data.toString(2).replace(/1/g, "A").replace(/0/g, "B");
}
```

## 워밍업 문제6

- 문제이름 : 중복된 숫자 갯수
- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120583

```js
function solution(array, n) {
  let answer = 0;
  for (let i of array) {
    if (i === n) {
      answer++;
    }
  }
  return answer;
}

// 깔끔버전 (권장하지 않음)
function solution(array, n) {
  let answer = 0;
  for (let i of array) if (i === n) answer++;
  return answer;
}

//////// 메서드 활용 코드
function solution(array, n) {
  return array.filter((v) => v === n).length;
}
```

## 워밍업 문제7

- 문제이름 : 머쓱이보다 키 큰 사람
- 링크 :https://school.programmers.co.kr/learn/courses/30/lessons/120585
- 푸쉬 완료

```js
function solution(array, height) {
  return array.filter((v) => v > height).length;
}
```

## 워밍업 문제 8

- 문제이름: 자릿수 더하기
- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120906

```js
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((a, c) => a + parseInt(c), 0);
}
```

# 2. 기본 자료구조와 알고리즘

1. 스택과 큐
2. 연결리스트
3. 트리와 그래프
   - 3.1 트리 구현
   - 3.2 트리의 순회
4. 정렬 알고리즘
   - 4.1 선택정렬
   - 4.2 삽입정렬
   - 4.3 병합정렬
   - 4.4 퀵정렬
5. 페이지 교체 알고리즘
6. 슬라이딩 윈도우와 투 포인터 알고리즘

- 학문적 접근이 아니라면 이해를 미뤄두세요 : ADT

## 2.1 스택과 큐

### 2.1.1 스택과 큐의 개념

- 스택 : LIFO() 쌓이는거 가장 최근에 들어온 값이 가장 먼저 나간다
  가장 아래 값을 먼저 뺄 수 없는 구조
- 큐: FIFO(First In First Out), 가장 먼저 들어온 데이터가 가장 먼저 나가는 구조
- 스택과 큐 간단한 문제
  - 다음중 스택이 될 수 없는 것은? 스택에 들어가는 값은 1, 2, 3, 4, 5이다
    - 1. 1, 2, 3, 4, 5
    - 2. 3, 2, 4, 5, 1
    - 3. 4, 3, 2, 5, 1
    - 4. 1, 5, 4, 2, 3 (v)

### 2.1.2 스택과 큐의 구현

```js
// 스택 1번째 구현, 뒤에서 넣고 뒤에서 빼는 스택
// 만약에 앞에서 빼면 스택이 깨지는 것이죠.
// 할 수 있는데 스택을 유지하기 위해 안하는 겁니다.
let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);

// 스택 2번째 구현, 앞에서 넣고 앞에서 빼는 스택
// 보통은 1번을 많이 사용합니다.
let stack = [];
stack.unshift(1);
stack.unshift(2);
stack.unshift(3);
stack.shift();
console.log(stack);

// 큐 1번째 구현, 뒤에서 넣고 앞에서 빼는 큐
let queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
queue.shift();
console.log(queue);

// 큐 2번째 구현, 앞에서 넣고 뒤에서 빼는 큐
let queue = [];
queue.unshift(1);
queue.unshift(2);
queue.unshift(3);
queue.pop();
console.log(queue);
```

### 2.1.3 스택과 큐의 문제

- 문제링크 : https://jsalgo.co.kr/?page=6

```js
// 이 문제를 슬라이싱으로 풀면 아래 예제에서 오답이 나옵니다.
// [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1]
// [1, 2, 3, 4, 5, 6, 7, 8, 9].slice(-5)
// [5, 6, 7, 8, 9] == [1, 2, 3, 4, 5, 6, 7, 8, 9].slice(-5)
// JSON.stringify([5, 6, 7, 8, 9]) == JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9].slice(-5))

// const comp = JSON.stringify
// comp([5, 6, 7, 8, 9]) == comp([1, 2, 3, 4, 5, 6, 7, 8, 9].slice(-5))

function solution(data) {
  let stack = [];
  let sandwich_count = 0;
  for (let i of data) {
    stack.push(i);
    if (JSON.stringify(stack.slice(-5)) === JSON.stringify([1, 2, 3, 4, 1])) {
      stack.splice(-5);
      sandwich_count++;
    }
  }
  return sandwich_count;
}

solution([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1]);
```

## 2.2 연결리스트

### 2.2.1 연결리스트의 개념

- 연결리스트는 보통 메모리 효율을 위해 사용합니다.
- 주로 데이터 부분과 다음 노드를 가리키는 포인터로 구성되어 있습니다.
- 개념 : https://en.wikipedia.org/wiki/Linked_list
- 알고리즘 시각화 : https://visualgo.net/ko

### 2.2.2 연결리스트의 구현

#### 2.2.2.1 step 1

- 가장 친숙한 자료형으로 링크드리스트를 구현

```js
// step 1 - object로 linked list를 구현한다
// 12, 99, 37
// 적은 데이터는 [] 배열로 넣었을때 상관없지만
// 수천억 수 조 개의 데이터가 있고 그 중 찾아야 한다면 트리 구조로 구현하는것이 가장 짧은 루트로 찾을 수 있다

const linkedList = {
  head: {
    data: 12,
    next: {
      data: 99,
      next: {
        data: 37,
        next: null,
      },
    },
  },
};
console.log(linkedList["head"]);
console.log(linkedList.head);
```

#### 2.2.2.2 step 2

- object 로 linked list를 구현한다.
- 계층적 구조를 분리해 깔끔하게 만든다.

```js
let linkedList = { head: null };
let node1 = { data: 12, next: null };
let node2 = { data: 99, next: null };
let node3 = { data: 37, next: null };

node1.next = node2;
node2.next = node3;

linkedList.head = node1;

console.log(linkedList.head);
console.log(linkedList.head.next.data);
console.log(linkedList.head.next.next.data);
```

#### 2.2.2.3 step 3

- object 로 linked list를 구현한다.
- 순회 방법

```js
let linkedList = { head: null };
//
let node1 = { data: 10, next: null };
let node2 = { data: 20, next: null };
let node3 = { data: 30, next: null };
let node4 = { data: 40, next: null };
let node5 = { data: 50, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

linkedList.head = node1;

let current = linkedList.head;
while (current) {
  console.log(current.data);
  current = current.next;
}
```

#### 2.2.2.4 step 4

내가 직접 짜보기

```js
let linkedList = { haed: null };

let node1 = { data: 10, next: null };
let node2 = { data: 20, next: null };
let node3 = { data: 30, next: null };
let node4 = { data: 40, next: null };
let node5 = { data: 50, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

linkedList.head = node1;

let current = linkedList.head;
let index = 0;
while (current) {
  if (current.data === 40) {
    console.log(index);
    break;
  }
  index++;
  current = current.next;
}
```

#### 2.2.2.5 step 5

- class로 구현
- 노드만 구현

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// head = new Node("head"); // 적합하지 않음 node1으로 넣어주는게 좋음
node1 = new Node(10);
node2 = new Node(20);
node3 = new Node(30);
head = node1;

node1.next = node2;
node2.next = node3;
```

#### 2.2.2.6 step 6

- class로 구현
- 자동으로 값이 연결되게 만든다.

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
  }

  push(data) {
    let newNode = new Node(data);
    // 마지막 값은 새로운 노드가 되어야 합니다.
    this.tail.next = newNode;
    // 마지막 노드는 새로운 노드가 되어야 합니다.
    this.tail = newNode;
  }
}

l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);

console.log(l.head.next.next.data);
console.log(l.head.next.next.next.data);
```

#### 2.2.2.7 step 7

- class로 구현
- toString length를 구해봅니다

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data);
    // 마지막 값은 새로운 노드가 되어야 합니다.
    this.tail.next = newNode;
    // 마지막 노드는 새로운 노드가 되어야 합니다.
    this.tail = newNode;
    this.length++;
  }

  toString() {
    return `<${this.displayData.slice(0, -2)}>`;
  }
}

l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);

console.log(l.head.next.next.data);
console.log(l.head.next.next.next.data);

console.log(l.length);
```

#### 2.2.2.8 step 8

- class로 구현
- toString을 앞에서 object로 했던 것처럼 순회해서 구현합니다.

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data);
    // 마지막 값은 새로운 노드가 되어야 합니다.
    this.tail.next = newNode;
    // 마지막 노드는 새로운 노드가 되어야 합니다.
    this.tail = newNode;
    this.length++;
  }

  toString() {
    let current = this.head.next;
    while (current) {
      result += `${cureent.data},`;
      current = current.next;
    }
  }
}

l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);

console.log(l.head.next.next.data);
console.log(l.head.next.next.next.data);

console.log(l.length);
```

#### 2.2.2.9 step 9

- class로 구현
- 데이터를 삽입하는 insert를 구현합니다.

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data);
    // 마지막 값은 새로운 노드가 되어야 합니다.
    this.tail.next = newNode;
    // 마지막 노드는 새로운 노드가 되어야 합니다.
    this.tail = newNode;
    this.length++;
  }

  toString() {
    let current = this.head.next;
    while (current) {
      result += `${cureent.data},`;
      current = current.next;
    }
  }

  insert(index, data) {
    let current = this.head.next;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    let newNode = new Node(data);
    newNode.next=current.next;
    current.next = newNode;
    this.length++;
  }
}

l = new LinkedList();
l.push(10);
l.push(20);
l.push(30);
l.push(40);
l.insert(2, 100;)

console.log(l.head.next.next.data);
console.log(l.head.next.next.next.data);

console.log(l.length);
```

### 2.2.3 연결리스트의 종류

- Singly linked list
- Doubly linked list
- Circular linked list

#### 2.2.3.1 Doubly linked list 형태

```js
const list = {
  head: null,
};

let list1 = { value: 12, next: null, pre: null };
let list2 = { value: 99, next: null, pre: null };
let list3 = { value: 37, next: null, pre: null };
let list4 = { value: 2, next: null, pre: null };

list.head = list1;
list1.next = list2;
list2.next = list3;
list3.next = list4;

list1.pre = list;
list2.pre = list1;
list3.pre = list2;
list4.pre = list3;

list1.next.next.value;
// 37
list3.pre.pre.value;
// 12
list4.pre.pre.pre.next.next.value;
// 37
```

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.pre = null;
  }
}

class DoubleLinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;
  }

  append(data) {
    let 새로운노드 = new Node(data);

    this.tail.next = 새로운노드;
    새로운노드.pre = this.tail;

    this.tail = 새로운노드;
  }
}

l = new DoubleLinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

## 쉬어가기 연습문제

120844 (배열 회전시키기)

```js
// rotate 문제
// 이어붙이기로 쉽게 풀이가 가능할 수 있다.
// concat 또는 전개구문 [...]

function solution(data, direction) {
  if (direction === "right") {
    const temp = data.pop();
    data.unshift(temp);
    return data;
  } else {
    const temp = data.shift();
    data.push(temp);
    return data;
  }
}

function solution(numbers, direction) {
  if (direction === "right") {
    numbers = [numbers.pop(), ...numbers];
  } else {
    numbers = [...numbers.slice(1), numbers.shift()];
  }
  return numbers;
}

function solution(data, direction) {
  const total = [...data, ...data];
  if (direction === "right") {
    return total.slice(data.length - 1, -1);
  } else {
    return total.slice(1, 1 + data.length);
  }
}
```

120864(숨어있는 숫자의 덧셈 2)

```js
// 특정 패턴 찾는 문제
// "aAb1B2cC34oOp".match(/\d+/g)

// 일부에서는 실패함
function solution(my_string) {
  return my_string.match(/\d+/g).reduce((a, c) => a + parseInt(c), 0);
}

function solution(my_string) {
  return my_string.split(/\D+/).reduce((a, c) => a + Number(c), 0);
}

function solution(my_string) {
  let replString = my_string.replace(/[A-z]/g, " ").split(" ");
  console.log(replString);
  let sum = 0;
  for (let i = 0; i < replString.length; i++) {
    if (!isNaN(replString[i])) {
      sum += Number(replString[i]);
    }
  }
  return sum;
}
```

120956

## 2.3 트리와 그래프

### 2.3.1 트리의 기본 형태

```js
// 이진 트리의 기본형태
// value
// child - left
// child - right
const tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};
```

### 2.3.2 트리의 구현

- 우리가 구현할 트리![](tree만들기_트리순회_2.png)

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
```

```js
const tree = {
  head: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
  },
};
```

깊스너큐 : 깊(깊이우선)스(스택)너(비우선)큐(queue)
파선아실 : 파라미터는 선언 아규먼트는 실행

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    this.init = new Node(data);
    this.root = this.init;
    this.length = 0; // 노드의 갯수
  }

  add(data) {
    let newNode = new Node(data);
    let current = this.root;
    while (current) {
      if (data == current.data) {
        // 들어온 값이 이미 존재하는 값이면 추가하지 않습니다.
        return;
      } else if (data < current.data) {
        // 왼쪽으로 이동해야 합니다.
        // 이동한 곳에 데이터가 비어있으면 데이터를 넣습니다.
        // 이동한 곳에 데이터가 있으면 계속 타고 내려갑니다.
        if (!current.left) {
          current.left = newNode;
          this.length++;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        // 오른쪽으로 이동해야 합니다.
        // 이동한 곳에 데이터가 비어있으면 데이터를 넣습니다.
        // 이동한 곳에 데이터가 있으면 계속 타고 내려갑니다.
        if (!current.right) {
          current.right = newNode;
          this.length++;
          return;
        }
        current = current.right;
      }
    }
  }

  // 깊스너큐
  DFS() {
    // 깊이우선탐색, DFS(Depth First Search)
    // Stack 이용

    let result = []; // 방문경로
    let stack = [this.root];

    while (stack.length !== 0) {
      let current = stack.pop();
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      result.push(current.data);
    }

    return result;
  }

  BFS() {
    // 너비우선탐색, BFS(Breadth First Search)
    // Queue 이용

    let result = []; // 방문경로
    let queue = [this.root];

    while (queue.length !== 0) {
      let current = queue.shift();
      if (current.right) {
        queue.push(current.right);
      }
      if (current.left) {
        queue.push(current.left);
      }
      result.push(current.data);
    }

    return result;
  }
}

let t = new Tree(5);
t.add(3);
t.add(8);
t.add(1);
t.add(4);
t.add(6);
t.add(9);
```

## 2.4 정렬 알고리즘

- 정렬 알고리즘 3대장 비교(Best, Worst)
  - 병합 정렬 : nlogn, nlogn
  - 퀵 정렬 : nlogn, n\*\*2
  - 팀 소트 : n, nlogn

```js
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
}
```

### 2.4.1 공간 복잡도와 시간 복잡도

- 시간 복잡도 : 얼마나 많은 시간이 걸렸는지
- 공간 복잡도 : 얼마나 많은 공간이 필요했는지

```js
// 시간 복잡도 계산
// O(n)
const n = 10;
for (let i = 0; i < n; i++) {
  console.log(i);
}

// O(n^2)
const n = 10;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}

// O(n^3)
const n = 10;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      console.log(i, j, k);
    }
  }
}

// O(n)
// 주의!
// O(3n) => O(n)
// 상수는 항상 무시됩니다.
const n = 10;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
```

### 2.4.2 선택 정렬

- 선택 정렬은 가장 작은 것을 선택해서 앞으로 보내눈 정렬

* step 1

```
전 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
후 = []
```

- step 2

```
전 = [199, 22, 33, 32, 64, 72, 222, 233]
후 = [12]
```

- step 3

```
전 = [199, 33, 32, 64, 72, 222, 233]
후 = [12, 22]
```

- step 4

```
전 = [199, 33, 64, 72, 222, 233]
후 = [12, 22, 32]
```

- step 5

```
전 = [199, 64, 72, 222, 233]
후 = [12, 22, 32, 33]
```

- 선택정렬 구현

```js
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이_들어갈_인덱스(정렬된배열, 삽입값) {
  for (const i in 정렬된배열) {
    if (삽입값 < 정렬된배열[i]) {
      return i;
    }
  }
  return 정렬된배열.length;
}

for (let i = 0; i < 배열의길이; i++) {
  let 삽입값 = 입력값.shift();
  let 인덱스 = 삽입값이_들어갈_인덱스(정렬된배열, 삽입값);
  정렬된배열.splice(인덱스, 0, 삽입값);
}

console.log(정렬된배열);

// 참고만 하고 가도록 하겠습니다.
function insertIndex(sorted_arr, value) {
  //삽입될 위치를 찾는 함수
  for (let i in sorted_arr) {
    if (value < sorted_arr[i]) {
      return i;
    }
  }
  return sorted_arr.length;
}

function insertSort(arr) {
  let sorted_arr = [];

  while (arr.length != 0) {
    let value = arr.shift();
    //삽입될 위치를 반환함
    let index = insertIndex(sorted_arr, value);
    //삽입될 위치에 값을 반환
    sorted_arr.splice(index, 0, value);
  }
  return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function insertIndex(sorted_arr, value) {
  //삽입될 위치를 찾는 함수
  for (let i in sorted_arr) {
    if (value < sorted_arr[i]) {
      return i;
    }
  }
  return sorted_arr.length;
}

function insertSort(arr) {
  let sorted_arr = [];

  while (arr.length != 0) {
    let [value, ...arr2] = arr;
    arr = arr2;
    //삽입될 위치를 반환함
    let index = insertIndex(sorted_arr, value);
    //삽입될 위치에 값을 반환
    sorted_arr.splice(index, 0, value);
  }
  return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));
```

### 2.4.3 병합 정렬

- 병합 정렬은 분할 정복 알고리즘으로, 배열을 반으로 나누어 정렬하고 합치는 방식이다.
- Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 동일할 수 있음
- 분할 정복(Divide and Conquer)
- step

```
// 분할
[5, 10, 66, 77, 54, 32, 11, 15]
[5, 10, 66, 77], [54, 32, 11, 15]
[5, 10], [66, 77], [54, 32], [11, 15]
[5], [10], [66], [77], [54], [32], [11], [15]

// 정복
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10, 66, 77], [11, 15, 32, 54]
[5, 10, 11, 15, 32, 54, 66, 77]
```

- 구현코드

```js
// step 1
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열) {
  let 입력배열의길이 = 입력배열.length;
  if (입력배열의길이 <= 1) {
    return 입력배열;
  }
  let 중간값 = parseInt(입력배열의길이 / 2);
  // ~~(입력배열의길이 / 2)와 같습니다.
  let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력배열.slice(중간값));

  return `그룹하나:${그룹하나}\n그룹둘:${그룹둘}\n\n`;
}

console.log(병합정렬(입력값));
```

```js
// step 2
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열) {
  //분할
  let 입력배열의길이 = 입력배열.length;
  let 결과값 = [];
  if (입력배열의길이 <= 1) {
    return 입력배열;
  }
  let 중간값 = parseInt(입력배열의길이 / 2);
  // ~~(입력배열의길이 / 2)와 같습니다.
  let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력배열.slice(중간값));

  // return `그룹하나:${그룹하나}\n그룹둘:${그룹둘}\n\n`;

  //정복
  while (그룹하나.length != 0 && 그룹둘.length != 0) {
    if (그룹하나[0] < 그룹둘[0]) {
      결과값.push(그룹하나.shift());
    } else {
      결과값.push(그룹둘.shift());
    }
  }
  while (그룹하나.length != 0) {
    결과값.push(그룹하나.shift());
  }
  while (그룹둘.length != 0) {
    결과값.push(그룹둘.shift());
  }

  return 결과값;
}

console.log(병합정렬(입력값));
```

```js
// 개선 코드
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열) {
  //분할
  let 입력배열의길이 = 입력배열.length;
  let 결과값 = [];
  if (입력배열의길이 <= 1) {
    return 입력배열;
  }
  let 중간값 = parseInt(입력배열의길이 / 2);
  // ~~(입력배열의길이 / 2)와 같습니다.
  let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력배열.slice(중간값));

  // return `그룹하나:${그룹하나}\n그룹둘:${그룹둘}\n\n`;

  //정복
  while (그룹하나.length != 0 && 그룹둘.length != 0) {
    if (그룹하나[0] < 그룹둘[0]) {
      결과값.push(그룹하나.shift());
    } else {
      결과값.push(그룹둘.shift());
    }
  }

  //개선된 코드
  결과값 = [...결과값, ...그룹하나];
  결과값 = [...결과값, ...그룹둘];

  return 결과값;
}

console.log(병합정렬(입력값));
```

### 2.4.4 퀵 정렬

- best - O(nlog2n), worst - O(n\*\*2)
- 피봇값을 기준으로 정렬
- 피봇값은 pivot 처음값, 중간값, 마지막 값
- 실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음

```
// 원본
[66, 77, 54, 32, 10, 5, 11, 15]

// step 1
// 피봇값 : 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

// step 2
// 피봇값 : 54
[32, 10, 5, 11, 15] + [54] + [66] + [77]

// step 3
// 피봇값 : 32
[10, 5, 11, 15] + [32] + [54] + [66] + [77]

// step 4
// 피봇값 : 10
[5] + [10] + [11, 15] + [32] + [54] + [66] + [77]

// step 5
// 피봇값 : 11
[5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]

[5, 10, 11, 15, 32, 54, 66, 77]
```

```js
// 구현코드
let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

function 퀵정렬(입력배열) {
  let 입력배열의길이 = 입력배열.length;

  if (입력배열의길이 <= 1) {
    return 입력배열;
  }

  let 피벗값 = 입력배열.shift();
  let 그룹하나 = [];
  let 그룹둘 = [];

  for (let i in 입력배열) {
    if (입력배열[i] < 피벗값) {
      그룹하나.push(입력배열[i]);
    } else {
      그룹둘.push(입력배열[i]);
    }
  }
  console.log(
    `그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n피벗값 : ${피벗값}\n`
  );

  return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));
}

퀵정렬(입력값);
```

### 2.4.5 코딩테스트에 나오는 정렬 유형

```js
data = [
  [23, 33, "hello world"],
  [42, 11, "hello wo"],
  [33, 25, "hello wor"],
  [11, 12, "hello worl"],
  [82, 23, "hello"],
];

// 0번째 인덱스로 정렬
data.sort((a, b) => a[0] - b[0]);
data.sort((a, b) => b[0] - a[0]);

// 2번째 있는 글자의 글자수로 정렬
data.sort((a, b) => a[2].length - b[2].length);

// 국영수 점수와 이름
data = [
  [[23, 33, 44], "licat"],
  [[42, 11, 12], "mura"],
  [[33, 25, 33], "binky"],
  [[11, 12, 11], "gary"],
  [[82, 23, 22], "sun"],
];

// 국영수 점수의 평균이 가장 높은 사람 순으로 사람만 출력해주세요.
data.sort((a, b) => b[0].reduce() - a[0].reduce());
data.sort(
  (a, b) => b[0].reduce((a, c) => a + c, 0) - a[0].reduce((a, c) => a + c, 0)
);
const sorted_data = data.sort(
  (a, b) => b[0].reduce((a, c) => a + c, 0) - a[0].reduce((a, c) => a + c, 0)
);

// 추출은 map입니다.
sorted_data.map((data) => data[1]);

data = [
  { name: "licat", age: 23 },
  { name: "mura", age: 42 },
  { name: "binky", age: 33 },
  { name: "gary", age: 11 },
  { name: "sun", age: 82 },
];

// age 순서대로 정렬하고 싶을 때
data.sort((a, b) => a.age - b.age);
```

### 2.4.5-2 2번째 문제

- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120835

```js
function solution(emergency) {
  // emergency: [3, 76, 24]
  // sorted: [76, 24, 3]
  // 우리가 원하는 값: [3, 1, 2]
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((data) => sorted.indexOf(data) + 1);
}

solution([3, 76, 24]);
```

## 2.5 페이지 교체 알고리즘

- https://www.notion.so/paullabworkspace/db83d9c4bbe6410ea208e6dc2daff07e
- 페이지 교체 알고리즘 : 메모리를 효율적으로 사용하기 위해서 어떤 데이터를 메모리에 적재할지 결정하는 알고리즘
- FIFO(오래된 녀석이 가장 빨리 나간다)

```
// FIFO(시험에 나오지 않습니다.)
['망치'] miss 5초
['망치', '육각렌치'] miss 5초
['망치', '육각렌치', '십자드라이버'] miss 5초
// 여기서 망치를 사용한다면?
['망치', '육각렌치', '십자드라이버'] hit 1초
// 여기서 톱이 필요하다면?
['육각렌치', '십자드라이버', '톱'] miss 5초

// LRU(Least Recently Used, 시험에 나옵니다.)
['망치'] miss 5초
['망치', '육각렌치'] miss 5초
['망치', '육각렌치', '십자드라이버'] miss 5초
// 여기서 망치를 사용한다면?
['육각렌치', '십자드라이버', '망치'] hit 1초
// 여기서 만약 톱이 필요하다면?
['십자드라이버', '망치', '톱'] miss 5초
```

### 2.5.1 LRU 알고리즘 구현

- 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17680

```js
// ["Jeju", "Pangyo", "Jeju", "Pangyo", "Seoul", "LA", "Pangyo", "NewYork"]
// ["jeju"] miss 5초
// ["jeju", "pangyo"] miss 5초
// ["pangyo", "jeju"] hit 1초
// ["jeju", "pangyo"] hit 1초
// ["jeju", "pangyo", "seoul"] miss 5초
// ...

function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toLowerCase();
    let idx = cache.indexOf(city);
    if (idx !== -1) {
      //hit
      cache.splice(idx, 1);
      cache.push(city);
      time += 1;
    } else {
      //miss
      cache.push(city);
      time += 5;
      if (cache.length > cacheSize) {
        cache.shift();
      }
    }
  }
  return time;
}
```

## 2.6 슬라이딩 윈도우와 투 포인터 알고리즘

### 2.6.1 슬라이딩 윈도우 알고리즘

- 슬라이딩 윈도우 : 윈도우 사이즈가 고정되어 있고, 이동하면서 최대값이나 최소값을 찾는 알고리즘

```js
// 다음 중 연속된 3개의 합이 10인 것의 쌍을 출력하는 함수를 만들어주세요.
// 메서드 체이닝으로 간소화 하진 않겠습니다.
// zip, reduce사용해서 합을 구하고, filter를 사용해서 10인것을 골라낼 것입니다.
data = [1, 4, 3, 3, 6, 8, 2, 7, 5, 4, 1, 3, 9, 1, 10];

function solution(data) {
  let result = [];
  for (let i = 0; i < data.length - 2; i++) {
    let sum = data[i] + data[i + 1] + data[i + 2];
    if (sum === 10) {
      result.push([data[i], data[i + 1], data[i + 2]]);
    }
  }
  return result;
}

solution(data);
```

### 2.6.2 투 포인터 알고리즘

- 투포인터 알고리즘 : 2개의 포인터를 이용해서 원하는 결과를 얻는 알고리즘

```js
// 다음 중 연속된 데이터의 합이 10인 것의 쌍을 출력하는 함수를 만들어주세요.
[1, 4, 3, 2, 7, 3, 9, 1, 4, 3, 3, 1];
```
