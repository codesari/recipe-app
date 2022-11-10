import React from "react";
import { H1, NavbarDiv, NavFlex, NavLink } from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavbarDiv>
      <NavFlex>
        <div>
          <H1>Recipe</H1>
        </div>
        <div>
          <NavLink href="/">Home</NavLink>
          <NavLink href="about">About</NavLink>
          <NavLink href="login">Login</NavLink>
        </div>
      </NavFlex>
    </NavbarDiv>
  );
};

export default Navbar;
