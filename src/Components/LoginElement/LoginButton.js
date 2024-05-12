import styled from "styled-components";
import LoginSpinner from "./LoginSpinner";

function BaseButton({ loading, children, ...props }) {
  return <button {...props}>{loading ? <LoginSpinner /> : children}</button>;
}

const LoginButton = styled(BaseButton)`
  background-color: #08692a;
  border: none;
  border-radius: ${({ round }) => (round ? `9999px` : `8px`)};
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  padding: 16px;
  font-family: "Gugi", cursive;
`;

export default LoginButton;
