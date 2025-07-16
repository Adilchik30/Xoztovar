import React, { useState } from "react";
import "./NavbarContainer.css";
import {
  IoMenu,
  IoSearch,
  IoCartOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchContainer from "./SearchContainer";

function Navbar() {
  const carts = useSelector((state) => state.cart.value);
  const [value, setValue] = useState("");
  return (
    <div style={{justifyContent: "space-between"}} className="container navbar">
      <NavLink to={"/"} className="navbar__logo">
        <h2>ORIF ULTRAMED</h2>
      </NavLink>
      <ul className="navbar__collection">
        <li className="navbar__item">
          <NavLink to={"/"} className="navbar__link">
            <span>Asosiy sahifa</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={"/wishes"} className="navbar__link">
            <span>Xizmat turlari</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={"/cart"} className="navbar__link">
            <span>
              Shifokor qabuliga yozilish
              {carts.length ? <sup>{carts.length}</sup> : <></>}
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
