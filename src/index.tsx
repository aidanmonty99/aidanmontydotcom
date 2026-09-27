import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ResumeButton from "./ResumeButton.tsx";
import Menu from "./Menu.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu />
    <App />
    <ResumeButton />
  </React.StrictMode>,
);
