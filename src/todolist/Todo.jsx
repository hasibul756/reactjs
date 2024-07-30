import { useState} from "react";
import {GetStorageTodoData,SetStorageTodoData} from "./todoLocalStorage";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

import "./todo.css";

export const Todo = () => {
  const [task, setTask] = useState(() => GetStorageTodoData());

  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content.trim()) {
      return; // Check if 'content' is empty or only whitespace
    }

    const matchInputs = task.find((currTask) => currTask.content === content);
    if (matchInputs) {
      return; // Check if the input value already exists in the 'task' array
    }

    setTask((prevTask) => [...prevTask, { id, content, checked }]); // Add the new task to the state
  };

  SetStorageTodoData(task);

  const handleDeleteTodo = (value) => {
    const deleteTask = task.filter((currTask) => currTask.content !== value);
    setTask(deleteTask); // Update the state by removing the specified task
  };

  const handleCheckedTodo = (checked) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === checked) {
        return { ...currTask, checked: !currTask.checked }; // Toggle the 'checked' property of the specified task
      } else {
        return currTask; // Return the task as-is if it doesn't match
      }
    });
    setTask(updatedTask); // Update the state with the modified tasks
  };

  const handleClearAll = () => {
    setTask([]); // Clear all tasks
  };

  return (
    <section className="todo-container">
      <TodoDate />
      <section className="form-container">
        <TodoForm onAddTodo={handleSubmit} />
        <section>
          <ul className="todo-list">
            {task.map((currTask) => (
              <TodoList
                key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            ))}
          </ul>
          <button onClick={handleClearAll}>Clear All</button>
        </section>
      </section>
    </section>
  );
};
