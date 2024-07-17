// DOM

// 문자열을 사용해 element, text 노드를 생성하거나 추가하기
// 요소 안의 값에 접근하여 값을 가져오거나, 변경할 수 있습니다.

// input.value (다른 애들한테는 없음)
// 값을 가질 수 있는 애들은 value가 있다

const myBtn = document.querySelector("button");
const myP = document.querySelector("p");
const myInput = document.querySelector("input");

myBtn.addEventListener("click", function () {
  if (myInput.value.length < 2) {
    alert("2글자 이상 입력하세요");
    return;
  }
  myP.textContent = myInput.value;
  // myP.textContent += myInput.value; // 계속 더해준다
});
// innerText랑 차이 사용자에게 보여주기만 하는 텍스트
// textContent 는 노드의 값을 가져옴

// input 요소에 'input' 이벤트를 연결하면 실시간으로
// 값이 반영되게 만들 수도 있습니다.
myInput.addEventListener("input", () => {
  if (myInput.value.length > 10) {
    alert("너무 많이 입력했어요");
    return;
  }
  myP.textContent = myInput.value; // 인풋 요소에 있는 데이터를 가져올 수 있다.
});

// myP.innerHTML = "<strong>I'm Strong!!</strong>";

// innerHTML 은 요소(element) 내에 포함된 HTML 마크업을 가져오거나 설정합니다. 중요한 기능은 innerHTML로 값을 할당할 때, 마크업으로 변환할 수 있는 문자열이 있다면 마크업으로 만들어 보여준다는 것 입니다. 만약 그런 문자열이 없다면 그냥 문자열만 컨텐츠로 설정합니다.

// innerText 속성은 요소의 렌더링된 텍스트 콘텐츠를 나타냅니다. (렌더링된에 주목하세요. innerText는 텍스트 내에 문법적으로 처리가 가능한 텍스트가 있으면 처리가 끝난 결과물을 텍스트로 전달합니다.)

// textContent 속성은 노드의 텍스트 콘텐츠를 표현합니다. 컨텐츠를 단순히 텍스트로만 다룹니다.
