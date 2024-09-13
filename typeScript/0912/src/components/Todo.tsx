import { useState, ChangeEvent } from "react";
import TodoView, { AddTodoButton, TodoInput, TodoList } from "./TodoView";
import useTodoData from "../hooks/todoHook";

const Todo = () => {
    const [todoText, setTodoText] = useState<string>("");
    const [todoList, postTodo, isLoading] = useTodoData();

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
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

    return isLoading ? (
        <h1>로딩중 페이지</h1>
    ) : (
        <TodoView>
            <TodoList todoList={todoList} />
            <TodoInput todotext={todoText} handleInput={handleInput} />
            <AddTodoButton handleButton={handleButton} />
        </TodoView>
    );
};

export default Todo;
