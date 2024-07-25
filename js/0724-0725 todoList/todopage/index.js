const url = "http://localhost:3000/todos";

const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");

const createTodoUi = (todoData) => {
  const $li = document.createElement("li");
  const $delButton = document.createElement("button");
  $delbutton.classList.add("del-btn");
  const $editButton = document.createElement("button");
  $delButton.textContent = "삭제하기";
  $delButton.classList.add("delete-btn");

  $editButton.textContent = "수정하기";

  const $checkbox = createElement("input");
  $checkbox.setAttribute("type", "checkbox");

  $li.textContent = todoData.todo;
  $ul.appendChild($li);
  $li.appendChild($delButton);
  $li.appendChild($editButton);
  $li.appendChild($checkBox);
};

const fetchTodos = async function () {
  const res = await fetch(url);
  const json = await res.json();
  json.forEach((todoData) => {
    createTodoUi(todoData);
  });
};
fetchTodos();

const addTodo = async function (todoTxt) {
  // 서버에다가 todo를 보낸다
  try {
    const req = await fetch(url, {
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

const deleteTodo = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });
    return res.status === 200;
  } catch (error) {
    //예외처리 하면 좋음
  }
};

$ul.addEventListener("click", async (e) => {
  if ([...e.target.classList].includes("delete-btn")) {
    const parentNode = e.target.parentNode;
    const isDelete = await deleteTodo(parentNode.id);
    if (isDelete) {
      parentNode.remove();
    } else {
      alert("잘못된 요청입니다.");
    }
  }
});
