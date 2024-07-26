
import {useState} from 'react'

const TodoForm = ({onAddTodo}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputs = (event) => {
        const value = event.target.value;
        setInputValue(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue(""); // Clear the input field
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-search">
                <input type="text" name="" id="searchbox" value={inputValue} autoComplete="off" onChange={handleInputs} />
                <button type="submit">Add Task</button>
            </div>
        </form>
    )
}

export default TodoForm