// 재귀함수

function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

/**
factorial(3)을 했을때 동작되는 코드.
----
if(3 <= 1) {
    return 3
}
return 3 * factorial(2)
----
if(2 <= 1) {
    return 2
}
return 2 * factorial(1)

----
if(1 <= 1) {
    return 1
}
return 1
----
 */

// 피보나치 for문
function fibonacci(n) {
  let a = 1,
    b = 0,
    temp;
  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

let sum2 = 0;
for (let index = 0; index < 6; index++) {
  sum2 += index;
}
console.log(sum2); // 15

function sum(n) {
  if (n <= 1) {
    return n;
  }
  // 5일경우에는 5 + 4~1까지 더한값
  // 4일경우에는 4 + 3~1까지 더한값
  return n + sum(n - 1);
}

sum(5);
// 5<=1 return 5 / 5 + sum(4)
// 4<=1 return 4 / 4 + sum(3)
// 3<=1 return 3 / 3 + sum(2)
// 2<=1 return 2 / 2 + sum(1)
// 1<=1 return 1

// 자습때 해보기
function reverse(text) {
  if (text.length <= 1) {
    return text;
  }
  return reverse(text.slice(1)) + text[0];
  // 반환값 : reverse함수의 text를 1씩 slice하고 뒤에 + text[0]번째
  // 배열의 값을 붙여라
  // 그럼 결국 앞쪽 알파벳이 뒤로 하나씩 넘겨지게되어 olleh 이 됨
}
reverse("hello");
console.log(reverse());

// reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
// reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
// reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
// reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
// reverse('o') == 'o'
