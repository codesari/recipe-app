import React from "react";
import {
  GuestButton,
  LoginButton,
  LoginDiv,
  LoginFlex,
  LoginForm,
  LoginInput,
} from "./LoginStyled";

const Login = () => {
  return (
    <LoginDiv>
      <LoginForm>
        <LoginInput type="email" placeholder="Enter your email.." />
        <LoginInput type="text" placeholder="Enter your username.." />
        <LoginInput type="password" placeholder="Enter your password.." />
        <LoginButton type="submit">LOGİN</LoginButton>
        <GuestButton type="submit">GUEST USER</GuestButton>
      </LoginForm>
    </LoginDiv>
  );
};

export default Login;
