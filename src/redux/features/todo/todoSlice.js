import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: new Date().toISOString(), // Generate a unique ID for the task
                text: action.payload.text,    // Use the payload to set the task text
                completed: false              // Default the task to incomplete
            });
        },
        deleteTask: (state, action) => {
            // Filter out the task with the matching ID
            return state.filter(task => task.id !== action.payload.id);
        },
        completeTask: (state, action) => {
            const task = state.find(task => task.id === action.payload.id);
            if (task) {
                task.completed = !task.completed; // Toggle the completed status
            }
        }
    },
})

export const { addTask, deleteTask, completeTask } = todoSlice.actions;

export default todoSlice.reducer;