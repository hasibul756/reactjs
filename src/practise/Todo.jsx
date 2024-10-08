import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks
  const [taskInput, setTaskInput] = useState(''); // State to hold the current task input

  // Function to handle the submission of a new task
  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]); // Add new task
      setTaskInput(''); // Clear input field
    }
  };

  // Function to delete a task
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index); // Filter out the task at the specified index
    setTasks(newTasks); // Update tasks state
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <form onSubmit={handleAddTask} className="mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} // Update input value
          placeholder="Add a new task..."
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
          Add Task
        </button>
      </form>

      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <span>{task}</span>
            <button
              onClick={() => handleDeleteTask(index)} // Delete task
              className="bg-red-500 text-white p-1 ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
