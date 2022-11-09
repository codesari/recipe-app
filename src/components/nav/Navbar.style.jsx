import styled from "styled-components";
import Flex from "../styled/Flex.Styled";
import { Link } from "react-router-dom";

export const NavbarStyled = styled(Flex)`
  padding: 1rem;
  /* justify-content: space-between; */
  //? justify'ı burada degistirmek yerine component icinde yazarak dynamic olarak style veriyoruz
`;

export const Brand = styled(Link)`
  //* buradaki Link  react-dom'dan gelen link..kendi olusturdugumuz style component degil !!!!
  color: ${({ theme }) => theme.colors.mainColor};
`;
export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    overflow: hidden;
  }
`;
export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;
  display: none;
  color: ${({ theme }) => theme.colors.mainColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;
