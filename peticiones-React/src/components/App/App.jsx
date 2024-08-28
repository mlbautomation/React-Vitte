import { Outlet } from "react-router";
import Menu from "../Menu/Menu";

const App = () => {
  return (
    <div className="app-container">
      <Menu />
      <Outlet />
    </div>
  );
};
export default App;
