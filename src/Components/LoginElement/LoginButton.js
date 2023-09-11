import styled from "styled-components";

const LoginButton = styled.button`
  background-color: #08692a;
  border: none;
  border-radius: ${({ round }) => (round ? `9999px` : `8px`)};
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  padding: 16px;

  &:hover,
  &:active {
    background-color: #56c17b;
  }
`;

export default LoginButton;
