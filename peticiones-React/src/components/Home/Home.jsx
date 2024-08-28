import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Hello, wellcome to MLB Application</h1>
      <p className="subtitle">Know the 100 cryptocurrency most used</p>
      <Link to="/cryptocurrency" className="link">
        See Crytocurrency
      </Link>
    </div>
  );
};

export default Home;
