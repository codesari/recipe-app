import styled from "styled-components";

export const NavbarDiv = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.brown};
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
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
  color: ${({ theme }) => theme.navLinkColor};
`;

export const Brand = styled.img`
  width: 100px;
  height: 100px;
  position: relative;
  top: 15px;
  left: 5px;
`;
