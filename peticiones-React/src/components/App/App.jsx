import { Navigate, Outlet } from "react-router";
import Menu from "../Menu/Menu";

const App = () => {
  if (!localStorage.getItem("tokenEDmarket")) return <Navigate to="/login" />;

  return (
    <div className="app-container">
      <Menu />
      <Outlet />
    </div>
  );
};
export default App;
