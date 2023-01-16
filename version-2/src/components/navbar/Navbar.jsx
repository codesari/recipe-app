import React from "react";
import { Brand, H1, NavbarDiv, NavFlex, NavLink } from "./NavbarStyled";
import img from "../../assets/images/recipe-logo.png";
import { Flex } from "../global/Flex";

const Navbar = () => {
  return (
    <NavbarDiv>
      <NavFlex>
        <Flex>
          <Brand src={img} />
          <H1>Recipe Book</H1>
        </Flex>
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
