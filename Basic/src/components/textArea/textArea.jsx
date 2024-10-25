const TextArea = ({ text }) => {
  return (
    <>
      <textarea
        className="messagearea"
        id="chatmessages"
        name="chatmessages"
        rows="4"
        cols="50"
        value={text}
        readOnly={true}
      ></textarea>
      <br />
    </>
  );
};

export default TextArea;
