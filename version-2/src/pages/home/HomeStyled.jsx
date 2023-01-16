import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 140px);
  /* 1vh = 19.2px */
  background-color: #eae9e4;
`;
export const HomeForm = styled.form`
  /* border: 2px solid red; */
  width: 50%;
  height: 100%;
  border-radius: 10px;
  border-top: #eda911 solid 15px;
  background: rgb(90, 47, 39);
  margin-right: 15rem;
`;

export const HomeH1 = styled.h1`
  color: #5a2f27;
  font-size: 100px;
  line-height: 120px;

  font-weight: bold;
  width: 30%;
  height: 100%;

  position: relative;
  top: 60px;
  left: 200px;
  /* border: 2px solid red; */
`;

export const HomeInput = styled.input`
  border: none;
  border-radius: 5px;
  padding: 0.7rem;
  margin: 0.7rem;
  border-bottom: 1px solid black;
`;
export const HomeSelect = styled.select`
  padding: 0.5rem;
  margin-left: 0.5rem;
`;
export const SearchButton = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: black;
  color: white;
  width: 20%;
  border-radius: 30px;

  &:active {
    transform: scale(0.97);
  }
`;
