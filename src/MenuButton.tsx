import { useState } from "react";

function MenuButton() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    // Only trigger if it's not already animating
    if (!isAnimating) {
      setIsAnimating(true);
    }
  };

  return (
    <>
      <div
        id="menu-button"
        onClick={handleClick}
        className={isAnimating ? "menu-animate" : ""}
        onAnimationEnd={() => setIsAnimating(false)}
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
