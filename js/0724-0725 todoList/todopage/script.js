// json 서버는 리다이렉트 되지 않는다.
// 라이브 서버 때문에 새로고침 되는 것 뿐이다.
// 라이브 서버는 안에 감지하고 있는 파일이 변화하면 알아서 새로고침한다.
// 그래서 DB가 바뀌면 = db.json 파일이 바뀌면
// 다른 파일이 변경이 되었기 때문에 새로고침 된다.

// async
// 어떤 함수를 비도기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");

const createTodoUi = (todoData) => {
  const $li = document.createElement("li");
  $li.textContent = item.todo;
  $ul.appendChild($li);
};

const fetchTodos = async function () {
  const res = await fetch("http://localhost:3000/todos");
  const json = await res.json();
  json.forEach((todoData) => {
    createTodoUi(todoData);
  });
};
fetchTodos();

const addTodo = async function (todoTxt) {
  // 서버에다가 todo를 보낸다
  try {
    const req = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: todoTxt, done: false }),
    });
    const newTodoData = await req.json();
    createTodoUi(newTodoData);
  } catch (error) {
    alert("서버에 이상이 있다.");
  } finally {
    console.log("실패, 성공 상관없이 무조건 실행한다");
  }
};

$form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const todoTxt = $input.value;
  await addTodo(todoTxt);
  $input.value = "";
});
