import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import {MainHeader} from "./componentStyles/headerStyled";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

export default Header;
