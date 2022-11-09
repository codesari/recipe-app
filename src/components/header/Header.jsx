import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
} from "./Header.style";

const Header = ({ setQuery }) => {
  return (
    <HeaderContainer>
      <MainHeader>Food-App</MainHeader>

      <FormContainer>
        <FoodInput
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button>SEARCH</Button>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
