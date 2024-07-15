// 생성자 함수

// 원시값은 원시값
// 하지만 js는 자동으로 내부적으로 객체값으로 만들어준다
// Number 생성자 함수 숫자 자료형인 객체를 만들어준다

let book = {
  책이름: "알잘딱깔센 JavaScript 비동기 프로그래밍 - 비동기 너 내 동기가 돼라",
  책가격: 0,
  저자: ["구나영", "김경림"],
  출판일: "2022.08.12",
};
// 책이 100권이라면?

function Book(책이름, 책가격, 저자, 출판일) {
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
}

// let book1 = new Book('JS', 0, ['이호준'], '2099.10.30')
let book1 = new Book("js추가");
let book2 = new Book("Python", 100000, ["이호준"], "2099.11.30");
let book3 = new Book("React", 1000000, ["이호준"], "2099.12.30");

console.log(book1, book2, book3);
