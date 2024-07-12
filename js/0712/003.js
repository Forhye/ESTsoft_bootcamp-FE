// call은 한번만 묶고
// bind는 아예 처음부터 묶는다

// 함수를 실행할 때 디스를 부른 곳을 찾음
function sayName() {
  console.log(this.name);
}

var bruce = {
  name: "bruce",
  sayName: sayName,
};

var peter = {
  name: "peter",
  sayName: sayName.bind(bruce),
};

peter.sayName();
// 내가 찾은 순서
// 1. sayName함수를 찾는다.
// 2. sayName함수는 this의 (객체의) name을 참조한다.
// 3. peter 변수를 찾았지만 sayName이 bruce로 묶여있어서
// 4. peter의 name인 peter를 전달하지 않고 bruce 변수를 찾아간다
// 5. 결국 bruce의 name인 bruce가 출력된다.
bruce.sayName();
