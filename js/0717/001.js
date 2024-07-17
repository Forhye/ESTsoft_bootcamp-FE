// DOM
// API : 애플리케이션을 프로그래밍할 때 도움을 주는 도구;

document.head; //<head></head> 태그를 가져옴
document.body; //<body></body> 태그를 가져옴
document.body.childNodes; // <body>안에있는 자식 노드들을 배열로 가져옴
document.body.childNodes[1]; // 객체처럼 보이지만 유사배열이라 [] 사용
document.body.childNodes[1].tagName;
document.body.childNodes[1].innerText; // 안에 있는 텍스트
document.body.childNodes[1].innerHtml; // 태그들을 포함한 모든 것들
//점만 찍어서 얼마나 많은 애트리뷰트(속성)가 있는지 확인해보세요.
document.body.childNodes[1].document.body.childNodes[2];
document.body.childNodes[2].data;

document.getElementById(); // 해당하는 Id를 가진 요소에 접근

document.getElementsByTagName(); // ()안에 해당하는 모든 요소에 접근

document.getElementsByClassName(); // ()안에 해당하는 클래스 네임을 가진 요소에 접근

// css 선택자로 단일 요소에 접근하기
document.querySelector("selector");

// css 선택자로 여러 요소에 접근하기
document.querySelectorAll("selector");
