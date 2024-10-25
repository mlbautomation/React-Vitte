import { useState } from "react";
import TextArea from "./components/textArea/textArea";
import TextButton from "./components/textArea/textButton";
import Request from "./components/request/request";
import TextAreaScrollExample from "./components/textArea/textAreaScrollExample";
import "./App.css";
function App() {
  const [text, setText] = useState("initial text ...");

  const writeTextArea = (inputText) => {
    setText(inputText);
  };

  return (
    <>
      {/*       
      <TextArea text={text} />
      <TextButton writeTextArea={writeTextArea} />
      <Request /> 
      */}
      <TextAreaScrollExample />
    </>
  );
}

export default App;
