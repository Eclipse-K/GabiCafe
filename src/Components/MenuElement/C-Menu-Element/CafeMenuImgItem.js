import styled from "styled-components";

const CafeMenuImgItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;

  img {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    border-radius: 20px;
  }

  p {
    margin-top: 5px;
    margin-bottom: 20px;
  }

  @media all and (max-width: 700px) {
    width: 30%;

    img {
      width: 100px;
      height: 100px;
    }

    p {
      font-size: 10px;
    }
  }
`;

export default CafeMenuImgItem;
