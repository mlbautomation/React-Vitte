import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App/App";
import Home from "./components/Home/Home";
import Grid from "./components/Grid/Grid";
import CryptoPage from "./components/Crypto/CryptoPage";
import Page404 from "./components/404";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/cryptocurrency" element={<App />}>
        <Route index element={<Grid />} />
        <Route path=":id" element={<CryptoPage />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
