var todoDatas = [
    {
        id: 1,
        todo: "아침먹기",
    },
    {
        id: 2,
        todo: "점심먹기",
    },
];
// 투두 데이터 추가
var addTodoData = function (todoText) {
    var newTodoId = todoDatas[todoDatas.length - 1].id + 1;
    var newTodo = {
        id: newTodoId,
        todo: todoText,
    };
    todoDatas.push(newTodo);
    return todoDatas;
};
var addTodoList = function () {
    var $todoInput = document.querySelector("#todo-input");
    if ($todoInput !== null && $todoInput instanceof HTMLInputElement) {
        var todoText = $todoInput.value;
        $todoInput.value = "";
        var todoDatas_1 = addTodoData(todoText);
        todoRender(todoDatas_1);
    }
    else {
        alert("경고");
    }
};
// 버튼 클릭 이벤트
var $todoInputButton = document.querySelector("#todo-button");
$todoInputButton.addEventListener("click", addTodoList); // ! : null이 아니야
var createTodoLi = function (todoData) {
    var $todoLi = document.createElement("li");
    var $todoP = document.createElement("p");
    $todoLi.innerText = todoData.todo;
    $todoLi.append($todoP);
    return $todoLi;
};
// 투두 랜더
var todoRender = function (todoDatas) {
    var $todoContainer = document.querySelector("#todo-container");
    $todoContainer.innerHTML = "";
    todoDatas.forEach(function (todoData) {
        // todoData 는 위에 totoDatas 의 타입을 지정해줘서 자동으로 알아서 타입을 추론함
        // todoData. 하면 id, todo 가 리스트로 뜸
        var $todoLi = createTodoLi(todoData);
        $todoContainer.append($todoLi);
    });
};
todoRender(todoDatas);
