const Article3 = ({ imgSrc, title, content }) => {
  return (
    <>
      <div>
        <img src={imgSrc} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Article3;
