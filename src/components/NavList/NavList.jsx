import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@mui/material";
import { Icon } from "@iconify/react";
import { GrHomeRounded } from "react-icons/gr";
import { MdLibraryMusic } from "react-icons/md";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { submenu } from "../../bd";
import { MusicContext } from "../../index";

function NavList() {
  const getInitialState = () => false;
  const [list, setList] = useState(getInitialState);
  const { auth } = useContext(MusicContext);
  const [user] = useAuthState(auth);

  const handleListClick = () => {
    setList(!list);
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
      <li className="header__list-item">
        <div
          className="header__list-wrapper"
          onClick={() => setList(handleListClick)}
        >
          <NavLink
            to="library"
            className="header__list-link"
            data-nameicon={"Library"}
          >
            <Icon
              className="library-icon nav-icon"
              icon="iconoir:album-list"
              height="23"
            />
            Library
          </NavLink>
        </div>
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

      <li className="header__list-item">
        <Button onClick={() => auth.signOut()} size="small" variant="contained">
          <ExitToAppOutlinedIcon />
        </Button>
      </li>
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
