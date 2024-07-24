
import { useState,useEffect } from "react";

import "./todo.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {

    const [inputValue, setInputValue] = useState("");

    const [task, setTask] = useState([]);

    const [date,setDate] = useState(new Date());

    const handleInputs = (event) => {
        const value = event.target.value;
        setInputValue(value);
    }

    const handleClearAll = () => {
        setTask([]);
    }

    const handleChechTodo = () => {
        
    }
    
    const handleDeleteTodo = (currTask) => {
        // console.log(currTask);
        const deleteTask = task.filter((value)=>value != currTask );
        setTask(deleteTask);
    }

    useEffect(()=>{

        const getDate = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(getDate);

    },[]);


    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

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
            <p>{`${formattedDate} - ${formattedTime}`}</p>
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
                            <div>
                                <button className="todo-check-btn" onClick={handleChechTodo}>
                                <FaRegCheckCircle/>
                                </button>
                                <button className="todo-delete-btn" onClick={() => handleDeleteTodo(currTask)}>
                                <MdDeleteForever/>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button onClick={handleClearAll}>Clear All</button>
            </section>
        </section>
    </section>
  )
}
