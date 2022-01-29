import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { submenu } from "../../bd";
import { Icon } from "@iconify/react";

function NavList() {
  const getInitialState = () => false;
  const [list, setList] = useState(getInitialState);

  const handleListClick = () => {
    setList((currentValue) => !currentValue);
  };

  return (
    <ul className="header__list">
      <li
        className="header__list-item"
        onClick={() => setList(handleListClick)}
      >
        <div
          className="header__list-wrapper"
          onClick={() => setList(handleListClick)}
        >
          <NavLink to="/" className="header__list-link">
            <Icon
              className={"home-icon nav-icon"}
              icon="akar-icons:home"
              height={24}
            />
            Home
          </NavLink>
        </div>
      </li>
      <li
        className="header__list-item"
        onClick={() => setList(handleListClick)}
      >
        <NavLink
          to="library"
          className="header__list-link"
          data-nameIcon={"Library"}
        >
          <Icon
            className="library-icon nav-icon"
            icon="iconoir:album-list"
            height="23"
          />
          Library
        </NavLink>
      </li>

      {list &&
        submenu.map((item) => {
          return (
            <li className="header__list-item">
              <NavLink to={item.url} className="header__list-submenu">
                {item.title}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );

  // return (
  //   <ul className="header__list">
  //     {navLists.map((link, idx) => {
  //       return (
  //         <li className="header__list-item">
  //           <NavLink
  //             to={link.url}
  //             className="header__list-link"
  //             data-nameIcon={link.title}
  //             key={idx + link.title}
  //             onClick={() => setList(handleListClick)}
  //           >
  //             {link.title}
  //           </NavLink>
  //         </li>
  //       );
  //     })}
}

export default NavList;
