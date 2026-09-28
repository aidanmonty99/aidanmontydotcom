import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ResumeButton from "./ResumeButton.tsx";
import MenuButton from "./MenuButton.tsx";
import type { MenuState } from "./typings.ts";
import SideNavigation from "./SideNavigation.tsx";

function Root() {
  const [currentMenuState, setMenuState] = useState<MenuState>("closed");

  return (
    <React.StrictMode>
      <MenuButton
        currentMenuState={currentMenuState}
        setMenuState={setMenuState}
      />
      <SideNavigation
        currentMenuState={currentMenuState}
        setMenuState={setMenuState}
      />
      <App />
      <ResumeButton />
    </React.StrictMode>
  );
}

const container = document.getElementById("root");
if (!container) throw new Error('Root element "#root" was not found.');

ReactDOM.createRoot(container).render(<Root />);
