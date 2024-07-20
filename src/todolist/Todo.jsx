
import { useState } from "react";

import "./todo.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {

    const [inputValue, setInputValue] = useState("");

    const [task, setTask] = useState([]);

    const handleInputs = (event) => {
        const value = event.target.value;
        setInputValue(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!inputValue.trim()) { // Check if 'inputValue' is empty or only whitespace.
            return;
        }

        if(task.includes(inputValue)) { // Check if the input value already exists in the 'task' array.
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);
        // (prevTask) => [...prevTask, inputValue]: This is an arrow function that takes the previous state (prevTask) as its argument and returns a new array.
        // The new array is created by spreading the previous state array (...prevTask) and adding the new item (inputValue) at the end.

        setInputValue(""); // Clear the input field
    }



  return (
    <section className="todo-container">
        <header>
            <h1>Todo List</h1>
        </header>
        <section className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="todo-search">
                    <input type="text" name="" id="searchbox" value={inputValue} autoComplete="off" onChange={handleInputs} />
                    <button type="submit">Add Task</button>
                </div>
            </form>
            <section>
                <ul className="todo-list">
                    {task.map((currTask,index)=>(
                        <li key={index} className="todo-item">
                            <span>{currTask}</span>
                            <button className="todo-check-btn">
                            <FaRegCheckCircle/>
                            </button>
                            <button className="todo-delete-btn">
                            <MdDeleteForever/>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    </section>
  )
}
