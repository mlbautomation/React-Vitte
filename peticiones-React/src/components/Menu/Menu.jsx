import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import "./Menu.css";

const Menu = () => {
  const navigation = useNavigate();
  const user = useContext(UserContext);

  return (
    <>
      <nav className="main-menu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cryptocurrency">Crypto List</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile of {user.name}</NavLink>
          </li>
          <li>
            <a
              onClick={() => {
                localStorage.removeItem("tokenEDmarket");
                navigation("/login");
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
