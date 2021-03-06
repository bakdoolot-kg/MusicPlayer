import "./header.scss";

import { NavList } from "../";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <span className="header__logo">B</span>
      </div>
      <NavList />
    </header>
  );
}

// export default Header;
