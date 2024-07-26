
import { useState} from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

import "./todo.css";

export const Todo = () => {

    const [task, setTask] = useState([]);

    const handleSubmit = (inputValue) => {

        if(!inputValue.trim()) { // Check if 'inputValue' is empty or only whitespace.
            return;
        }

        if(task.includes(inputValue)) { // Check if the input value already exists in the 'task' array.
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);
        // (prevTask) => [...prevTask, inputValue]: This is an arrow function that takes the previous state (prevTask) as its argument and returns a new array.
        // The new array is created by spreading the previous state array (...prevTask) and adding the new item (inputValue) at the end.
    }

    const handleDeleteTodo = (currTask) => {
        const deleteTask = task.filter((value)=>value != currTask );
        setTask(deleteTask);
    }

    const handleClearAll = () => {
        setTask([]);
    }


  return (
    <section className="todo-container">
        <TodoDate />
        <section className="form-container">
            <TodoForm onAddTodo={handleSubmit} />
            <section>
                <ul className="todo-list">
                    {task.map((currTask,index)=>{
                        return <TodoList key={index} data={currTask} onHandleDeleteTodo={handleDeleteTodo} />
                    })}
                </ul>
                <button onClick={handleClearAll}>Clear All</button>
            </section>
        </section>
    </section>
  )
}
