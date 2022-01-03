import React from "react";
import { NavLink } from "react-router-dom";
import { navLists } from "../../bd";

function NavList() {
  return (
    <ul className="header__list">
      {navLists.map((link, idx) => {
        return (
          <li className="header__list-item">
            <NavLink
              to={link.url}
              className="header__list-link"
              data-nameIcon={link.title}
              key={idx + link.title}
            >
              {link.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default NavList;
