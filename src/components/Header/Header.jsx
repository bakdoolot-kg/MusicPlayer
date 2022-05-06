import { useState } from "react";

import { NavList } from "../";

import "./header.scss";

export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header
      className={active ? "header active" : "header"}
      onClick={handleClick}
    >
      <div className="header__logo-wrapper">
        <span className="header__logo" onClick={handleClick}>
          B
        </span>
      </div>
      <NavList />
    </header>
  );
}

// export default Header;
