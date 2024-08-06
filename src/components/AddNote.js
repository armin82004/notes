import { useState } from "react";

const AddNote = () => {
  const [isAdding,setisAdding] = useState(false);
  function handleinputclick(){
    setisAdding(true);
  }
  {
    isAdding ? (
      <div className="add-note-container">
        <input className="input-note-title" onClick={()=>{handleinputclick()}}/>
      </div>
    ) : (
      <div className="add-note-container">
        <input className="input-note-title" />
        <input className="input-note-content" />
      </div>
    );
  }
};

export default AddNote;
