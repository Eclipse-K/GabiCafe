import styled from "styled-components";

const ReverseButton = styled.div`
  width: 40px;
  height: 40px;
  padding: 0;
  top: 10px;
  left: 90%;
  position: relative;
  background-color: white;
  border: 1px solid white;
  border-radius: 50px;

  .Reverse-link {
    width: 40px;
    height: 40px;
  }

  .Reverse-icon {
    width: 40px;
    height: 40px;
    color: black;
  }

  @media all and (max-width: 700px) {
    width: 30px;
    height: 30px;
    left: 85%;

    .Reverse-icon {
      width: 30px;
      height: 30px;
    }
  }
`;

export default ReverseButton;
