import styled from "styled-components";

export const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 140px);
  background-image: url(https://picsum.photos/1600/900);
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 30%;

  background: rgb(90, 47, 39, 0.5);

  border-radius: 10px;
  border-top: #eda911 solid 15px;
`;
export const LoginInput = styled.input`
  border: none;
  border-radius: 5px;
  padding: 0.7rem;
  margin: 0.7rem;
  border-bottom: 1px solid black;
  position: relative;
  top: -50px;
`;
export const LoginButton = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: black;
  color: white;
  width: 40%;
  border-radius: 30px;
  position: relative;
  top: -50px;
  &:active {
    transform: scale(0.97);
  }
`;
export const GuestButton = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #eda911;
  color: black;
  width: 30%;
  border-radius: 30px;
  border: none;
  position: relative;
  top: -50px;
  &:active {
    transform: scale(0.97);
  }
`;
export const LoginImg = styled.img`
  width: 200px;
  height: 200px;
  position: relative;
  top: -50px;
`;
