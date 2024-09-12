import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Clock from "./components/Clock.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Clock />
  </StrictMode>
);
