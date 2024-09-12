import { useEffect, useState } from "react";

function useTodoData() {
    const [isLoading, setIsLoading] = useState(false);
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3300/todos")
            .then((res) => {
                return res.json();
            })
            .then((todoData) => {
                setTodoList(todoData);
                setIsLoading(false);
            });
    }, []);

    const postTodo = (todoText) => {
        setIsLoading(true);
        const newTodo = {
            todo: todoText,
        };

        fetch("http://localhost:3300/todos", {
            method: "POST",
            headers: {
                "Content-Type": "aplication/json",
            },
            body: JSON.stringify(newTodo),
        })
            .then((res) => {
                return res.json();
            })
            .then((newTodo) => {
                setIsLoading(false);
                setTodoList((prevTodoList) => {
                    return [...prevTodoList, newTodo];
                });
            });
    };
    return [todoList, postTodo, isLoading];
}

export default useTodoData;
