import styled from "styled-components";

export const NavbarDiv = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.navLinkColor};
`;
export const NavFlex = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const H1 = styled.h1`
  margin-left: 1rem;
  color: ${({ theme }) => theme.brown};
`;
