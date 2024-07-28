import React, { useState } from "react";
import { MdEdit, MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote, handleUpdateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleSaveClick = () => {
    handleUpdateNote(id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <textarea
            className="edit-note"
            rows="5"
            cols="10"
            value={editedText}
            onChange={handleInputChange}
          ></textarea>
          <button className="save" onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <div className="note-footer">
            <small>{date}</small>
            <div>
              <MdEdit className="edit-icon" onClick={handleEditClick} />
              <MdDeleteForever
                className="delete-icon"
                onClick={() => handleDeleteNote(id)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
