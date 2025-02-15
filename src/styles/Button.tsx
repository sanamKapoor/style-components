import styled,{ keyframes } from "styled-components";

export const StyledButton = styled.button`
    border: 1px solid green;
    padding: 10px 30px;
    color: white;
    background: green;
`;

export const NewStyledButton = styled(StyledButton)`
    border-radius: 20px;
    cursor: pointer
`;

export const SubmitStypedButton = styled(StyledButton)
  //     .attrs((props) => ({
  //   type: "submit",
  //     }))
  .attrs({
    type: "submit",
  })`
  &:active {
    cursor: pointer;
    background: red;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled.img`
  height: 200px;
  border-radius: 50%;
  animation: ${rotate} infinite 3s linear;
`;