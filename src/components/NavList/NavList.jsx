import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLists } from "../../bd";
import { submenu } from "../../bd";

function NavList() {
  const [list, setList] = useState(submenu);

  function handleListClick() {
    let listSubmenu = submenu.map((item, idx) => {
      return (
        <a href={item.url} key={idx + item.title}>
          {item.title}
        </a>
      );
    });
    console.log(listSubmenu);
  }
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
              onClick={() => setList(handleListClick)}
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
