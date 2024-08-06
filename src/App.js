import { useId } from "react";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

const App = () => {
  const default_text = [{
    id:useId,
    text:"hello",
    title:"title",
    date:"27/01/2024",
    color:"red"
  }]
  function handleaddnote(text,color,title){

  }
  return(
    <div>
      <Header/>
      <AddNote handleaddnote={handleaddnote}/>
      <NotesList/>
    </div>
  );
}
export default App;
