import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completeTask, deleteTask } from "./todoSlice";

const TodoRedux = () => {
    const [taskText, setTaskText] = useState("");

    const tasks = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskText.trim()) {
            dispatch(addTask({ text: taskText }));
            setTaskText("");
        }
    };

    const handleMarkComplete = (id) => {
        dispatch(completeTask({id}));
    };

    return (
        <div>
            <h3>Todo using redux</h3>
            <input 
                type="text" 
                name="task" 
                value={taskText} 
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks && tasks.map((task) => (
                    <li key={task.id}>
                        <span style={{textDecoration : task.completed ? 'line-through': ''}}>
                        {task.text}
                        </span>
                    <button style={{margin: '0 20px'}} onClick={() => handleMarkComplete(task.id)}>Mark as complete</button>
                    <button onClick={() => dispatch(deleteTask({id: task.id}))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoRedux;