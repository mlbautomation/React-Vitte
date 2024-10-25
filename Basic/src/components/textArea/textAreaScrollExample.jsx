import React, { useRef, useState } from "react";

const TextAreaScrollExample = () => {
  const textareaRef = useRef(null);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);

    if (textareaRef.current) {
      // Ajustar scrollTop al valor deseado al cambiar el texto
      //textareaRef.current.scrollTop = textareaRef.current.scrollHeight; // Puedes usar cualquier valor que quieras
      textareaRef.current.scrollTop = 5000;
    }
  };

  return (
    <div>
      <textarea
        ref={textareaRef}
        rows="10"
        cols="50"
        style={{ resize: "none", overflow: "auto" }}
        placeholder="Escribe algo aquí..."
        value={text}
        onChange={handleTextChange} // Se ajusta el scroll en cada cambio de texto
      />
    </div>
  );
};

export default TextAreaScrollExample;
