import styled from "styled-components";
import LoginInput from "./LoginInput";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  font-family: "Gugi", cursive;

  ${LoginInput} {
    margin-bottom: 16px;
  }

  @media all and (max-width: 768px) {
    width: 80%;
    justify-content: flex-start;
  }
`;

export default LoginContainer;
