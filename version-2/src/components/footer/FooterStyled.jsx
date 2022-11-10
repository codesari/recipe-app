import styled from "styled-components";

export const FooterDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.brown};
`;

export const FooterFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H3 = styled.h3`
  margin-left: 1rem;
  color: ${({ theme }) => theme.bgColor};
`;
