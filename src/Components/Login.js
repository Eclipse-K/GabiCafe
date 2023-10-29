import styled from "styled-components";
import cafeLogo from "./Images/LogoGabi.png";
import LoginContainer from "./LoginElement/LoginContainer";
import LoginLink from "./LoginElement/LoginLink";
import LoginLabel from "./LoginElement/LoginLabel";
import LoginInput from "./LoginElement/LoginInput";
import LoginButton from "./LoginElement/LoginButton";
import KaKaoButton from "./LoginElement/KaKaoButton";

const LoginLogo = styled.img`
  display: block;
  margin: 16px auto;
  width: 350px;

  @media all and (max-width: 700px) {
    width: 250px;
  }
`;

const LoginDescription = styled.div`
  color: #848187;
  text-align: center;
`;

function Login() {
  return (
    <LoginContainer>
      <LoginLink to="/">
        <LoginLogo src={cafeLogo} alt="cafeLogo" />
      </LoginLink>
      <LoginDescription>
        회원이 아니신가요? <LoginLink>회원가입 하기</LoginLink>
      </LoginDescription>
      <form>
        <LoginLabel htmlFor="email">이메일</LoginLabel>
        <LoginInput
          type="email"
          id="email"
          name="email"
          placeholder="cafe@gabicafe.kr"
        />
        <LoginLabel htmlFor="password">비밀번호</LoginLabel>
        <LoginInput
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
        />
        <LoginButton type="submit">로그인 하기</LoginButton>
      </form>
      <KaKaoButton />
    </LoginContainer>
  );
}

export default Login;
