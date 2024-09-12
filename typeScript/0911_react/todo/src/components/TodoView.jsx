const TodoView = ({ todoList, todoText, handleInput, handleButton }) => {
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
};

export default TodoView;
