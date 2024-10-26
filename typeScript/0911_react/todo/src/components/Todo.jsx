import { useState } from "react";
import TodoView from "./TodoView";
import useTodoData from "../hooks/todoHook";

const Todo = () => {
    const [todoText, setTodoText] = useState("");
    const [todoList, postTodo, isLoading] = useTodoData();

    const handleInput = (e) => {
        const newTodoText = e.target.value;
        setTodoText(newTodoText);
    };

    const handleButton = () => {
        postTodo(todoText);
        // setTodoList((prevTodoList) => {
        //     const newTodo = {
        //         id: +todoList[todoList.length - 1].id + 1,
        //         todo: todoText,
        //     };
        //     const newTodoList = [...prevTodoList, newTodo];
        //     if (newTodoList.length > 5) {
        //         newTodoList.shift();
        //     }
        //     return newTodoList;
        // });
    };

    const props = {
        todoList,
        todoText,
        handleInput,
        handleButton,
    };

    return isLoading ? <h1>로딩중 페이지</h1> : <TodoView {...props} />;
};

export default Todo;
