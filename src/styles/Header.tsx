import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.colors.header};
  padding: 20px;

  h1 {
    color: red;
    display: inline-block;

    &:hover {
      color: blue;
      cursor: pointer;
    }
  }

  & .something {
    background: orange; 
  }
`;