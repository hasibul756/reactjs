
import { useState} from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

import "./todo.css";

export const Todo = () => {

    const [task, setTask] = useState([]);

    const handleSubmit = (inputValue) => {

        const {id,content,checked} = inputValue;

        if(!content.trim()) { // Check if 'inputValue' is empty or only whitespace.
            return;
        }

        // if(task.includes(content)) { // Check if the input value already exists in the 'task' array.
        //     return;
        // }

        //for object
        const matchInputs = task.find((currTask)=> currTask.content === content);

        if(matchInputs) { return; }

        // setTask((prevTask) => [...prevTask, {id:id,content:content, checked: checked}]); //if same name we can pass them directly.
        setTask((prevTask) => [...prevTask, {id, content, checked}]);
        // (prevTask) => [...prevTask, inputValue]: This is an arrow function that takes the previous state (prevTask) as its argument and returns a new array.
        // The new array is created by spreading the previous state array (...prevTask) and adding the new item (inputValue) at the end.
    }

    const handleDeleteTodo = (value) => {
        const deleteTask = task.filter((currTask)=>currTask.content != value );
        setTask(deleteTask);
    }

    const handleCheckedTodo = (checked) => {
        const updatedTask = task.map((currTask) => {
            if(currTask.content === checked) {
                return {...currTask, checked:!currTask.checked}
            } else {
                return currTask;
            }
        })
        setTask(updatedTask);
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
                    {task.map((currTask)=>{
                        return <TodoList key={currTask.id} data={currTask.content} checked={currTask.checked} onHandleDeleteTodo={handleDeleteTodo} onHandleCheckedTodo = {handleCheckedTodo} />
                    })}
                </ul>
                <button onClick={handleClearAll}>Clear All</button>
            </section>
        </section>
    </section>
  )
}
