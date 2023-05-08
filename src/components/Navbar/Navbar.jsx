import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const Menu = () => {
  return (
    <>
      <NavLink to="/" className="items">
        <p className="item-num">01.</p>
        <p>Home</p>
      </NavLink>
      <NavLink to="/Projects" className="items">
        <p className="item-num">02.</p>
        <p>Projects</p>
      </NavLink>
      <NavLink className="items">
        <p className="item-num">03.</p>
        <p>About</p>
      </NavLink>
      <NavLink className="items">
        <p className="item-num">04.</p>
        <p>Experience</p>
      </NavLink>
      <NavLink className="items">
        <p className="item-num">05.</p>
        <p>Contact</p>
      </NavLink>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openFunc = () => {
    setOpen(!open);
  };
  return (
    <div className="navbar">
      <img src={logo} alt="UR logo" />
      <div className="menu">
        <Menu />
      </div>
      <div className="hamburger">
        <HiMenuAlt3 className="ham-icon" onClick={openFunc} />
        {open && (
          <div className="ham-menu">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
