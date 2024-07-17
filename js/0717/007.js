// DOM

//인접한 곳으로 정밀하게 배치하기
/** beforebegin
beforebegin
<여는태그>
afterbegin
----컨텐츠----
beforeend
</닫는태그>
afterend
*/

<strong class="sayHi">반갑습니다.</strong>;

const sayHi = document.querySelector(".sayHi");
sayHi.insertAdjacentHTML("beforebegin", "<span>안녕하세요 저는</span>");
sayHi.insertAdjacentHTML("afterbegin", "<span>00입니다</span>");
sayHi.insertAdjacentHTML("beforeend", "<span>요즘에는</span>");
sayHi.insertAdjacentHTML("afterend", "<span>이러이러해요</span>");
