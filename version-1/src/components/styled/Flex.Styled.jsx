import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  /* parametre olarak justify'a ne verilirse o gecerli olur aksi takdirde default center yaptik  */
  align-items: ${({ align }) => (align ? align : "center")};
  flex-wrap: ${({ wrap }) => wrap};
  /* wrap && wrap */
`;

export default Flex;
