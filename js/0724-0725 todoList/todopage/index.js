const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");

const createTodoUi = (todoData) => {
  const $li = document.createElement("li");
  const $delButton = document.createElement("button");
  const $editButton = document.createElement("button");
  $delButton.textContent = "삭제하기";
  $editButton.textContent = "수정하기";

  const $checkbox = createElement("input");
  $checkbox.setAttribute("type", "checkbox");

  $li.textContent = todoData.todo;
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
    // console.log("실패, 성공 상관없이 무조건 실행한다");
  }
};

$form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const todoTxt = $input.value;
  await addTodo(todoTxt);
  $input.value = "";
});
