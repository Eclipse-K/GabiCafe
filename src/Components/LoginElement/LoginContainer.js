import styled from "styled-components";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 700px;
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
    height: 900px;
  }
`;

export default LoginContainer;
