interface todoType {
    id: number;
    todo: string;
}

const getTodoData = async (): Promise<todoType[]> => {
    const res = await fetch("http://localhost:3000/todos");
    const todoDatas: todoType[] = await res.json();

    return todoDatas;
};

// 투두 데이터 추가
const addTodoData = async (todoText: string): Promise<todoType[]> => {
    const newTodo: Partial<todoType> = {
        // id는 서버에서 자동으로 생성됨
        todo: todoText,
    };

    const res = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
    });

    const newTodoDatas = await res.json();
    return newTodoDatas;
    // todoDatas.push(newTodo);
    // return todoDatas;
};

const addTodoList = async () => {
    const $todoInput = document.querySelector("#todo-input");

    if ($todoInput !== null && $todoInput instanceof HTMLInputElement) {
        const todoText = $todoInput.value;
        $todoInput.value = "";
        await addTodoData(todoText); // 서버에 todo 추가 요청하기
        const newTodoDatas = await getTodoData(); // 최신 todolist 받아오기
        todoRender(newTodoDatas);
    } else {
        alert("경고");
    }
};

// 버튼 클릭 이벤트
const $todoInputButton = document.querySelector("#todo-button");
$todoInputButton!.addEventListener("click", addTodoList); // ! : null이 아니야

const createTodoLi = (todoData: todoType) => {
    const $todoLi = document.createElement("li");
    const $todoP = document.createElement("p");

    $todoLi.innerText = todoData.todo;
    $todoLi.append($todoP);
    return $todoLi;
};

// 투두 랜더
const todoRender = (todoDatas: todoType[]) => {
    const $todoContainer = document.querySelector("#todo-container");

    $todoContainer!.innerHTML = "";

    todoDatas.forEach((todoData) => {
        // todoData 는 위에 totoDatas 의 타입을 지정해줘서 자동으로 알아서 타입을 추론함
        // todoData. 하면 id, todo 가 리스트로 뜸
        const $todoLi = createTodoLi(todoData);
        $todoContainer!.append($todoLi);
    });
};

const init = async () => {
    const todoDatas = await getTodoData();
    todoRender(todoDatas);
};

init();
