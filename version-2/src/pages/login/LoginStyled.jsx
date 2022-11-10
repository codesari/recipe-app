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

  padding: 60px 50px 80px 50px;
  background: rgb(90, 47, 39, 0.5);

  border-radius: 10px;
  border-top: #eda911 solid 15px;
`;
export const LoginInput = styled.input`
  border: none;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  /* background: transparent; */
  border-bottom: 1px solid black;
`;
export const LoginButton = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: black;
  color: white;
  width: 40%;
  border-radius: 30px;
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
  &:active {
    transform: scale(0.97);
  }
`;
