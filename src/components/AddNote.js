import React, { useEffect, useRef, useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";

const AddNote = () => {
  const [isAdding, setisAdding] = useState(false);
  function handleclickoutside() {
    setisAdding(false);
  }

  function handleclick() {
    setisAdding(true);
  }
  const Useoutsideclick = (callback) => {
    const ref = useRef(null);
    useEffect(() => {
      const handleclick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
      document.addEventListener("click", handleclick);
      return () => {
        document.addEventListener("click", handleclick);
      };
    }, [ref]);

    return ref;
  };
  const ref = Useoutsideclick(handleclickoutside);
  return (
    <div
      className="add-note-container"
      ref={ref}
      onClick={() => {
        handleclick();
      }}
    >
      {isAdding ? (
        <>
          <input className="input-note" placeholder="Title" />
          <input className="input-note " placeholder="Take a Note" />
          <div className="icons-container">
            <div className="icon-container">
              <IoColorPaletteOutline size="1.2em" />
            </div>
          </div>
        </>
      ) : (
        <>
          <input className="input-note" placeholder="Take a Note" />
        </>
      )}
    </div>
  );
};

export default AddNote;
