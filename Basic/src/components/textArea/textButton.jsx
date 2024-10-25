import { useState } from "react";

const TextButton = ({ writeTextArea }) => {
  const [inputText, setInputText] = useState("");
  const handleButtonClick = (e) => {
    e.preventDefault();
    writeTextArea(inputText);
  };

  return (
    <>
      <form id="messageform">
        <br />
        <label htmlFor="writemessage">Message: </label>
        <input
          type="text"
          id="writemessage"
          name="writemessage"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <br />
        <input
          type="submit"
          value="Write message"
          onClick={handleButtonClick}
        />
      </form>
      <br />
      <br />
    </>
  );
};

export default TextButton;
