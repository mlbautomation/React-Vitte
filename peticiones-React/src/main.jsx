import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App/App";
import Home from "./components/Home/Home";
import Profile from "./components/Users/Profile";
import Grid from "./components/Grid/Grid";
import CryptoPage from "./components/Crypto/CryptoPage";
import Login from "./components/Users/Login";
import Page404 from "./components/404";
import "./main.css";
import { UserContextProvider } from "./context/userContext";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/cryptocurrency" element={<App />}>
          <Route index element={<Grid />} />
          <Route path=":id" element={<CryptoPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
);
