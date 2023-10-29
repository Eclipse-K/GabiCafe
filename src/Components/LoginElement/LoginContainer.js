import styled from "styled-components";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

const LoginContainer = styled.div`
  width: 400px;
  margin: 40px auto;
  font-family: "Gugi", cursive;

  ${LoginInput} {
    margin-bottom: 16px;
  }

  ${LoginButton} {
    width: 100%;
    margin: 8px 0;
  }

  @media all and (max-width: 768px) {
    width: 80%;
  }
`;

export default LoginContainer;
