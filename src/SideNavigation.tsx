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
        <a
          className="navigation-text"
          href="https://www.linkedin.com/in/aidan-monty/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="navigation-text"
          href="https://github.com/aidanmonty99"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="navigation-text"
          href="mailto:aidan.m.monty@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email me
        </a>
      </div>
    </>
  );
}

export default SideNavigation;
