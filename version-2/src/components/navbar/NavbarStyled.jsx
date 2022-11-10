import styled from "styled-components";

export const NavbarDiv = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.brown};
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 2rem;
  padding: 1rem;
  color: ${({ theme }) => theme.navLinkColor};
`;
export const NavFlex = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
