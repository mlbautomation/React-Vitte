import { useRef } from "react";

const Focus = () => {
  const InputRef = useRef();

  const handleButtonClick = () => {
    if (!InputRef.current) {
      console.log("No existe la referencia al elemento");
      return;
    }
    InputRef.current.focus();
  };
  return (
    <div>
      <input ref={InputRef} type="text" placeholder="Write something here..." />
      <br />
      <button onClick={handleButtonClick}>Enfocar en el input</button>
      <br />
      <br />
    </div>
  );
};

export default Focus;
