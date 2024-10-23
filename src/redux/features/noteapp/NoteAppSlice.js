import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // Correcting the uuid import

const initialState = [];

export const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.push({
                id: uuidv4(), // Use v4() to generate unique ID for each note
                text: action.payload.text,
                pinned: false,
            });
        },
        deleteNote: (state, action) => {
            return state.filter(note => note.id !== action.payload.id);
        },
        pinNote: (state, action) => {
            const note = state.find(note => note.id === action.payload.id);
            if (note) {
                note.pinned = !note.pinned;
            }
        }
    }
});

export const { addNote, deleteNote, pinNote } = noteSlice.actions;

export default noteSlice.reducer;