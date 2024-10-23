import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import todoReducer from "./features/todo/todoSlice";
import notesReducer from "./features/noteapp/NoteAppSlice";

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        todo  : todoReducer,
        notes: notesReducer,
    },
})