import type { MenuState } from "./typings.ts";

function SideNavigation(props: {
  currentMenuState: MenuState;
  setMenuState: React.Dispatch<React.SetStateAction<MenuState>>;
}) {
  const getClassName = (): string => {
    switch (props.currentMenuState) {
      case "opening":
        return "navigation-opening";
      case "open":
        return "navigation-open";
      case "closing":
        return "navigation-closing";
      case "closed":
      default:
        return "navigation-closed";
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
        id="side-navigation"
        className={getClassName()}
        onAnimationEnd={handleAnimationEnd}
      >
        <a>LinkedIn</a>
        <a>GitHub</a>
        <a>Email me</a>
      </div>
    </>
  );
}

export default SideNavigation;
