import { useEffect } from "react";

export const todoKey = "localTodo"; // Define localStorage key

export const GetStorageTodoData = () => {
    try {
        const rawTodos = localStorage.getItem(todoKey);
        return rawTodos ? JSON.parse(rawTodos) : []; // Check if rawTodos exists before parsing
    } catch (error) {
        console.error("Failed to parse tasks from localStorage:", error);
        return []; // Return an empty array in case of error
    }
}

export const SetStorageTodoData = (task) => {
  // Update localStorage whenever the 'task' state changes
  useEffect(() => {
    try {
      localStorage.setItem(todoKey, JSON.stringify(task));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  }, [task]);
}
