import { useId } from "react";
import AddNote from "./components/AddNote";
import Header from "./components/Header";

const App = () => {
  const default_text = [{
    id:useId,
    text:"hello",
    title:"title",
    date:"27/01/2024"
  }]
  return(
    <div>
      <Header/>
      <AddNote/>
    </div>
  );
}
export default App;
