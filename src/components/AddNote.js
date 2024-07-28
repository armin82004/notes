import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    if (200 - event.target.value.length >= 0) setNoteText(event.target.value);
  };

  const handlesaveclick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        placeholder="Type to add a note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{200 - noteText.length} Remaining</small>
        <button className="save" onClick={handlesaveclick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
