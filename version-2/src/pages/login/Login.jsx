import React from "react";
import {
  ButtonFlex,
  GuestButton,
  LoginButton,
  LoginDiv,
  LoginFlex,
  LoginForm,
  LoginImg,
  LoginInput,
  PositionForm,
} from "./LoginStyled";
import img from "../../assets/images/recipe-login.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Invalid login.");
  };
  return (
    <LoginDiv>
      <LoginForm onSubmit={handleSubmit}>
        <LoginImg src={img} />
        <LoginInput type="email" placeholder="Enter your email.." />
        <LoginInput type="text" placeholder="Enter your username.." />
        <LoginInput type="password" placeholder="Enter your password.." />
        <LoginButton type="submit">LOGİN</LoginButton>
        <GuestButton type="submit" onClick={() => navigate("/")}>
          GUEST USER
        </GuestButton>
      </LoginForm>
    </LoginDiv>
  );
};

export default Login;
