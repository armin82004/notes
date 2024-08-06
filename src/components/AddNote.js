import React, { useEffect, useRef, useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoArchiveOutline } from "react-icons/io5";

const AddNote = (handleaddnote) => {
  const [isAdding, setisAdding] = useState(false);
  const [color, setColor] = useState("");
  const [colorchoose, setcolorchoose] = useState(false);
  const [content,setcontent] = useState('');
  function handleclickoutside() {
    setisAdding(false);
    setcolorchoose(false);
  }

  function handleclick() {
    setisAdding(true);
  }

  function handlepaletteclick() {
    setcolorchoose(!colorchoose);
  }

  function handlecolorclick(event){
    const className = event.target;
    console.log(className);
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
  function handletextarea(e){
    setcontent(e.target.value);
  }
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
          <input className="input-note" type="text" placeholder="Title" />
          <textarea className="input-note" onChange={(e)=>{handletextarea(e)}} type="text" placeholder="Take a Note..." />
          <div className="add-note-footer">
            {colorchoose ? (
              <>
                <div className="icons-container">
                  <div
                    className="icon-container"
                    onClick={() => {
                      handlepaletteclick();
                    }}
                  >
                    <IoColorPaletteOutline size="1.2em" />
                  </div>
                  <div className="color-dusk" ></div>
                  <div className="color-storm"></div>
                  <div className="color-mint"></div>
                  <div className="color-coral"></div>
                  <div className="icon-container">
                    <IoArchiveOutline size="1.2em" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="icons-container">
                  <div
                    className="icon-container"
                    onClick={() => {
                      handlepaletteclick();
                    }}
                  >
                    <IoColorPaletteOutline size="1.2em" />
                  </div>
                  <div className="icon-container">
                    <IoArchiveOutline size="1.2em" />
                  </div>
                </div>
              </>
            )}
            <button className="addnote-save-button">Save</button>
          </div>
        </>
      ) : (
        <>
          <input className="input-note" type="text" placeholder="Take a Note..." />
        </>
      )}
    </div>
  );
};

export default AddNote;
