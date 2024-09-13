import { TodoItem } from "../hooks/todoHook";
import { ChangeEvent } from "react";

interface TodoViewProps {
    todoList: TodoItem[];
    todoText: string;
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
    handleButton: () => void;
    children: React.ReactNode;
}

const TodoInput: React.FC<any> = ({ handleInput, todoText }) => {
    return <input type="text" value={todoText} onChange={handleInput} />;
};

const AddTodoButton: React.FC<any> = ({ handleButton }) => {
    return (
        <button type="button" onClick={handleButton}>
            add
        </button>
    );
};

const TodoList: React.FC<any> = ({ todoList }) => {
    return (
        <ul>
            {todoList.map((todoItem: any) => (
                <li key={todoItem.id}>
                    <p>{todoItem.todo}</p>
                </li>
            ))}
        </ul>
    );
};
const TodoView: React.FC<Partial<TodoViewProps>> = ({ children }) => {
    return (
        <div>
            <h1>멋진 투두</h1>
            {children}
        </div>
    );
};

export { TodoInput, TodoList, AddTodoButton };
export default TodoView;
