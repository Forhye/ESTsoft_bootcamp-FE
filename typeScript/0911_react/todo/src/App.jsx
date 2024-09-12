import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function Todo() {
    const [todoList, settodoList] = useState([
        { id: "1", todo: "아침먹기" },
        { id: "2", todo: "점심먹기" },
    ]);

    const [todoText, setTodoText] = useState("");
    const handleInput = (e) => {
        const newTodoText = e.target.value;
        setTodoText(newTodoText);
    };

    const handleButton = () => {
        settodoList((prevTodoList) => {
            const newTodo = {
                id: +todoList[todoList.length - 1].id + 1,
                todo: todoText,
            };

            const newTodoList = [...prevTodoList, newTodo];
            if (newTodoList.length > 5) {
                newTodoList.shift();
            }
            return newTodoList;
        });
    };

    return (
        <div>
            <h1>todolist</h1>
            <ul>
                {todoList.map((item) => (
                    <li key={item.id}>
                        <p>{item.todo}</p>
                    </li>
                ))}
            </ul>
            <input type="text" onChange={handleInput} value={todoText} />
            <button type="button" onClick={handleButton}>
                add
            </button>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Todo />
        </div>
    );
}

export default App;
