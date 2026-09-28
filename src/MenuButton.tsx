import type { MenuState } from "./typings.ts";
import { useRef } from "react";

function MenuButton(props: {
  currentMenuState: MenuState;
  setMenuState: React.Dispatch<React.SetStateAction<MenuState>>;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    // Only trigger if it's not already animating
    if (props.currentMenuState === "closed") {
      props.setMenuState("opening");
    } else if (props.currentMenuState === "open") {
      props.setMenuState("closing");
    }
  };

  const getClassName = (): string => {
    switch (props.currentMenuState) {
      case "opening":
        return "menu-opening";
      case "open":
        return "menu-open";
      case "closing":
        return "menu-closing";
      case "closed":
      default:
        return "menu-closed";
    }
  };

  const handleAnimationEnd = () => {
    if (props.currentMenuState === "opening") {
      props.setMenuState("open");
    } else if (props.currentMenuState === "closing") {
      props.setMenuState("closed");
    }
  };

  return (
    <>
      <div
        id="menu-button"
        onClick={handleClick}
        className={getClassName()}
        onAnimationEnd={handleAnimationEnd}
        ref={menuRef}
      >
        <div className="menu-bar" />
        <div className="menu-space" />
        <div className="menu-bar" />
        <div className="menu-space" />
        <div className="menu-bar" />
      </div>
    </>
  );
}

export default MenuButton;
