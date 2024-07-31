import styled from "styled-components";
import LoginButton from "../LoginElement/LoginButton";
import kakaoIcon from "./kakao.svg";

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const StyledButton = styled(LoginButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 48px;
  margin-top: 8px;

  ${Icon} {
    margin-right: 8px;
  }
`;

function KakaoButton({ className }) {
  return (
    <StyledButton className={className}>
      <Icon src={kakaoIcon} alt="kakao icon" />
      카카오 로그인
    </StyledButton>
  );
}

export default KakaoButton;
