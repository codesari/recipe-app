import React from "react";
import {
  FormContainer,
  LoginContainer,
  StyledImg,
  Header,
  StyledInput,
  StyledButton,
  StyledForm,
} from "./Login.style";

import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userInfo = {
    username: "admin",
    password: "qwerty12345",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    //! kullanici bilgisini true/false yerine session-storage de bir deger olusturarak yaptik
    navigate("/");
    //? nerden geldiysen bir önceki yere git demek daha mantikli direkt home'a yönlendirmektense
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>Food Menu</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Enter your username.." type="text" />
          <StyledInput placeholder="Enter your password" type="password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
