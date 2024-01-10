import styled from "styled-components";

const LargeImg = styled.img`
  border: 5px double black;
  width: 500px;
  height: 500px;
  margin-left: 10px;

  @media all and (min-width: 281px) and (max-width: 432px) {
    width: 250px;
    height: 250px;
  }

  @media all and (min-width: 450px) and (max-width: 1180px) {
    width: 300px;
    height: 300px;
  }
`;

export default LargeImg;
