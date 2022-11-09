import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Flex from "../styled/Flex.Styled";
import { Brand, NavbarStyled, Menu, MenuLink, Hamburger } from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavbarStyled justify="space-between" wrap="wrap">
      <Brand to="/">
        <h3>
          <i>Food Menu</i> <span theme="">App</span>
        </h3>
      </Brand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="logout" onClick={() => sessionStorage.clear()}>
          Logout
        </MenuLink>
      </Menu>
    </NavbarStyled>
  );
};

export default Navbar;
