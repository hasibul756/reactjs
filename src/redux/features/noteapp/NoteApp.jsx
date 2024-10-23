import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, pinNote } from "./NoteAppSlice";

const NoteApp = () => {
    const [getNotes, setNotes] = useState("");
    const notes = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Note App</h3>
            <input 
                type="text" 
                name="notes" 
                value={getNotes} 
                onChange={(e) => setNotes(e.target.value)} 
            />
            <button 
                onClick={() => {
                    dispatch(addNote({ text: getNotes }));
                    setNotes("");  // Clear the input after adding a note
                }}
            >
                Add Note
            </button>
            {
                notes && notes.map((note) => (
                    <div key={note.id}>
                        <p>{note.text}</p>
                        <button onClick={() => dispatch(deleteNote({ id: note.id }))}>
                            Delete
                        </button>
                        <button onClick={() => dispatch(pinNote({ id: note.id }))}>
                            {note.pinned ? "Unpin" : "Pin"}
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default NoteApp;