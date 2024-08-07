import { useId, useState } from "react";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setnotes] = useState([
    {
      id: useId,
      text: "hello",
      title: "title",
      date: "12:34 pm",
      color: "default",
    },
  ]);
  function handleaddnote(text, color, title) {
    const hours = Date.getHours();
    const min = Date.getMinutes();
    const date = hours + ":" + min;
    const newnote = {
      id: useId,
      text: text,
      color: color,
      title: title,
      date: date,
    };

    const newnotes = [...notes,newnote];
    setnotes(newnotes);
  }
  return (
    <div>
      <Header />
      <AddNote handleaddnote={handleaddnote} />
      <NotesList />
    </div>
  );
};
export default App;
