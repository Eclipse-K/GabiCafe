import styled from "styled-components";
import GoogleIcon from "./Google.svg";

const Icon = styled.img`
  margin: 0;
  width: 60%;
  height: 100%;
`;

const GoogleStyleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background-color: #f2f2f2;
  cursor: pointer;
  width: 100%;
  height: 48px;
  margin-top: 8px;
`;

function GoogleButton({ className }) {
  return (
    <GoogleStyleButton className={className}>
      <Icon src={GoogleIcon} alt="Google icon" />
    </GoogleStyleButton>
  );
}

export default GoogleButton;
