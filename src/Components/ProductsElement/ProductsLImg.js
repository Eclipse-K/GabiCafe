import styled from "styled-components";

const LargeImg = styled.img`
  border: 5px double black;
  width: 500px;
  height: 500px;
  margin-left: 10px;

  @media all and (min-width: 281px) and (max-width: 432px) {
    width: 200px;
    height: 200px;
  }

  @media all and (min-width: 600px) and (max-width: 1180px) {
    width: 400px;
    height: 400px;
  }
`;

export default LargeImg;
