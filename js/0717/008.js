// DOM

// DOM 안에서 노드 탐색하기
const cont = document.querySelector(".cont");
console.log(cont.firstElementChild); // 첫번째 자식을 찾습니다.
console.log(cont.lastElementChild); // 마지막 자식을 찾습니다.
console.log(cont.nextElementSibling); // 다음 형제요소를 찾습니다.
console.log(cont.previousSibling); // 이전 형제노드를 찾습니다.
console.log(cont.children); // 모든 자식요소를 찾습니다.
console.log(cont.childNodes); // 모든 자식노드를 찾습니다.
console.log(cont.parentElement); // 부모 요소를 찾습니다.
// 자기 자신부터 시작해 부모로 타고 올라가며 가장 가까운 cont 클래스 요소를 찾습니다. 단, 형제요소는 찾지 않습니다.
console.log(cont.querySelector("strong").closest(".cont").innerHTML);
